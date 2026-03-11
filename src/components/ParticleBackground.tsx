import { useEffect, useRef } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    // Arrays of neon CYANS and PURPLES to randomly pick from
    const colors = [
      { r: 0, g: 255, b: 255 },    // Neon Cyan
      { r: 40, g: 190, b: 255 },   // Deep Cyan
      { r: 170, g: 80, b: 255 },   // Neon Purple
      { r: 210, g: 120, b: 255 }   // Light Purple
    ];
    
    type Particle = { x: number; y: number; vx: number; vy: number; baseSize: number; size: number; phase: number; color: {r: number, g: number, b: number} };
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Increase particles slightly for a denser, more "AI/Neural" feel
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseSize: Math.random() * 2 + 0.5,
        size: 0,
        phase: Math.random() * Math.PI * 2, // for pulsing animation
        color: colors[Math.floor(Math.random() * colors.length)] // assign a random neon color
      });
    }

    const animate = () => {
      // Create a slight trailing effect
      ctx.fillStyle = "rgba(10, 15, 25, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off walls smoothly
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Pulse size using Sine wave
        p.phase += 0.02;
        p.size = p.baseSize + Math.sin(p.phase) * 1;
        if(p.size < 0.1) p.size = 0.1;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Dynamic glow based on assigned color
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 1)`;
        ctx.fill();
        
        // Reset shadow for lines
        ctx.shadowBlur = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // Neural Network style connections
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Mix colors or use white-ish opacity for connections
            const opacity = 0.15 * (1 - dist / 180);
            
            // Gradient line between the two particles
            const gradient = ctx.createLinearGradient(p.x, p.y, particles[j].x, particles[j].y);
            gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${particles[j].color.r}, ${particles[j].color.g}, ${particles[j].color.b}, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-70" />;
};

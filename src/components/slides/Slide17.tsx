import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const conclusions = [
  "AI is transforming modern research and data analysis",
  "Helps researchers analyze complex data efficiently",
  "AI tools improve visualization, prediction, and decision-making",
  "Despite limitations, AI will continue to play a major role in future research",
];

const ConfettiParticle = ({ delay }: { delay: number }) => {
  const colors = ["hsl(192,100%,50%)", "hsl(46,92%,53%)", "hsl(210,40%,95%)"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const x = Math.random() * 100;
  const rotation = Math.random() * 720 - 360;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: `${x}vw`, rotate: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: ["0vh", "100vh"], rotate: rotation }}
      transition={{ duration: 3, delay, ease: "easeOut" }}
      className="absolute w-2 h-2 rounded-sm"
      style={{ backgroundColor: color, left: 0 }}
    />
  );
};

export const Slide17 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="slide-17" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden" ref={ref}>
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {Array.from({ length: 30 }).map((_, i) => (
            <ConfettiParticle key={i} delay={i * 0.08} />
          ))}
        </div>
      )}
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        <FadeUp>
          <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 122</p>
          <h2 className="section-heading mb-12">
            <span className="glow-text-cyan">Conclusion</span>
          </h2>
        </FadeUp>
        <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-16 text-left">
          {conclusions.map((c, i) => (
            <StaggerItem key={i}>
              <div className="glass-card-glow p-5 flex items-start gap-3">
                <span className="text-primary font-heading font-bold text-lg">{i + 1}.</span>
                <p className="text-sm text-foreground/90">{c}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeUp delay={0.4}>
          <div className="glass-card-purple p-6 mb-12 max-w-3xl mx-auto border-l-4 border-l-primary relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <p className="text-xl md:text-2xl font-heading font-medium text-foreground relative z-10">
               "AI is not replacing Researchers, but <span className="glow-text-cyan font-bold italic">empowering</span> them with smarter tools."
             </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.6}>
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-heading font-bold glow-text-gold mb-6">Thank You</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[117, 118, 119, 120, 121, 122].map((roll) => (
              <motion.span
                key={roll}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + (roll - 117) * 0.1 }}
                className="px-4 py-2 glass-card-glow text-sm font-heading font-semibold text-primary"
              >
                Roll {roll}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

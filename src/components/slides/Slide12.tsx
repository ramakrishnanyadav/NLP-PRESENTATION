import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const reasons = [
  "Makes complex data easy to understand",
  "Helps identify trends and outliers quickly",
  "Supports faster and better decision-making",
];

export const Slide12 = () => (
  <section id="slide-12" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 120 — Slide 1</p>
        <h2 className="section-heading mb-6">
          What is <span className="glow-text-gold">Data Visualization</span>?
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="glass-card p-5 mb-8">
          <p className="text-foreground/90">
            Data visualization is the graphical representation of information and data using visual elements like charts, graphs, and maps.
          </p>
        </div>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-10">
        {reasons.map((r, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-5 text-center hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">{["📊", "📈", "✅"][i]}</div>
              <p className="text-sm text-foreground/90">{r}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.4}>
        <div className="glass-card p-6 relative overflow-hidden">
          <p className="text-xs text-muted-foreground mb-3">[Image: Data Visualization Example]</p>
          <div className="h-32 relative">
            <svg viewBox="0 0 400 100" className="w-full h-full">
              <polyline points="0,80 50,60 100,70 150,30 200,45 250,20 300,35 350,15 400,25" fill="none" stroke="hsl(192,100%,50%)" strokeWidth="2" opacity="0.6" />
              <polyline points="0,90 50,75 100,80 150,50 200,60 250,40 300,55 350,30 400,40" fill="none" stroke="hsl(46,92%,53%)" strokeWidth="2" opacity="0.6" />
            </svg>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

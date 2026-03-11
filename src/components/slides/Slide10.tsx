import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import powerBiImg from "@/assets/power-bi.png";

const features = [
  { emoji: "🔗", text: "Connects data from multiple sources" },
  { emoji: "📊", text: "Creates interactive dashboards" },
  { emoji: "📈", text: "Converts data into graphs and charts" },
  { emoji: "🤖", text: "Provides AI-powered insights" },
];

export const Slide10 = () => (
  <section id="slide-10" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 4</p>
        <h2 className="section-heading mb-6">
          AI Tool: <span className="glow-text-gold">Power BI</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <div className="glass-card p-4 mb-8 inline-flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center font-heading font-bold text-accent text-xs">PBI</div>
          <p className="text-sm text-foreground/90">
            Power BI is a data visualization and business intelligence tool developed by Microsoft.
          </p>
        </div>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-10">
        {features.map((f, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-5 flex items-center gap-4 hover:scale-105 transition-transform">
              <span className="text-2xl">{f.emoji}</span>
              <p className="text-sm text-foreground/90">{f.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.5}>
        <div className="glass-card-glow p-6">
          <p className="text-xs text-muted-foreground mb-3 font-heading">Mock Power BI Dashboard</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-primary/10 rounded-lg p-4 h-24 flex flex-col justify-end">
              <div className="w-full flex items-end gap-1 h-12">
                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="bg-accent/10 rounded-lg p-4 h-24 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-accent/40 border-t-accent" />
            </div>
            <div className="bg-primary/10 rounded-lg p-4 h-24 flex flex-col justify-end">
              <svg viewBox="0 0 100 40" className="w-full h-10">
                <polyline points="0,35 15,28 30,30 45,15 60,20 75,10 100,5" fill="none" stroke="hsl(192,100%,50%)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.6}>
        <div className="glass-card-glow p-4 mt-8">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={powerBiImg} alt="Example AI Tool: Power BI" className="w-full max-w-4xl mx-auto rounded-lg" />
        </div>
      </FadeUp>
    </div>
  </section>
);

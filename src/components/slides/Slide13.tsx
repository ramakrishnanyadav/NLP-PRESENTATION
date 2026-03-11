import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const features = [
  { emoji: "🤖", title: "Automated Insights", desc: "AI automatically generates charts and summaries from raw data" },
  { emoji: "💬", title: "Natural Language Processing", desc: "Users can ask questions in plain language; AI returns visual answers" },
  { emoji: "📈", title: "Predictive Visuals", desc: "AI forecasts future trends and renders them as live visual graphs" },
];

export const Slide13 = () => (
  <section id="slide-13" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 120 — Slide 2</p>
        <h2 className="section-heading mb-12">
          AI in <span className="glow-text-cyan">Visualization</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
        {features.map((f, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="font-heading font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <div className="grid md:grid-cols-2 gap-5">
        <FadeUp delay={0.3}>
          <div className="glass-card p-5">
            <p className="text-xs text-muted-foreground mb-2">[Placeholder: Power BI Dashboard]</p>
            <div className="h-28 bg-primary/5 rounded-lg flex items-center justify-center text-muted-foreground text-sm">Power BI Screenshot</div>
          </div>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="glass-card p-5">
            <p className="text-xs text-muted-foreground mb-2">[Placeholder: Tableau Dashboard]</p>
            <div className="h-28 bg-accent/5 rounded-lg flex items-center justify-center text-muted-foreground text-sm">Tableau Screenshot</div>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

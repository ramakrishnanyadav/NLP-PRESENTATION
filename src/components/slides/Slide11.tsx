import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import importanceToolsImg from "@/assets/importance-ai-tools.png";

const advantages = [
  { emoji: "⚡", title: "Faster data analysis" },
  { emoji: "📦", title: "Handling large datasets" },
  { emoji: "🎨", title: "Automated visualization" },
  { emoji: "🎯", title: "Improved accuracy" },
  { emoji: "💡", title: "Better research insights" },
];

export const Slide11 = () => (
  <section id="slide-11" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 5</p>
        <h2 className="section-heading mb-12">
          Importance of AI Tools in <span className="glow-text-cyan">Research</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {advantages.map((a, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">{a.emoji}</div>
              <p className="font-heading font-medium text-foreground">{a.title}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.5}>
        <div className="glass-card-gold p-5 text-center">
          <p className="text-foreground/90">
            📌 AI is transforming modern research by making data analysis <span className="glow-text-cyan font-semibold">faster</span>,{" "}
            <span className="glow-text-gold font-semibold">smarter</span>, and more efficient.
          </p>
        </div>
      </FadeUp>
      <FadeUp delay={0.6}>
        <div className="glass-card-glow p-4 mt-8">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={importanceToolsImg} alt="Importance of AI Tools in Research" className="w-full max-w-4xl mx-auto rounded-lg" />
        </div>
      </FadeUp>
    </div>
  </section>
);

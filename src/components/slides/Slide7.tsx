import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import aiToolsIntroImg from "@/assets/ai-tools-intro.png";

const useCases = [
  { emoji: "📂", text: "Process large amounts of research data" },
  { emoji: "🔍", text: "Identify patterns and relationships" },
  { emoji: "📊", text: "Generate visual reports and dashboards" },
  { emoji: "⚡", text: "Improve speed of analysis" },
  { emoji: "🎯", text: "Improve accuracy of results" },
];

export const Slide7 = () => (
  <section id="slide-7" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 1</p>
        <h2 className="section-heading mb-6">
          AI Tools for <span className="glow-text-cyan">Data Analysis</span> and Visualization
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="glass-card-gold p-4 mb-10 text-center">
          <p className="text-foreground/90 text-sm">
            AI tools are software technologies that help researchers analyze and interpret large datasets efficiently.
          </p>
        </div>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {useCases.map((u, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-5 flex items-center gap-4 hover:scale-105 transition-transform">
              <span className="text-2xl">{u.emoji}</span>
              <p className="text-sm text-foreground/90">{u.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.4}>
        <div className="glass-card-glow p-4 mt-10">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={aiToolsIntroImg} alt="AI Tools for Data Analysis and Visualization" className="w-full max-w-4xl mx-auto rounded-lg" />
        </div>
      </FadeUp>
    </div>
  </section>
);

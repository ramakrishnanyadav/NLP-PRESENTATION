import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import commonToolsImg from "@/assets/common-ai-tools.png";

const tools = [
  { emoji: "🐍", name: "Python (Pandas, NumPy)", desc: "Data processing, ML, and automation" },
  { emoji: "📐", name: "R Programming", desc: "Statistical analysis and advanced visualization" },
  { emoji: "📊", name: "Power BI", desc: "Interactive dashboards and BI reports" },
  { emoji: "🎨", name: "Tableau", desc: "Powerful visualizations and data dashboards" },
  { emoji: "💬", name: "ChatGPT", desc: "Analyze data, generate insights, assist with explanations" },
];

export const Slide8 = () => (
  <section id="slide-8" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 2</p>
        <h2 className="section-heading mb-12">
          Popular AI Tools for <span className="glow-text-gold">Data Analysis</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((t, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 hover:scale-105 transition-transform text-center">
              <div className="text-4xl mb-3">{t.emoji}</div>
              <h3 className="text-lg font-heading font-semibold text-primary mb-1">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.4}>
        <div className="glass-card-glow p-4 mt-10">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={commonToolsImg} alt="Common AI Tools Used in Research" className="w-full max-w-4xl mx-auto rounded-lg" />
        </div>
      </FadeUp>
    </div>
  </section>
);

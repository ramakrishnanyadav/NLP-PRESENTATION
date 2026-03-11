import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { AnimatedCounter } from "../AnimatedCounter";

const stats = [
  { end: 90, suffix: "%", label: "Reduction in Manual Errors" },
  { end: 70, suffix: "%", prefix: "40–", label: "Faster Processing" },
  { end: 30, suffix: "%", prefix: "20–", label: "Better Forecast Accuracy" },
  { end: 30, suffix: "%", label: "Cost Reduction" },
];

const advantages = [
  { emoji: "⚡", title: "Faster Data Processing", desc: "Analyzes large datasets in seconds" },
  { emoji: "🎯", title: "Improved Accuracy", desc: "ML reduces human errors, provides precise analysis" },
  { emoji: "🔍", title: "Pattern Recognition", desc: "Identifies hidden trends humans may miss" },
  { emoji: "⚙️", title: "Automation of Tasks", desc: "Cleans, classifies, predicts automatically" },
  { emoji: "✅", title: "Better Decision Making", desc: "AI-driven insights support informed decisions" },
];

export const Slide15 = () => (
  <section id="slide-15" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 122</p>
        <h2 className="section-heading mb-12">
          Advantages of AI in <span className="glow-text-cyan">Research</span>
        </h2>
      </FadeUp>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s, i) => (
          <AnimatedCounter key={i} {...s} />
        ))}
      </div>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {advantages.map((a, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-5 hover:scale-105 transition-transform">
              <div className="text-2xl mb-2">{a.emoji}</div>
              <h4 className="font-heading font-semibold text-primary mb-1">{a.title}</h4>
              <p className="text-xs text-muted-foreground">{a.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

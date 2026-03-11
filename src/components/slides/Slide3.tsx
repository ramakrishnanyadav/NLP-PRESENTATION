import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { Zap, Target, Package, Search, CheckCircle } from "lucide-react";
import importanceImg from "@/assets/importance-ai-research.jpeg";

const cards = [
  { icon: Zap, emoji: "⚡", title: "Faster Data Processing" },
  { icon: Target, emoji: "🎯", title: "Improved Accuracy" },
  { icon: Package, emoji: "📦", title: "Handles Big Data" },
  { icon: Search, emoji: "🔍", title: "Automated Pattern Recognition" },
  { icon: CheckCircle, emoji: "✅", title: "Better Decision-Making" },
];

export const Slide3 = () => (
  <section id="slide-3" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 117</p>
        <h2 className="section-heading mb-12">
          Why AI Matters in <span className="glow-text-gold">Research</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((c, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 text-center group hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">{c.emoji}</div>
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground">{c.title}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Reference Infographic */}
      <FadeUp delay={0.4}>
        <div className="glass-card-glow p-4 mt-10">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img
            src={importanceImg}
            alt="Importance of AI in Research infographic"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </FadeUp>
    </div>
  </section>
);

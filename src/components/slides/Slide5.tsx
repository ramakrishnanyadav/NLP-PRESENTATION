import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { motion } from "framer-motion";
import { Search, Settings, TrendingUp, CheckCircle } from "lucide-react";
import roleAiImg from "@/assets/role-ai-analysis.jpeg";

const spokes = [
  { icon: Search, emoji: "🔍", title: "Pattern Recognition", desc: "Identifies hidden trends in large datasets" },
  { icon: Settings, emoji: "⚙️", title: "Automation", desc: "Automates data cleaning and classification" },
  { icon: TrendingUp, emoji: "📈", title: "Prediction", desc: "Forecasts future outcomes from historical data" },
  { icon: CheckCircle, emoji: "✅", title: "Improved Accuracy", desc: "Reduces bias, improves decisions" },
];

const apps = ["Netflix recommendations", "Banking fraud detection", "Weather prediction", "AI medical diagnosis"];

export const Slide5 = () => (
  <section id="slide-5" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 119</p>
        <h2 className="section-heading mb-12">
          Role of AI in <span className="glow-text-cyan">Data Analysis</span>
        </h2>
      </FadeUp>
      <div className="relative mb-12">
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center glow-border-cyan"
          >
            <span className="text-2xl font-heading font-bold glow-text-cyan">AI</span>
          </motion.div>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {spokes.map((s, i) => (
            <StaggerItem key={i}>
              <div className="glass-card-glow p-5 text-center hover:scale-105 transition-transform">
                <div className="text-2xl mb-2">{s.emoji}</div>
                <h4 className="font-heading font-semibold text-primary mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <FadeUp delay={0.4}>
          <div className="glass-card p-5">
            <h4 className="font-heading font-semibold mb-3 glow-text-gold">Real-World Applications</h4>
            <ul className="space-y-2">
              {apps.map((a, i) => (
                <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {a}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div className="glass-card-glow p-5 flex items-center">
            <p className="text-sm text-foreground/90">
              <span className="glow-text-cyan font-semibold">AI analytics</span> improves forecasting accuracy by{" "}
              <span className="glow-text-gold font-bold">20–30%</span> and reduces operational costs by up to{" "}
              <span className="glow-text-gold font-bold">30%</span>.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Reference Infographic */}
      <FadeUp delay={0.6}>
        <div className="glass-card-glow p-4 mt-8">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img
            src={roleAiImg}
            alt="Role of AI in Data Analysis infographic"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </FadeUp>
    </div>
  </section>
);

import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { motion } from "framer-motion";

const techniques = [
  {
    emoji: "🤖",
    title: "Machine Learning",
    glowColor: "border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
    hoverGlow: "hover:shadow-[0_0_35px_hsl(var(--primary)/0.5)]",
    bullets: [
      "Algorithms that learn from data without being explicitly programmed",
      "Trained on historical data to make future predictions",
      "Used in spam detection, price prediction, disease diagnosis",
    ],
    example: "Predicting student exam scores from study patterns",
  },
  {
    emoji: "🧠",
    title: "Deep Learning",
    glowColor: "border-accent shadow-[0_0_20px_hsl(var(--accent)/0.3)]",
    hoverGlow: "hover:shadow-[0_0_35px_hsl(var(--accent)/0.5)]",
    bullets: [
      "Subset of ML using multi-layered neural networks",
      "Mimics how the human brain processes information",
      "Excels at image recognition, speech, and complex patterns",
    ],
    example: "Detecting cancer in medical scan images",
  },
  {
    emoji: "💬",
    title: "Natural Language Processing",
    glowColor: "border-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(74,222,128,0.5)]",
    bullets: [
      "Enables computers to understand human language",
      "Powers chatbots, translation, and sentiment analysis",
      "Analyzes research papers and extracts key insights",
    ],
    example: "Summarizing 100-page research documents automatically",
  },
  {
    emoji: "⛏️",
    title: "Data Mining",
    glowColor: "border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.3)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(244,114,182,0.5)]",
    bullets: [
      "Discovers hidden patterns in large databases",
      "Uses clustering, classification, and association rules",
      "Helps find relationships researchers didn't know existed",
    ],
    example: "Finding which student behaviors predict dropout risk",
  },
];

export const Slide6 = () => (
  <section id="slide-6" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 118 — Slide A</p>
        <h2 className="section-heading mb-3">
          AI <span className="glow-text-gold">Techniques</span> Used in Data Analysis
        </h2>
        <p className="text-muted-foreground text-sm mb-12">Four core technologies powering modern research</p>
      </FadeUp>
      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {techniques.map((t, i) => (
          <StaggerItem key={i}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`glass-card p-6 border-2 ${t.glowColor} ${t.hoverGlow} transition-shadow duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{t.emoji}</span>
                <h3 className="text-xl font-heading font-bold text-foreground">{t.title}</h3>
              </div>
              <ul className="space-y-2 mb-4">
                {t.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="bg-secondary/30 rounded-lg px-3 py-2">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">Example:</span> {t.example}
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

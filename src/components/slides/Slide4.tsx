import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { motion } from "framer-motion";
import traditionalVsAiImg from "@/assets/traditional-vs-ai.jpeg";

const tableData = [
  { factor: "Speed", trad: "Slow", ai: "Fast" },
  { factor: "Accuracy", trad: "Human error", ai: "High accuracy" },
  { factor: "Data Type", trad: "Structured only", ai: "Structured + Unstructured" },
  { factor: "Scalability", trad: "Limited", ai: "Highly scalable" },
];

export const Slide4 = () => (
  <section id="slide-4" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 119</p>
        <h2 className="section-heading mb-6">
          Traditional vs <span className="glow-text-cyan">AI-Based</span> Data Analysis
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="glass-card-gold p-4 mb-10 text-center">
          <p className="text-foreground/90">Data analysis converts raw data into insights that support better decision-making.</p>
        </div>
      </FadeUp>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <FadeUp delay={0.3}>
          <div className="glass-card p-6 border-muted-foreground/20">
            <h3 className="text-xl font-heading font-semibold mb-4 text-muted-foreground">Traditional</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Manual processing</li>
              <li>• Excel/basic tools</li>
              <li>• Small datasets</li>
              <li>• Slower</li>
              <li>• Higher error risk</li>
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="glass-card-glow p-6">
            <h3 className="text-xl font-heading font-semibold mb-4 glow-text-cyan">AI-Based</h3>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li>• Automated ML</li>
              <li>• Large/complex data</li>
              <li>• Hidden patterns</li>
              <li>• 40–70% faster</li>
              <li>• 90% fewer errors</li>
            </ul>
          </div>
        </FadeUp>
      </div>
      <FadeUp delay={0.5}>
        <div className="glass-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left text-primary font-heading">Factor</th>
                <th className="p-3 text-left text-muted-foreground font-heading">Traditional</th>
                <th className="p-3 text-left glow-text-cyan font-heading">AI-Based</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="border-b border-border/50 even:bg-secondary/20"
                >
                  <td className="p-3 font-medium text-foreground">{row.factor}</td>
                  <td className="p-3 text-muted-foreground">{row.trad}</td>
                  <td className="p-3 text-primary">{row.ai}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>

      {/* Reference Infographic */}
      <FadeUp delay={0.7}>
        <div className="glass-card-glow p-4 mt-8">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img
            src={traditionalVsAiImg}
            alt="Traditional vs AI Data Analysis comparison infographic"
            className="w-full max-w-3xl mx-auto rounded-lg"
          />
        </div>
      </FadeUp>
    </div>
  </section>
);

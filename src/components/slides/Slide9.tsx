import { FadeUp } from "../AnimatedSection";
import { motion } from "framer-motion";
import pythonVsRImg from "@/assets/python-vs-r.png";

const tableData = [
  { feature: "Purpose", python: "General-purpose & AI", r: "Deep Statistical Analysis" },
  { feature: "Ease of Use", python: "Simple, readable syntax", r: "Steeper, math-oriented" },
  { feature: "Visualization", python: "Functional (Matplotlib)", r: "Superior (ggplot2)" },
  { feature: "Scalability", python: "High (Production-ready)", r: "Moderate (Research-ready)" },
  { feature: "Ecosystem", python: "Best for Machine Learning", r: "Best for Academic Data" },
];

export const Slide9 = () => (
  <section id="slide-9" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 3</p>
        <h2 className="section-heading mb-12">
          <span className="glow-text-cyan">Python</span> vs <span className="glow-text-gold">R Programming</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="glass-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left text-foreground font-heading">Feature</th>
                <th className="p-4 text-left glow-text-cyan font-heading">Python</th>
                <th className="p-4 text-left glow-text-gold font-heading">R Programming</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12 }}
                  className="border-b border-border/50 even:bg-secondary/20"
                >
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-primary">{row.python}</td>
                  <td className="p-4 text-accent">{row.r}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
      <FadeUp delay={0.5}>
        <div className="glass-card-glow p-4 mt-10">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={pythonVsRImg} alt="Python vs R Programming comparison" className="w-full max-w-4xl mx-auto rounded-lg" />
        </div>
      </FadeUp>
    </div>
  </section>
);

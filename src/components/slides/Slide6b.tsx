import { FadeUp } from "../AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = value / (1.5 * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay }} className="glass-card-glow p-5 text-center">
      <div className="text-3xl font-heading font-bold text-primary mb-1">{count}{suffix}</div>
      <p className="text-xs text-muted-foreground">{label}</p>
    </motion.div>
  );
}

const timeline = [
  {
    emoji: "🏥",
    title: "Healthcare",
    points: [
      "ML detects diseases from X-rays (92% accuracy)",
      "NLP reads and summarizes patient medical records",
      "Deep Learning identifies tumors in MRI scans",
    ],
  },
  {
    emoji: "🏦",
    title: "Finance",
    points: [
      "ML models detect fraudulent transactions in real time",
      "Data Mining finds spending pattern anomalies",
      "Predictive models forecast stock market trends",
    ],
  },
  {
    emoji: "🎓",
    title: "Education Research",
    points: [
      "NLP analyzes student feedback at scale",
      "ML predicts student dropout risk early",
      "Data Mining finds which teaching methods work best",
    ],
  },
  {
    emoji: "🌍",
    title: "Environmental Science",
    points: [
      "Deep Learning processes satellite imagery",
      "ML predicts climate change patterns",
      "Data Mining analyzes pollution sensor data",
    ],
  },
];

const stats = [
  { value: 95, suffix: "%", label: "ML accuracy in image classification" },
  { value: 1, suffix: "M+", label: "Documents NLP can process in minutes" },
  { value: 80, suffix: "%", label: "Modern AI powered by Deep Learning" },
  { value: 60, suffix: "%", label: "Research time reduced by Data Mining" },
];

export const Slide6b = () => (
  <section id="slide-6b" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 118 — Slide B</p>
        <h2 className="section-heading mb-12">
          Where These Techniques Are <span className="glow-text-cyan">Applied</span>
        </h2>
      </FadeUp>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Timeline - Left */}
        <div className="lg:col-span-3 relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary origin-top hidden md:block"
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                  className="absolute left-2 top-3 w-5 h-5 rounded-full bg-card border-2 border-primary hidden md:flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </motion.div>
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h4 className="font-heading font-bold text-foreground text-lg">{item.title}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {item.points.map((p, j) => (
                      <li key={j} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats - Right */}
        <div className="lg:col-span-2 space-y-4">
          {stats.map((s, i) => (
            <StatCard key={i} value={s.value} suffix={s.suffix} label={s.label} delay={0.4 + i * 0.15} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

import { FadeUp } from "../AnimatedSection";
import { ExternalLink } from "lucide-react";

const sources = [
  {
    title: "AI-Driven Operations Forecasting in Data-Light Environments",
    source: "McKinsey & Company, 2022",
    url: "https://www.mckinsey.com/capabilities/operations/our-insights/ai-driven-operations-forecasting-in-data-light-environments",
  },
  {
    title: "Improving Retail Forecast Accuracy with Machine Learning",
    source: "AWS Architecture Blog",
    url: "https://aws.amazon.com/blogs/architecture/improving-retail-forecast-accuracy-with-machine-learning/",
  },
];

export const Slide4b = () => (
  <section id="slide-4b" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-5xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 119</p>
        <h2 className="section-heading mb-10">
          References & <span className="glow-text-cyan">Sources</span>
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="glass-card-gold p-6">
          <h4 className="font-heading font-semibold glow-text-gold mb-5 text-lg">📌 Sources</h4>
          <ul className="space-y-5">
            {sources.map((s, i) => (
              <li key={i} className="glass-card p-4">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    {s.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 ml-6">{s.source}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </FadeUp>
    </div>
  </section>
);

import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import { Brain, Database, Search, HeartPulse } from "lucide-react";
import introAiImg from "@/assets/intro-ai.jpeg";

const bullets = [
  { icon: Brain, text: "AI enables machines to perform tasks requiring human intelligence" },
  { icon: Database, text: "Analyzes large datasets quickly and accurately" },
  { icon: Search, text: "Helps discover patterns, trends, and insights from complex data" },
  { icon: HeartPulse, text: "Used in healthcare, finance, education, and scientific research" },
];

export const Slide2 = () => (
  <section id="slide-2" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 117</p>
        <h2 className="section-heading mb-12">
          Introduction to <span className="glow-text-cyan">Artificial Intelligence</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid md:grid-cols-2 gap-6">
        {bullets.map((b, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 flex gap-4 items-start group hover:scale-[1.02] transition-transform">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <b.icon className="w-6 h-6" />
              </div>
              <p className="text-foreground/90 leading-relaxed">{b.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Reference Infographic */}
      <FadeUp delay={0.4}>
        <div className="glass-card-glow p-4 mt-10">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img
            src={introAiImg}
            alt="Introduction to Artificial Intelligence infographic"
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>
      </FadeUp>
    </div>
  </section>
);

import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";
import importanceToolsImg from "@/assets/importance-ai-tools.png";

const advantages = [
  { emoji: "⚡", title: "Faster data analysis" },
  { emoji: "📦", title: "Handling large datasets" },
  { emoji: "🎨", title: "Automated visualization" },
  { emoji: "🎯", title: "Improved accuracy" },
  { emoji: "💡", title: "Better research insights" },
];

export const Slide11 = () => (
  <section id="slide-11" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 121 — Slide 5</p>
        <h2 className="section-heading mb-12">
          Importance of AI Tools in <span className="glow-text-cyan">Research</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {advantages.map((a, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">{a.emoji}</div>
              <p className="font-heading font-medium text-foreground">{a.title}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <FadeUp delay={0.5}>
        <div className="glass-card-gold p-5 text-center">
          <p className="text-foreground/90">
            📌 AI is transforming modern research by making data analysis <span className="glow-text-cyan font-semibold">faster</span>,{" "}
            <span className="glow-text-gold font-semibold">smarter</span>, and more efficient.
          </p>
        </div>
      </FadeUp>
      <FadeUp delay={0.6}>
        <div className="glass-card-glow p-4 mt-8 relative">
          <p className="text-xs text-muted-foreground font-heading mb-3 uppercase tracking-wider">Reference Infographic</p>
          <img src={importanceToolsImg} alt="Importance of AI Tools in Research" className="w-full max-w-4xl mx-auto rounded-lg" />
          
          <div className="mt-6 p-4 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm">
            <p className="text-sm text-foreground mb-2 font-medium">✨ Check out our full analysis project:</p>
            <a 
              href="https://github.com/vinayakkongari19/Analyzing_Walmart_Branch_Performance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-mono break-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.38 6.5-1.5 6.5-7.1a5.1 5.1 0 0 0-1.5-3.8c.16-.4.65-2.02-.15-4.8 0 0-1.25-.4-4 1.5a13.3 13.3 0 0 0-7 0c-2.75-1.9-4-1.5-4-1.5-.8 2.78-.3 4.4-.15 4.8A5.1 5.1 0 0 0 2 10.07c0 5.6 3.3 6.72 6.5 7.1-.15.2-.4.7-.5 1.5-.4.2-1.6.5-2.5-.3-.9-.8-1.5-2.5-1.5-2.5-1.5.8.5.9.5.9 1 0 1.5 1 1.5 1 1.1 1.8 3.2 1.5 3.2 1.5V22"/></svg>
              github.com/vinayakkongari19/Analyzing_Walmart_Branch_Performance
            </a>
          </div>
        </div>
      </FadeUp>
    </div>
  </section>
);

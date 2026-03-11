import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const limitations = [
  { title: "Data Dependency", desc: "Requires large amounts of accurate data" },
  { title: "Algorithm Bias", desc: "Biased data produces biased results" },
  { title: "High Cost", desc: "Advanced AI tools and computing are expensive" },
  { title: "Privacy Issues", desc: "Research data raises ethical and security concerns" },
  { title: "Human Supervision Needed", desc: "Researchers must interpret and verify AI results" },
];

export const Slide16 = () => (
  <section id="slide-16" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 122</p>
        <h2 className="section-heading mb-12">
          Limitations of AI in <span className="text-warning">Research</span>
        </h2>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {limitations.map((l, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-warning p-5 hover:scale-105 transition-transform">
              <div className="text-xl mb-2">⚠️</div>
              <h4 className="font-heading font-semibold text-warning mb-1">{l.title}</h4>
              <p className="text-xs text-muted-foreground">{l.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

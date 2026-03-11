import { FadeUp, StaggerContainer, StaggerItem } from "../AnimatedSection";

const charts = [
  { emoji: "📊", name: "Bar Chart", example: "Comparing sales across regions", bars: true },
  { emoji: "🥧", name: "Pie Chart", example: "Market share breakdown", pie: true },
  { emoji: "🔵", name: "Scatter Plot", example: "Study hours vs grades", scatter: true },
  { emoji: "📈", name: "Line Graph", example: "Stock market trends over time", line: true },
  { emoji: "🔥", name: "Heatmap", example: "Website click activity", heatmap: true },
];

const MiniBar = () => (
  <div className="flex items-end gap-1 h-10 mt-2">
    {[45, 70, 55, 85, 60].map((h, i) => (
      <div key={i} className="flex-1 bg-primary/50 rounded-t transition-all" style={{ height: `${h}%` }} />
    ))}
  </div>
);

const MiniPie = () => (
  <div className="w-10 h-10 rounded-full border-4 border-accent/40 border-t-accent border-r-primary mt-2 mx-auto" />
);

const MiniScatter = () => (
  <svg viewBox="0 0 50 30" className="w-12 h-8 mt-2 mx-auto">
    {[[5,25],[12,15],[20,20],[28,8],[35,18],[42,5]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="2" fill="hsl(192,100%,50%)" opacity="0.7" />
    ))}
  </svg>
);

const MiniLine = () => (
  <svg viewBox="0 0 50 25" className="w-12 h-8 mt-2 mx-auto">
    <polyline points="0,20 10,15 20,18 30,8 40,12 50,5" fill="none" stroke="hsl(46,92%,53%)" strokeWidth="1.5" />
  </svg>
);

const MiniHeatmap = () => (
  <div className="grid grid-cols-4 gap-0.5 w-12 mt-2 mx-auto">
    {[0.3,0.7,0.5,0.9,0.6,0.2,0.8,0.4,0.9,0.5,0.3,0.7].map((o,i) => (
      <div key={i} className="w-2.5 h-2.5 rounded-sm bg-primary" style={{ opacity: o }} />
    ))}
  </div>
);

export const Slide14 = () => (
  <section id="slide-14" className="min-h-screen flex items-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">
      <FadeUp>
        <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 120 — Slide 3</p>
        <h2 className="section-heading mb-12">
          Types of <span className="glow-text-gold">Charts</span> & Real-World Examples
        </h2>
      </FadeUp>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {charts.map((c, i) => (
          <StaggerItem key={i}>
            <div className="glass-card-glow p-6 text-center hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">{c.emoji}</div>
              <h3 className="font-heading font-semibold text-primary mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.example}</p>
              {c.bars && <MiniBar />}
              {c.pie && <MiniPie />}
              {c.scatter && <MiniScatter />}
              {c.line && <MiniLine />}
              {c.heatmap && <MiniHeatmap />}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

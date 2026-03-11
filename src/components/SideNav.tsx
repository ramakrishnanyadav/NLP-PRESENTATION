import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "slide-1", label: "Title", num: 1 },
  { id: "slide-2", label: "Intro to AI", num: 2 },
  { id: "slide-3", label: "AI in Research", num: 3 },
  { id: "slide-4", label: "Traditional vs AI", num: 4 },
  { id: "slide-4b", label: "References (119)", num: "R" },
  { id: "slide-5", label: "Role of AI", num: 5 },
  { id: "slide-6", label: "AI Techniques", num: 6 },
  { id: "slide-6b", label: "Applications", num: "B" },
  { id: "slide-6c", label: "Live Demo", num: "⚡" },
  { id: "slide-7", label: "AI Tools Intro", num: 7 },
  { id: "slide-8", label: "Common Tools", num: 8 },
  { id: "slide-9", label: "Python vs R", num: 9 },
  { id: "slide-10", label: "Power BI", num: 10 },
  { id: "slide-11", label: "Tool Importance", num: 11 },
  { id: "slide-12", label: "Data Viz", num: 12 },
  { id: "slide-13", label: "AI in Viz", num: 13 },
  { id: "slide-14", label: "Chart Types", num: 14 },
  { id: "slide-15", label: "Advantages", num: 15 },
  { id: "slide-16", label: "Limitations", num: 16 },
  { id: "slide-17", label: "Conclusion", num: 17 },
];

export const SideNav = () => {
  const [active, setActive] = useState("slide-1");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Nav: Floating Dock */}
      <motion.nav 
        initial={{ y: 50, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 left-1/2 z-50 md:hidden flex items-center gap-2 px-3 py-2 bg-background/60 backdrop-blur-xl border border-border/50 rounded-full max-w-[90vw] overflow-x-auto shadow-2xl scrollbar-none"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-xs font-semibold transition-all ${
              active === s.id
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] scale-110"
                : "bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {s.num}
          </button>
        ))}
      </motion.nav>

      {/* Desktop Nav: Compact Hover-Expand Left Nav */}
      <motion.nav
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1.5 p-2 bg-background/40 hover:bg-background/80 backdrop-blur-md border border-border/30 rounded-2xl max-h-[85vh] overflow-y-auto shadow-2xl transition-all duration-300 group w-14 hover:w-56 scrollbar-none"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex items-center gap-3 px-2 py-2 rounded-xl text-sm transition-all whitespace-nowrap ${
              active === s.id
                ? "bg-primary/15 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:pl-3"
            }`}
            title={s.label}
          >
            <span 
              className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-[10px] font-bold border transition-all duration-300 ${
                active === s.id 
                ? 'border-primary/50 bg-primary/20 text-primary shadow-[0_0_12px_rgba(var(--primary),0.4)]' 
                : 'border-transparent bg-secondary/80'
              }`}
            >
              {s.num}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none delay-75 tracking-wide">
              {s.label}
            </span>
          </button>
        ))}
      </motion.nav>
    </>
  );
};

import { motion } from "framer-motion";
import { ParticleBackground } from "../ParticleBackground";

export const Slide1 = () => {
  const title = "Using AI for Data Analysis and Visualization in Research";
  const words = title.split(" ");

  return (
    <section id="slide-1" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="animated-grid-bg animate-grid-move absolute inset-0 opacity-30" />
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="section-heading mb-6 leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`inline-block mr-3 ${
                  ["AI", "Data", "Analysis", "Visualization"].includes(word)
                    ? "glow-text-cyan"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            An Academic Presentation
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="glass-card-glow inline-block px-8 py-6 text-left space-y-2"
          >
            <p className="text-sm text-foreground/80">
              <span className="text-muted-foreground">Presented By:</span>{" "}
              <span className="glow-text-gold font-heading font-semibold">Roll No. 117–122</span>
            </p>
            <p className="text-sm text-foreground/80">
              <span className="text-muted-foreground">Course:</span>{" "}
              <span className="font-medium text-foreground">MCA (Master of Computer Applications)</span>
            </p>
            <p className="text-sm text-foreground/80">
              <span className="text-muted-foreground">Subject:</span>{" "}
              <span className="font-medium text-foreground">Research Methodology</span>
            </p>
            <p className="text-sm text-foreground/80">
              <span className="text-muted-foreground">Instructor:</span>{" "}
              <span className="font-medium text-foreground">Sanju Gupta</span>
            </p>
            <p className="text-sm text-foreground/80">
              <span className="text-muted-foreground">Date:</span>{" "}
              <span className="font-medium text-foreground">12th March 2026</span>
            </p>
            <div className="mt-4 pt-4 border-t border-border/50 text-sm text-foreground/80">
              <p className="text-muted-foreground mb-2">Team Members:</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 font-medium text-foreground">
                <li>• Vishal bhati</li>
                <li>• Ramakrishnan yadav</li>
                <li>• Aquib khan</li>
                <li>• Kishore selvaraj</li>
                <li>• Vinayak kongari</li>
                <li>• Ayush bhamkar</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground animate-bounce">
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

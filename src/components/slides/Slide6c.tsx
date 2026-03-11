import { useState, useRef, useEffect, useCallback } from "react";
import { FadeUp } from "../AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

// ─── SPAM CLASSIFIER ───
const spamWords = ["free", "win", "winner", "cash", "prize", "click", "congratulations", "offer", "deal", "urgent", "act now", "limited", "buy", "discount", "money", "reward", "claim", "bonus", "subscribe", "lottery"];
const safeWords = ["research", "team", "meeting", "project", "report", "data", "analysis", "study", "results", "methodology", "review", "scheduled", "discuss", "professor", "university", "paper", "thesis", "experiment", "hypothesis", "conclusion"];

function classifySpam(text: string) {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);
  let spamScore = 0, safeScore = 0;
  const spamFound: string[] = [], safeFound: string[] = [];
  words.forEach(w => {
    const clean = w.replace(/[^a-z]/g, "");
    if (spamWords.includes(clean)) { spamScore++; spamFound.push(clean); }
    if (safeWords.includes(clean)) { safeScore++; safeFound.push(clean); }
  });
  const total = Math.max(spamScore + safeScore, 1);
  const isSpam = spamScore > safeScore;
  const confidence = Math.min(Math.round(((Math.max(spamScore, safeScore) / total) * 70) + 30), 99);
  return { isSpam, confidence, spamFound: [...new Set(spamFound)], safeFound: [...new Set(safeFound)] };
}

function SpamClassifier() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ReturnType<typeof classifySpam> | null>(null);
  const [loading, setLoading] = useState(false);

  const classify = () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => { setResult(classifySpam(text)); setLoading(false); }, 1000);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-heading font-bold text-lg text-foreground">Machine Learning: Naive Bayes Spam Classifier</h3>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type or paste any text here..."
        className="w-full h-28 bg-secondary/30 border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary"
      />
      <div className="flex flex-wrap gap-2">
        <button onClick={classify} disabled={loading || !text.trim()} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-border-cyan hover:opacity-90 transition disabled:opacity-50">
          {loading ? "Classifying..." : "Classify Text"}
        </button>
        <button onClick={() => setText("Congratulations! You won a FREE prize. Click NOW to claim your CASH reward!")} className="px-3 py-2 rounded-lg bg-secondary/50 text-foreground/70 text-xs hover:bg-secondary transition">Try Spam Example</button>
        <button onClick={() => setText("The research team meeting is scheduled for Thursday to review the project report.")} className="px-3 py-2 rounded-lg bg-secondary/50 text-foreground/70 text-xs hover:bg-secondary transition">Try Normal Example</button>
      </div>
      {loading && (
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-primary rounded-full" />
        </div>
      )}
      <AnimatePresence>
        {result && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className={`text-2xl font-heading font-bold ${result.isSpam ? "text-red-400" : "text-green-400"}`}>
                {result.isSpam ? "🚨 SPAM" : "✅ NOT SPAM"}
              </span>
            </div>
            <div className="w-full bg-secondary/50 rounded-full h-3">
              <motion.div initial={{ width: 0 }} animate={{ width: `${result.confidence}%` }} transition={{ duration: 0.8 }}
                className={`h-full rounded-full ${result.isSpam ? "bg-red-400" : "bg-green-400"}`} />
            </div>
            <p className="text-xs text-muted-foreground">Confidence: {result.confidence}%</p>
            <div className="flex flex-wrap gap-1.5">
              {result.spamFound.map((w, i) => <span key={i} className="px-2 py-0.5 rounded-full bg-red-400/20 text-red-300 text-xs">{w}</span>)}
              {result.safeFound.map((w, i) => <span key={i} className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-300 text-xs">{w}</span>)}
            </div>
            <p className="text-[10px] text-muted-foreground">Trained on: spam keywords vs research/academic keywords</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── NEURAL NETWORK ───
function NeuralNetwork() {
  const [active, setActive] = useState(false);
  const [activeLayer, setActiveLayer] = useState(-1);
  const [rate, setRate] = useState(0.01);
  const [done, setDone] = useState(false);

  const activate = () => {
    setActive(true); setDone(false); setActiveLayer(0);
    setTimeout(() => setActiveLayer(1), 400);
    setTimeout(() => setActiveLayer(2), 800);
    setTimeout(() => setActiveLayer(3), 1200);
    setTimeout(() => { setDone(true); setActive(false); }, 1600);
  };

  const layers = [
    { count: 3, labels: ["Word Count", "Spam Score", "Length"] },
    { count: 4, labels: [] },
    { count: 4, labels: [] },
    { count: 2, labels: ["Spam", "Not Spam"] },
  ];
  const layerX = [80, 200, 320, 440];
  const getY = (count: number, idx: number) => 40 + (idx * (200 / (count + 1))) + (200 / (count + 1));

  return (
    <div className="space-y-4">
      <h3 className="font-heading font-bold text-lg text-foreground">Deep Learning: Neural Network in Action</h3>
      <div className="glass-card p-4 overflow-x-auto">
        <svg viewBox="0 0 520 280" className="w-full max-w-lg mx-auto">
          {/* Connections */}
          {layers.slice(0, -1).map((layer, li) =>
            Array.from({ length: layer.count }).map((_, ni) =>
              Array.from({ length: layers[li + 1].count }).map((_, nj) => (
                <line key={`${li}-${ni}-${nj}`} x1={layerX[li]} y1={getY(layer.count, ni)} x2={layerX[li + 1]} y2={getY(layers[li + 1].count, nj)}
                  stroke={activeLayer >= li + 1 ? "hsl(192,100%,50%)" : "hsl(220,20%,25%)"}
                  strokeWidth={Math.max(0.5, rate * 20)} opacity={activeLayer >= li + 1 ? 0.7 : 0.3}
                  style={{ transition: "all 0.4s" }} />
              ))
            )
          )}
          {/* Nodes */}
          {layers.map((layer, li) =>
            Array.from({ length: layer.count }).map((_, ni) => {
              const cx = layerX[li], cy = getY(layer.count, ni);
              const isActive = activeLayer >= li;
              return (
                <g key={`n-${li}-${ni}`}>
                  <circle cx={cx} cy={cy} r={14}
                    fill={isActive ? (li === 3 ? "hsl(45,94%,52%)" : "hsl(192,100%,50%)") : "hsl(220,30%,15%)"}
                    stroke={isActive ? "hsl(192,100%,70%)" : "hsl(220,20%,30%)"} strokeWidth={2}
                    opacity={isActive ? 1 : 0.5} style={{ transition: "all 0.4s" }}>
                    {isActive && <animate attributeName="r" values="14;16;14" dur="0.8s" repeatCount="1" />}
                  </circle>
                  {layer.labels[ni] && (
                    <text x={cx} y={cy + (li === 0 ? -20 : 24)} textAnchor="middle" className="text-[8px] fill-muted-foreground">{layer.labels[ni]}</text>
                  )}
                </g>
              );
            })
          )}
        </svg>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <button onClick={activate} disabled={active} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-border-cyan hover:opacity-90 transition disabled:opacity-50">
          {active ? "Processing..." : "Activate Network"}
        </button>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Learning Rate:</span>
          <input type="range" min={0.001} max={0.1} step={0.001} value={rate} onChange={e => setRate(+e.target.value)} className="w-24 accent-primary" />
          <span className="text-primary font-mono">{rate.toFixed(3)}</span>
        </div>
      </div>
      {done && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-4 text-sm text-foreground/80">
          <p className="glow-text-cyan font-semibold mb-1">Forward propagation complete — 847ms</p>
          <p className="text-xs text-muted-foreground">Data flowed through 4 layers: input nodes received features, hidden layers extracted patterns, and output layer produced the classification probability.</p>
        </motion.div>
      )}
    </div>
  );
}

// ─── NLP SENTIMENT ───
const posWords = ["excellent", "great", "accurate", "fast", "efficient", "improved", "successful", "better", "innovative", "powerful", "revolutionary", "revolutionized", "amazing", "good", "best"];
const negWords = ["failed", "poor", "slow", "error", "wrong", "inaccurate", "unreliable", "worse", "problematic", "costly", "biased", "bad", "terrible", "worst"];

function analyzeSentiment(text: string) {
  const words = text.toLowerCase().split(/\s+/);
  let pos = 0, neg = 0;
  const wordResults: { word: string; type: "pos" | "neg" | "neutral" }[] = [];
  const phrases: string[] = [];
  text.split(/\s+/).forEach(w => {
    const clean = w.replace(/[^a-z]/g, "").toLowerCase();
    if (posWords.includes(clean)) { pos++; wordResults.push({ word: w, type: "pos" }); phrases.push(clean); }
    else if (negWords.includes(clean)) { neg++; wordResults.push({ word: w, type: "neg" }); phrases.push(clean); }
    else wordResults.push({ word: w, type: "neutral" });
  });
  const total = Math.max(pos + neg, 1);
  const score = (pos - neg) / total;
  const sentiment = score > 0.1 ? "POSITIVE" : score < -0.1 ? "NEGATIVE" : "NEUTRAL";
  const confidence = Math.min(Math.round(Math.abs(score) * 60 + 40), 99);
  const meterAngle = ((score + 1) / 2) * 180;
  return { sentiment, confidence, wordResults, meterAngle, phrases: [...new Set(phrases)] };
}

function NLPAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ReturnType<typeof analyzeSentiment> | null>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    if (!text.trim()) return;
    setLoading(true); setResult(null);
    setTimeout(() => { setResult(analyzeSentiment(text)); setLoading(false); }, 800);
  };

  const emoji = result?.sentiment === "POSITIVE" ? "😊" : result?.sentiment === "NEGATIVE" ? "😞" : "😐";
  const color = result?.sentiment === "POSITIVE" ? "text-green-400" : result?.sentiment === "NEGATIVE" ? "text-red-400" : "text-yellow-400";

  return (
    <div className="space-y-4">
      <h3 className="font-heading font-bold text-lg text-foreground">Natural Language Processing: Sentiment Analysis</h3>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Enter any research opinion or review..."
        className="w-full h-28 bg-secondary/30 border border-border rounded-lg p-3 text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary" />
      <div className="flex flex-wrap gap-2">
        <button onClick={analyze} disabled={loading || !text.trim()} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-border-cyan hover:opacity-90 transition disabled:opacity-50">
          {loading ? "Analyzing..." : "Analyze Sentiment"}
        </button>
        <button onClick={() => setText("AI has revolutionized research by making data analysis faster and more accurate than ever before.")} className="px-3 py-2 rounded-lg bg-secondary/50 text-foreground/70 text-xs hover:bg-secondary transition">Try Positive</button>
        <button onClick={() => setText("The algorithm failed to process the dataset and produced completely unreliable results.")} className="px-3 py-2 rounded-lg bg-secondary/50 text-foreground/70 text-xs hover:bg-secondary transition">Try Negative</button>
      </div>
      {loading && (
        <div className="h-2 rounded-full bg-secondary overflow-hidden">
          <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} className="h-full bg-primary rounded-full" />
        </div>
      )}
      <AnimatePresence>
        {result && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5 space-y-4">
            {/* Gauge */}
            <div className="flex justify-center">
              <svg viewBox="0 0 200 110" className="w-48">
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="hsl(220,20%,20%)" strokeWidth="12" strokeLinecap="round" />
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gauge)" strokeWidth="12" strokeLinecap="round" strokeDasharray="251" strokeDashoffset={251 - (result.meterAngle / 180) * 251} style={{ transition: "stroke-dashoffset 1s" }} />
                <defs><linearGradient id="gauge" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#f87171" /><stop offset="50%" stopColor="#facc15" /><stop offset="100%" stopColor="#4ade80" /></linearGradient></defs>
                <text x="30" y="108" className="text-[8px] fill-muted-foreground">Negative</text>
                <text x="85" y="80" className="text-[8px] fill-muted-foreground">Neutral</text>
                <text x="145" y="108" className="text-[8px] fill-muted-foreground">Positive</text>
              </svg>
            </div>
            <div className="text-center">
              <span className={`text-2xl font-heading font-bold ${color}`}>{emoji} {result.sentiment}</span>
              <p className="text-xs text-muted-foreground mt-1">Confidence: {result.confidence}%</p>
            </div>
            <div className="flex flex-wrap gap-1">
              {result.wordResults.map((w, i) => (
                <span key={i} className={`text-sm ${w.type === "pos" ? "text-green-400" : w.type === "neg" ? "text-red-400" : "text-foreground/50"}`}>{w.word}</span>
              ))}
            </div>
            {result.phrases.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {result.phrases.map((p, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">{p}</span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── DATA MINING K-MEANS ───
const initialPoints = [
  { x: 320, y: 50 }, { x: 340, y: 70 }, { x: 290, y: 40 }, { x: 350, y: 80 }, { x: 310, y: 60 }, { x: 360, y: 45 },
  { x: 180, y: 140 }, { x: 200, y: 160 }, { x: 160, y: 150 }, { x: 220, y: 130 }, { x: 190, y: 170 }, { x: 170, y: 120 }, { x: 210, y: 155 }, { x: 230, y: 145 },
  { x: 60, y: 230 }, { x: 80, y: 250 }, { x: 50, y: 260 }, { x: 90, y: 220 }, { x: 70, y: 240 }, { x: 100, y: 235 },
];

const clusterColors = ["hsl(192,100%,50%)", "hsl(45,94%,52%)", "hsl(330,80%,60%)"];
const centers = [{ x: 325, y: 57 }, { x: 195, y: 146 }, { x: 75, y: 239 }];

function DataMining() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [clustered, setClustered] = useState(false);
  const [animating, setAnimating] = useState(false);

  const draw = useCallback((showClusters: boolean) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, 400, 300);
    // Axes
    ctx.strokeStyle = "hsl(220,20%,25%)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(30, 270); ctx.lineTo(390, 270); ctx.moveTo(30, 270); ctx.lineTo(30, 10); ctx.stroke();
    ctx.fillStyle = "hsl(220,15%,50%)"; ctx.font = "10px Inter";
    ctx.fillText("Study Hours →", 170, 295);
    ctx.save(); ctx.rotate(-Math.PI / 2); ctx.fillText("Exam Score →", -170, 18); ctx.restore();
    // Points
    initialPoints.forEach((p, i) => {
      let color = "hsl(220,15%,45%)";
      if (showClusters) {
        const dists = centers.map(c => Math.hypot(p.x - c.x, p.y - c.y));
        const nearest = dists.indexOf(Math.min(...dists));
        color = clusterColors[nearest];
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.2)"; ctx.lineWidth = 1; ctx.stroke();
    });
    // Cluster centers & lines
    if (showClusters) {
      initialPoints.forEach(p => {
        const dists = centers.map(c => Math.hypot(p.x - c.x, p.y - c.y));
        const nearest = dists.indexOf(Math.min(...dists));
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(centers[nearest].x, centers[nearest].y);
        ctx.strokeStyle = clusterColors[nearest]; ctx.globalAlpha = 0.2; ctx.lineWidth = 1; ctx.stroke();
        ctx.globalAlpha = 1;
      });
      centers.forEach((c, i) => {
        ctx.beginPath(); ctx.moveTo(c.x - 8, c.y); ctx.lineTo(c.x + 8, c.y); ctx.moveTo(c.x, c.y - 8); ctx.lineTo(c.x, c.y + 8);
        ctx.strokeStyle = clusterColors[i]; ctx.lineWidth = 3; ctx.stroke();
      });
    }
  }, []);

  useEffect(() => { draw(false); }, [draw]);

  const runClustering = () => {
    setAnimating(true);
    setTimeout(() => { draw(true); setClustered(true); setAnimating(false); }, 1200);
  };
  const reset = () => { draw(false); setClustered(false); };

  return (
    <div className="space-y-4">
      <h3 className="font-heading font-bold text-lg text-foreground">Data Mining: K-Means Clustering</h3>
      <div className="glass-card p-4 flex justify-center">
        <canvas ref={canvasRef} width={400} height={300} className="rounded-lg" />
      </div>
      <p className="text-xs text-muted-foreground text-center">Axes: X = Study Hours, Y = Exam Score</p>
      <div className="flex gap-2">
        <button onClick={runClustering} disabled={animating || clustered} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm glow-border-cyan hover:opacity-90 transition disabled:opacity-50">
          {animating ? "Running K-Means..." : "Run K-Means Clustering"}
        </button>
        {clustered && <button onClick={reset} className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground/70 text-sm hover:bg-secondary transition">Reset</button>}
      </div>
      <AnimatePresence>
        {clustered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
            <div className="glass-card p-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: clusterColors[0] }} /><span className="text-sm text-foreground/80">Cluster 1 (Cyan): High Study, High Score — Top Performers (6 students)</span></div>
            <div className="glass-card p-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: clusterColors[1] }} /><span className="text-sm text-foreground/80">Cluster 2 (Gold): Medium Study, Medium Score — Average Performers (8 students)</span></div>
            <div className="glass-card p-3 flex items-center gap-2"><span className="w-3 h-3 rounded-full" style={{ background: clusterColors[2] }} /><span className="text-sm text-foreground/80">Cluster 3 (Pink): Low Study, Low Score — At Risk Students (6 students)</span></div>
            <p className="text-xs text-muted-foreground italic text-center">Data Mining identified 3 natural student groups — no labels were given to the algorithm.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN DEMO COMPONENT ───
const tabs = [
  { id: "ml", icon: "🤖", label: "ML Classifier", component: SpamClassifier },
  { id: "nn", icon: "🧠", label: "Neural Network", component: NeuralNetwork },
  { id: "nlp", icon: "💬", label: "NLP Analyzer", component: NLPAnalyzer },
  { id: "dm", icon: "⛏️", label: "Data Mining", component: DataMining },
];

export const Slide6c = () => {
  const [activeTab, setActiveTab] = useState("ml");
  const ActiveComponent = tabs.find(t => t.id === activeTab)!.component;

  return (
    <section id="slide-6c" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <FadeUp>
          <p className="text-sm font-medium text-primary mb-2 font-heading">Roll No. 118 — Live Demo</p>
          <h2 className="section-heading mb-3">
            Live AI Techniques — <span className="glow-text-cyan">Try It Yourself</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-8">Four real demos running in your browser</p>
        </FadeUp>

        <FadeUp delay={0.2}>
          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === t.id
                    ? "bg-primary/20 text-primary glow-border-cyan border border-primary/40"
                    : "bg-secondary/30 text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent"
                }`}>
                <span>{t.icon}</span>
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>

          {/* Citation */}
          <div className="glass-card p-4 mt-10 text-center">
            <p className="text-xs text-muted-foreground">
              Demo built using rule-based classifiers and k-means logic running entirely in the browser.<br />
              Techniques based on: <span className="text-primary">Scikit-learn documentation</span> | <span className="text-primary">Stanford NLP</span> | <span className="text-primary">MIT Deep Learning</span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

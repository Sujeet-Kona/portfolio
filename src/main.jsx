import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Database, GraduationCap, Terminal, Search, Cpu, Workflow, GitPullRequest, Send, FileCode2, Server, GitBranch, Radio, BrainCircuit, BarChart3, LineChart, Table, Sigma, Brain, Network, SlidersHorizontal, Gauge, GitMerge, ListFilter, FileSearch, Package, Bot, FlaskConical, ShieldCheck, Zap } from "lucide-react";
import { site } from "./config/site.js";
import { projects } from "./data/projects.js";
import "./styles.css";

const skills = [
  { label: "Languages", items: ["Python", "C", "SQL"] },
  { label: "Backend & Data", items: ["FastAPI", "REST APIs", "PostgreSQL", "SQLAlchemy", "Alembic", "Qdrant"] },
  { label: "Machine Learning", items: ["PyTorch", "Scikit-learn", "XGBoost", "SHAP", "Pandas", "NumPy"] },
  { label: "LLM Engineering", items: ["Hugging Face Transformers", "PEFT / LoRA", "TRL", "Fine-tuning", "LLM Evaluation"] },
  { label: "Retrieval & Search", items: ["BM25", "Dense & Hybrid Retrieval", "Reciprocal Rank Fusion", "Cross-Encoder Reranking", "RAG"] },
  { label: "Tools & Quality", items: ["Docker", "Ollama", "Git", "GitHub", "pytest", "Ruff"] }
];
const technologyIcons = {
  "Python": FileCode2, "C": Code2, "SQL": Database, "FastAPI": Server, "REST APIs": Workflow,
  "PostgreSQL": Database, "SQLAlchemy": Database, "Alembic": GitBranch, "Qdrant": Database,
  "Redis": Zap, "WebSockets": Radio, "PyTorch": BrainCircuit, "Scikit-learn": BarChart3,
  "XGBoost": GitBranch, "SHAP": LineChart, "Pandas": Table, "NumPy": Sigma,
  "Hugging Face Transformers": Brain, "Transformers": Network, "PEFT / LoRA": SlidersHorizontal,
  "TRL": Workflow, "Fine-tuning": SlidersHorizontal, "LLM Evaluation": Gauge, "BM25": Search,
  "Dense & Hybrid Retrieval": Network, "Reciprocal Rank Fusion": GitMerge,
  "Cross-Encoder Reranking": ListFilter, "RAG": FileSearch, "Docker": Package,
  "Ollama": Bot, "Git": GitBranch, "GitHub": Github, "pytest": FlaskConical,
  "Ruff": ShieldCheck, "BGE-M3": Brain, "Cross-Encoder": ListFilter, "SQLite": Database, "JWT": ShieldCheck,
  "Uvicorn": Server, "OpenAI API": Bot, "JSON": FileCode2, "Streamlit": Workflow, "LangChain": Workflow,
  "Google Gemini API": BrainCircuit, "FinQA": BarChart3, "Dataset Validation": ShieldCheck,
  "Program Parsing": FileCode2, "Deterministic Execution": Gauge, "Matplotlib": BarChart3,
  "Plotly": LineChart, "Jupyter Notebook": FileCode2, "Seaborn": BarChart3
};
function TechIcon({ name }) {
  const Icon = technologyIcons[name] || Code2;
  return <Icon size={14} strokeWidth={1.7} aria-hidden="true" />;
}
const categories = ["All", "AI Systems", "Machine Learning", "LLM Engineering"];

function ProjectVisual({ type }) {
  if (type === "retrieval") return <div className="visual visual-retrieval" aria-label="Abstract illustration of a hybrid retrieval pipeline"><div className="visual-node">QUERY</div><div className="visual-branches"><span>BM25</span><span>DENSE</span></div><div className="visual-fusion">RRF</div><div className="visual-rank">RERANK → TOP 5</div><div className="visual-cite">CITATIONS / GROUNDED OUTPUT</div></div>;
  if (type === "risk") return <div className="visual visual-risk" aria-label="Abstract illustration of risk scoring"><div className="risk-score"><small>RISK SCORE</small><strong>0.043</strong><span>CALIBRATED PROBABILITY</span></div><div className="risk-bars"><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="risk-decision">ALLOW <span>·</span> REVIEW <span>·</span> BLOCK</div></div>;
  return <div className="visual visual-finetune" aria-label="Abstract illustration of fine-tuning and evaluation"><div className="fine-base">BASE MODEL</div><div className="fine-arrow">＋</div><div className="fine-adapter">LoRA ADAPTER</div><div className="fine-output">HELD-OUT EVALUATION <b>→</b> EXPORT</div><div className="fine-chips"><span>SEED 42</span><span>SEED 17</span><span>SEED 73</span></div></div>;
}

function App() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [motionOn, setMotionOn] = useState(true);
  const reduce = useReducedMotion();
  const visible = useMemo(() => projects.filter(p => (active === "All" || p.category === active) && (p.name + " " + p.tagline + " " + p.stack.join(" ")).toLowerCase().includes(search.toLowerCase())), [active, search]);
  const reveal = (!motionOn || reduce) ? {} : { initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: .65, ease: [.22, 1, .36, 1] } };
  const closeMenu = () => setMobileOpen(false);
  useEffect(() => {
    const onKeyDown = event => { if (event.key === "Escape") { setSelected(null); setMobileOpen(false); } };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => { document.title = site.seo.title; }, []);
  useEffect(() => {
    const saved = window.localStorage.getItem("sujeet-kona-motion");
    if (saved === "off" || saved === "on") setMotionOn(saved === "on");
  }, []);
  useEffect(() => {
    window.localStorage.setItem("sujeet-kona-motion", motionOn ? "on" : "off");
  }, [motionOn]);

  return <div className="site-shell" id="top">
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="wordmark" href="#top" onClick={closeMenu}><span className="mark">SK</span><span>SUJEET KONA<span className="wordmark-dot">.</span></span></a>
      <nav className={mobileOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
        {["Work", "About", "Toolkit", "Contact"].map(n => <a key={n} href={"#" + n.toLowerCase()} onClick={closeMenu}>{n}</a>)}
      </nav>
      <div className="top-actions">
        <button className="motion-toggle" onClick={() => setMotionOn(v => !v)} aria-pressed={motionOn}><span className={motionOn ? "status-dot" : "status-dot off"} />{motionOn ? "Motion on" : "Motion off"}</button>
        <a className="top-cta" href="#contact">Let's connect <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
    </header>

    <main>
      <section className="hero section-wrap">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO / 2026 <span className="eyebrow-year">ENGINEERING · INDIA</span></div>
        <motion.div className="hero-copy" {...reveal}>
          <p className="hero-kicker">AI ENGINEERING <span>·</span> BACKEND SYSTEMS <span>·</span> APPLIED ML</p>
          <h1>SUJEET<br /><em>KONA</em><span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <div><p className="hero-role">THIRD-YEAR ECE STUDENT <span> / </span> {site.availability.toUpperCase()}</p><p className="hero-intro">{site.intro}</p></div>
            <div className="hero-links"><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16} /></a><a className="text-link" href={"mailto:" + site.email}>Get in touch <ArrowUpRight size={15} /></a></div>
          </div>
        </motion.div>
        <div className="hero-meta"><span>BASED IN {site.location.toUpperCase()}</span><span>ECE · EXPECTED 2028</span><span className="availability"><i /> OPEN TO INTERNSHIP OPPORTUNITIES</span></div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="mono-label">01 / APPROACH</span><p>Fundamentals first. <em>Evidence over assumptions.</em><br className="desktop-break" /> Build, measure, debug, and improve.</p><span className="strip-symbol">↘</span></div></section>

      <section className="work-section section-wrap" id="work">
        <motion.div className="section-heading" {...reveal}><div><span className="mono-label">02 / SELECTED WORK</span><h2>SELECTED<br /><em>ENGINEERING.</em></h2></div><p className="section-aside">A collection of ten projects spanning retrieval systems, fraud risk, LLM engineering, backend APIs, and applied data science.</p></motion.div>
        <div className="project-controls">
          <div className="filters" role="group" aria-label="Filter projects">{categories.map(c => <button key={c} className={active === c ? "filter active" : "filter"} onClick={() => setActive(c)} aria-pressed={active === c}>{c}<span>{c === "All" ? String(projects.length).padStart(2, "0") : String(projects.filter(p => p.category === c).length).padStart(2, "0")}</span></button>)}</div>
          <label className="project-search"><Search size={14} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects or tools" aria-label="Search projects or tools" /></label>
        </div>
        <div className="project-list">
          {visible.map(p => <motion.article className={"project-card " + p.accent} key={p.id} {...reveal}>
            <div className="project-index"><span>{p.number}</span><span className="index-line" /></div>
            <div className="project-main"><div className="project-overline">{p.type}</div><h3>{p.name}</h3><p className="project-tagline">{p.tagline}</p><ProjectVisual type={p.visual} />{p.proof.length > 0 && <div className="proof-row">{p.proof.map(([v, l]) => <div className="proof" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div>}<div className="stack-row">{p.stack.map(s => <span key={s}><TechIcon name={s}/>{s}</span>)}</div></div>
            <div className="project-action"><button onClick={() => setSelected(p)} className="round-arrow" aria-label={"View " + p.name + " details"}><ArrowUpRight /></button><a href={p.github} target="_blank" rel="noopener noreferrer">SOURCE CODE <ExternalLink size={12} /></a></div>
          </motion.article>)}
          {visible.length === 0 && <p className="empty-state">No projects match that search. Try another project name or technology.</p>}
        </div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-grid">
        <motion.div {...reveal}><span className="mono-label">03 / ABOUT</span><h2>BUILT ON<br /><em>CURIOSITY.</em></h2><p className="about-script">Always learning. Always building.</p></motion.div>
        <motion.div className="about-copy" {...reveal}><p className="about-lead">{site.about}</p><p>My engineering approach is simple: understand the fundamentals, make assumptions explicit, test the behavior, and improve what the evidence says is weak. I prefer clear interfaces and maintainable systems over unnecessary complexity.</p><p>Currently pursuing {site.education.degree} at {site.education.institution}, with graduation expected in 2028.</p><div className="about-facts"><div><GraduationCap /><span>EDUCATION</span><strong>B.Tech · ECE</strong></div><div><Code2 /><span>WORKING STYLE</span><strong>Build · Test · Iterate</strong></div></div></motion.div>
      </div></section>

      <section className="stack-section section-wrap" id="toolkit">
        <motion.div className="section-heading stack-heading" {...reveal}><div><span className="mono-label">04 / TECHNICAL TOOLKIT</span><h2>TOOLS FOR<br /><em>THE WORK.</em></h2></div><p className="section-aside">A practical toolkit shaped by the systems I've built and the problems I've worked through.</p></motion.div>
        <div className="skills-grid">{skills.map((g, i) => <motion.div className="skill-group" key={g.label} {...reveal}><span className="skill-number">0{i + 1}</span><div><h3>{g.label}</h3><div className="skill-tags">{g.items.map(s => <span key={s}><TechIcon name={s}/>{s}</span>)}</div></div></motion.div>)}</div>
      </section>

      <section className="open-source"><div className="section-wrap open-grid"><div><span className="mono-label">05 / OPEN SOURCE</span><h2>CONTRIBUTE.<br /><em>COLLABORATE.</em></h2></div><div className="oss-content"><p>Contributed vector-name validation to the local collection implementation in the Qdrant Python client, with regression coverage for retrieval and query operations.</p><a href="https://github.com/qdrant/qdrant-client/pull/1653" target="_blank" rel="noopener noreferrer" className="oss-link">VIEW PULL REQUEST <ArrowUpRight size={15} /></a><div className="oss-meta"><span>QDRANT CLIENT</span><span>PYTHON · PYTEST</span><span>8 TESTS PASSED LOCALLY</span></div></div></div></section>

      <section className="contact-section section-wrap" id="contact"><motion.div {...reveal}><span className="mono-label">06 / CONTACT</span><h2>HAVE A GOOD<br /><em>PROBLEM?</em></h2><p className="contact-copy">Interested in AI engineering, backend systems, or applied ML? I'm open to internship opportunities and thoughtful technical conversations.</p><a className="button button-primary contact-button" href={"mailto:" + site.email}>Start a conversation <ArrowUpRight size={16} /></a></motion.div><div className="contact-side">
        <a href={"mailto:" + site.email}><Mail /> EMAIL <ArrowUpRight /></a>
        <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LINKEDIN <ArrowUpRight /></a>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer"><Github /> GITHUB <ArrowUpRight /></a>
        <a href={site.links.leetcode} target="_blank" rel="noopener noreferrer"><Code2 /> LEETCODE <ArrowUpRight /></a>
        <a href={site.links.codechef} target="_blank" rel="noopener noreferrer"><Terminal /> CODECHEF <ArrowUpRight /></a>
      </div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark" href="#top"><span className="mark">SK</span><span>SUJEET KONA<span className="wordmark-dot">.</span></span></a><span>DESIGNED WITH INTENT. BUILT WITH CARE.</span><span>© {new Date().getFullYear()} SUJEET KONA</span></footer>

    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null); }}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details"><X /></button><span className="mono-label">{selected.number} / PROJECT DETAIL</span><h2 id="modal-title">{selected.name}</h2><p className="modal-desc">{selected.description}</p><h3>ENGINEERING NOTES</h3><ul>{selected.highlights.map(x => <li key={x}>{x}</li>)}</ul>{selected.proof.length > 0 && <><h3>MEASURED OUTCOMES</h3><div className="modal-proof">{selected.proof.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></>}<h3>TECHNOLOGY</h3><div className="stack-row">{selected.stack.map(s => <span key={s}><TechIcon name={s}/>{s}</span>)}</div><a className="button button-primary modal-link" href={selected.github} target="_blank" rel="noopener noreferrer">Explore repository <ArrowUpRight size={15} /></a></motion.div></motion.div>}</AnimatePresence>
  </div>;
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);

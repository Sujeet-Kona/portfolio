import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Code2, Cpu, Database, Workflow, Terminal, GraduationCap, Award, ChevronRight, Sparkles, Sun, Moon } from "lucide-react";
import "./styles.css";

const projects = [
  {
    id:"nexora", number:"01", name:"NEXORA", type:"Retrieval · Backend Systems", category:"AI Systems",
    tagline:"A multi-tenant knowledge platform built around retrieval quality, isolation, and operational reliability.",
    description:"An enterprise-style RAG backend for ingesting and querying private document collections. The pipeline combines lexical and dense retrieval, rank fusion, cross-encoder reranking, relevance filtering, grounded citations, and streamed responses.",
    highlights:["Hybrid BM25 + dense retrieval with Reciprocal Rank Fusion","Cross-encoder reranking, relevance filtering, and grounded citations","Tenant-scoped authorization, token rotation, audit logs, and processing recovery"],
    proof:[["93.33%","Recall@5"],["100%","Recall@10"],["60","Labeled questions"]],
    stack:["Python","FastAPI","PostgreSQL","Qdrant","BM25","BGE-M3","Cross-Encoder","Docker"],
    github:"https://github.com/Sujeet-Kona/NEXORA", accent:"blue"
  },
  {
    id:"riskforge", number:"02", name:"RiskForge", type:"Machine Learning · Risk Decisioning", category:"Machine Learning",
    tagline:"A chronological fraud-risk pipeline with calibrated probabilities and explainable decisions.",
    description:"An end-to-end fraud detection and decisioning system built on the IEEE-CIS transaction dataset. It uses point-in-time behavioral features, temporal evaluation, probability calibration, local explanations, and a FastAPI scoring service.",
    highlights:["Chronological XGBoost training over 590K+ transactions and 28 engineered features","Isotonic calibration with Brier score reduced by 76% and ECE by 98%","FastAPI scoring with ALLOW / REVIEW / BLOCK policy and TreeSHAP reason codes"],
    proof:[["0.449","Test Average Precision"],["0.865","ROC-AUC"],["590K+","Transactions"]],
    stack:["Python","Pandas","Scikit-learn","XGBoost","SHAP","FastAPI","PostgreSQL","Docker"],
    github:"https://github.com/Sujeet-Kona/RiskForge", accent:"violet"
  },
  {
    id:"loraflow", number:"03", name:"LoRAFlow", type:"LLM Engineering · Evaluation", category:"LLM Engineering",
    tagline:"A reproducible fine-tuning workflow that treats evaluation as a first-class part of the pipeline.",
    description:"A configuration-driven supervised fine-tuning pipeline for Qwen2.5-0.5B using Transformers, TRL, and PEFT LoRA. It covers dataset validation, training, held-out evaluation, multi-seed experiments, adapter export, and API serving.",
    highlights:["Reproducible SFT pipeline with validated datasets and adapter export","Three controlled Prompt-v2 benchmark tracks against TF-IDF + LinearSVC baselines","Multi-seed orchestration, structured-output checks, and FastAPI inference"],
    proof:[["77.33%","Track B exact match"],["98.67%","Structured validity"],["3","Benchmark tracks"]],
    stack:["Python","Transformers","PyTorch","TRL","PEFT / LoRA","FastAPI","Docker","GitHub Actions"],
    github:"https://github.com/Sujeet-Kona/LoRAFlow", accent:"amber"
  }
];

const skills = [
  {label:"Languages",items:["Python","C","SQL"]},
  {label:"Backend & Data",items:["FastAPI","REST APIs","PostgreSQL","SQLAlchemy","Alembic","Qdrant"]},
  {label:"Machine Learning",items:["PyTorch","Scikit-learn","XGBoost","SHAP","Pandas","NumPy"]},
  {label:"LLM Engineering",items:["Hugging Face Transformers","PEFT / LoRA","TRL","Fine-tuning","LLM Evaluation"]},
  {label:"Retrieval",items:["BM25","Dense & Hybrid Retrieval","Reciprocal Rank Fusion","Cross-Encoder Reranking","RAG"]},
  {label:"Tools & Quality",items:["Docker","Ollama","Git","GitHub","pytest","Ruff"]}
];

function App(){
  const [active,setActive]=useState("All");
  const [selected,setSelected]=useState(null);
  const [mobileOpen,setMobileOpen]=useState(false);
  const [motionOn,setMotionOn]=useState(true);
  const reduce=useReducedMotion();
  const categories=["All","AI Systems","Machine Learning","LLM Engineering"];
  const visible=useMemo(()=>active==="All"?projects:projects.filter(p=>p.category===active),[active]);
  const reveal=(!motionOn||reduce)?{}:{initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.16},transition:{duration:.65,ease:[.22,1,.36,1]}};
  const closeMenu=()=>setMobileOpen(false);
  useEffect(()=>{const onKeyDown=(event)=>{if(event.key==="Escape"){setSelected(null);setMobileOpen(false);}};window.addEventListener("keydown",onKeyDown);return()=>window.removeEventListener("keydown",onKeyDown);},[]);
  return <div className="site-shell">
    <div className="grain" aria-hidden="true"/>
    <header className="topbar">
      <a className="wordmark" href="#top" onClick={closeMenu}><span className="mark">SK</span><span>SUJEET KONA<span className="wordmark-dot">.</span></span></a>
      <nav className={mobileOpen?"nav nav-open":"nav"} aria-label="Main navigation">
        {["Work","About","Stack","Contact"].map(n=><a key={n} href={"#"+n.toLowerCase()} onClick={closeMenu}>{n}</a>)}
      </nav>
      <div className="top-actions">
        <button className="motion-toggle" onClick={()=>setMotionOn(v=>!v)} aria-label="Toggle motion"><span className={motionOn?"status-dot":"status-dot off"}/>{motionOn?"Motion on":"Motion off"}</button>
        <a className="top-cta" href="#contact">Let's connect <ArrowUpRight size={14}/></a>
        <button className="menu-toggle" aria-label={mobileOpen?"Close menu":"Open menu"} onClick={()=>setMobileOpen(v=>!v)}>{mobileOpen?<X/>:<Menu/>}</button>
      </div>
    </header>

    <main id="top">
      <section className="hero section-wrap">
        <div className="hero-gridline"/>
        <div className="eyebrow"><span className="eyebrow-line"/> ENGINEERING PORTFOLIO <span className="eyebrow-year">2026 — 2027</span></div>
        <motion.div className="hero-copy" {...reveal}>
          <p className="hero-kicker">AI ENGINEERING <span>·</span> BACKEND SYSTEMS <span>·</span> APPLIED ML</p>
          <h1>BUILDING<br/><em>INTELLIGENT</em><br/>SYSTEMS<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-intro">I'm <strong>Sujeet Kona</strong>, a third-year Electronics and Communication Engineering student focused on building reliable backend systems and practical AI products.</p>
            <div className="hero-links"><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={16}/></a><a className="text-link" href="mailto:sujithk73372@gmail.com">Get in touch <ArrowUpRight size={15}/></a></div>
          </div>
        </motion.div>
        <div className="hero-meta"><span>BASED IN INDIA</span><span>ECE · EXPECTED 2028</span><span className="availability"><i/> OPEN TO INTERNSHIP OPPORTUNITIES</span></div>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner"><span className="mono-label">01 / APPROACH</span><p>Fundamentals first. <em>Evidence over assumptions.</em><br className="desktop-break"/> Build, measure, debug, and improve.</p><span className="strip-symbol">↘</span></div>
      </section>

      <section className="work-section section-wrap" id="work">
        <motion.div className="section-heading" {...reveal}><div><span className="mono-label">02 / SELECTED WORK</span><h2>THINGS I'VE<br/><em>ENGINEERED.</em></h2></div><p className="section-aside">Three substantial projects across retrieval systems, fraud risk, and LLM fine-tuning. Built to explore real engineering constraints—not just demos.</p></motion.div>
        <div className="filters" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={active===c?"filter active":"filter"} onClick={()=>setActive(c)}>{c}<span>{c==="All"?"03":String(projects.filter(p=>p.category===c).length).padStart(2,"0")}</span></button>)}</div>
        <div className="project-list">
          {visible.map((p,i)=><motion.article className={"project-card "+p.accent} key={p.id} {...reveal}>
            <div className="project-index"><span>{p.number}</span><span className="index-line"/></div>
            <div className="project-main"><div className="project-overline">{p.type}</div><h3>{p.name}</h3><p className="project-tagline">{p.tagline}</p><div className="proof-row">{p.proof.map(([v,l])=><div className="proof" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div><div className="stack-row">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div>
            <div className="project-action"><button onClick={()=>setSelected(p)} className="round-arrow" aria-label={"View "+p.name+" details"}><ArrowUpRight/></button><a href={p.github} target="_blank" rel="noreferrer">SOURCE CODE <ExternalLink size={12}/></a></div>
          </motion.article>)}
        </div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-grid">
        <motion.div {...reveal}><span className="mono-label">03 / ABOUT</span><h2>CURIOUS BY<br/><em>DEFAULT.</em></h2></motion.div>
        <motion.div className="about-copy" {...reveal}><p className="about-lead">I like understanding what happens beneath the abstraction—and building systems that hold up beyond the happy path.</p><p>My work sits at the intersection of Python backend engineering, applied machine learning, and LLM systems. I care about sound fundamentals, measurable evaluation, clear interfaces, and software that is maintainable.</p><p>Currently pursuing a B.Tech. in Electronics and Communication Engineering at Visakhapatnam Institute of Information Technology, with an expected graduation in 2028.</p><div className="about-facts"><div><GraduationCap/><span>EDUCATION</span><strong>B.Tech · ECE</strong></div><div><Code2/><span>WORKING STYLE</span><strong>Build · Test · Iterate</strong></div></div></motion.div>
      </div></section>

      <section className="stack-section section-wrap" id="stack">
        <motion.div className="section-heading stack-heading" {...reveal}><div><span className="mono-label">04 / TECHNICAL TOOLKIT</span><h2>TOOLS FOR<br/><em>THE WORK.</em></h2></div><p className="section-aside">A practical toolkit shaped by the systems I've built and the problems I've worked through.</p></motion.div>
        <div className="skills-grid">{skills.map((g,i)=><motion.div className="skill-group" key={g.label} {...reveal}><span className="skill-number">0{i+1}</span><div><h3>{g.label}</h3><div className="skill-tags">{g.items.map(s=><span key={s}>{s}</span>)}</div></div></motion.div>)}</div>
      </section>

      <section className="open-source"><div className="section-wrap open-grid"><div><span className="mono-label">05 / OPEN SOURCE</span><h2>SMALL FIXES.<br/><em>SHARED VALUE.</em></h2></div><div className="oss-content"><p>Contributed vector-name validation to the local collection implementation in the Qdrant Python client, with regression coverage for retrieval and query operations.</p><a href="https://github.com/qdrant/qdrant-client/pull/1653" target="_blank" rel="noreferrer" className="oss-link">VIEW PULL REQUEST <ArrowUpRight size={15}/></a><div className="oss-meta"><span>QDRANT CLIENT</span><span>PYTHON · PYTEST</span><span>8 TESTS PASSED LOCALLY</span></div></div></div></section>

      <section className="contact-section section-wrap" id="contact"><motion.div {...reveal}><span className="mono-label">06 / CONTACT</span><h2>LET'S BUILD<br/><em>SOMETHING USEFUL.</em></h2><p className="contact-copy">Interested in AI engineering, backend systems, or applied ML? I'm open to internship opportunities and thoughtful technical conversations.</p><a className="button button-primary contact-button" href="mailto:sujithk73372@gmail.com">Start a conversation <ArrowUpRight size={16}/></a></motion.div><div className="contact-side"><a href="mailto:sujithk73372@gmail.com"><Mail/> EMAIL <ArrowUpRight/></a><a href="https://www.linkedin.com/in/kona-sujeet-6088b3374" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ArrowUpRight/></a><a href="https://github.com/Sujeet-Kona" target="_blank" rel="noreferrer"><Github/> GITHUB <ArrowUpRight/></a><a href="https://leetcode.com/u/KONA_SUJEET/" target="_blank" rel="noreferrer"><Code2/> LEETCODE <ArrowUpRight/></a><a href="https://www.codechef.com/users/real_fleck_19" target="_blank" rel="noreferrer"><Terminal/> CODECHEF <ArrowUpRight/></a></div></section>
    </main>
    <footer className="footer section-wrap"><a className="wordmark" href="#top"><span className="mark">SK</span><span>SUJEET KONA<span className="wordmark-dot">.</span></span></a><span>DESIGNED WITH INTENT. BUILT WITH CARE.</span><span>© {new Date().getFullYear()} SUJEET KONA</span></footer>

    <AnimatePresence>{selected&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:16}}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close details"><X/></button><span className="mono-label">{selected.number} / PROJECT DETAIL</span><h2 id="modal-title">{selected.name}</h2><p className="modal-desc">{selected.description}</p><h3>ENGINEERING NOTES</h3><ul>{selected.highlights.map(x=><li key={x}>{x}</li>)}</ul><h3>TECHNOLOGY</h3><div className="stack-row">{selected.stack.map(s=><span key={s}>{s}</span>)}</div><a className="button button-primary modal-link" href={selected.github} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={15}/></a></motion.div></motion.div>}</AnimatePresence>
  </div>
}
createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);

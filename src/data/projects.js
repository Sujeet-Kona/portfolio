export const projects = [
  {
    id: "nexora",
    number: "01",
    name: "NEXORA",
    category: "AI Systems",
    type: "Retrieval · Backend Systems",
    tagline: "A multi-tenant knowledge platform built around retrieval quality, isolation, and operational reliability.",
    description: "An enterprise-style RAG backend for ingesting and querying private document collections. The pipeline combines lexical and dense retrieval, rank fusion, cross-encoder reranking, relevance filtering, grounded citations, and streamed responses.",
    highlights: [
      "Hybrid BM25 + dense retrieval with Reciprocal Rank Fusion",
      "Cross-encoder reranking, relevance filtering, and grounded citations",
      "Tenant-scoped authorization, token rotation, audit logs, and processing recovery"
    ],
    proof: [["93.33%", "Recall@5"], ["100%", "Recall@10"], ["60", "Labeled questions"]],
    stack: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "BM25", "Cross-Encoder", "Docker"],
    github: "https://github.com/Sujeet-Kona/NEXORA",
    accent: "red",
    visual: "retrieval"
  },
  {
    id: "riskforge",
    number: "02",
    name: "RiskForge",
    category: "Machine Learning",
    type: "Machine Learning · Risk Decisioning",
    tagline: "A chronological fraud-risk pipeline with calibrated probabilities and explainable decisions.",
    description: "An end-to-end fraud detection and decisioning system built on the IEEE-CIS transaction dataset. It uses point-in-time behavioral features, temporal evaluation, probability calibration, local explanations, and a FastAPI scoring service.",
    highlights: [
      "Chronological XGBoost training over 590K+ transactions and 28 engineered features",
      "Isotonic calibration with Brier score reduced by 76% and ECE by 98%",
      "FastAPI scoring with ALLOW / REVIEW / BLOCK policy and TreeSHAP reason codes"
    ],
    proof: [["0.449", "Test Average Precision"], ["0.865", "ROC-AUC"], ["590K+", "Transactions"]],
    stack: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "FastAPI", "Docker"],
    github: "https://github.com/Sujeet-Kona/RiskForge",
    accent: "gold",
    visual: "risk"
  },
  {
    id: "loraflow",
    number: "03",
    name: "LoRAFlow",
    category: "LLM Engineering",
    type: "LLM Engineering · Evaluation",
    tagline: "A reproducible fine-tuning workflow that treats evaluation as a first-class part of the pipeline.",
    description: "A configuration-driven supervised fine-tuning pipeline for Qwen2.5-0.5B using Transformers, TRL, and PEFT LoRA. It covers dataset validation, training, held-out evaluation, multi-seed experiments, adapter export, and API serving.",
    highlights: [
      "Reproducible SFT pipeline with validated datasets and adapter export",
      "Three controlled Prompt-v2 benchmark tracks against TF-IDF + LinearSVC baselines",
      "Multi-seed orchestration, structured-output checks, and FastAPI inference"
    ],
    proof: [["77.33%", "Track B exact match"], ["98.67%", "Structured validity"], ["3", "Benchmark tracks"]],
    stack: ["Python", "Transformers", "PyTorch", "TRL", "PEFT / LoRA", "FastAPI", "GitHub Actions"],
    github: "https://github.com/Sujeet-Kona/LoRAFlow",
    accent: "cream",
    visual: "finetune"
  }
];

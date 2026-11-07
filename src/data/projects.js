export const projects = [
  {
    id: "nexora",
    number: "01",
    name: "NEXORA",
    category: "AI Systems",
    type: "AI Systems · Retrieval · Backend",
    tagline: "A multi-tenant knowledge platform built around retrieval quality, isolation, and operational reliability.",
    description: "NEXORA is a production-oriented retrieval-augmented generation backend built as a FastAPI modular monolith. It ingests PDF and DOCX documents, retrieves evidence using BM25 and BGE-M3 dense search, and generates cited answers through a local Ollama runtime. It enforces tenant-scoped access and refuses deterministically when evidence is insufficient. Its benchmark results describe a small, controlled corpus—not production SLAs or universal answer accuracy.",
    highlights: [
      "Implemented PDF/DOCX ingestion, document versioning, explicit lifecycle states, retry handling, and stale-processing recovery.",
      "Built hybrid BM25 + Qdrant dense retrieval with Reciprocal Rank Fusion (RRF), followed by cross-encoder reranking and relevance filtering.",
      "Evaluated retrieval on 60 labeled questions over 16 documents and 220 chunks; hybrid RRF achieved 93.33% Recall@5 and 100% Recall@10. These are retrieval metrics, not answer-accuracy measurements.",
      "Added tenant-scoped authorization across PostgreSQL and Qdrant, JWT refresh-token rotation/revocation, Argon2 password hashing, upload validation, and audit logging.",
      "Implemented deterministic evidence-gated refusal, citation validation, and Server-Sent Events (SSE) response streaming using a local LLM runtime; documented that the reranker did not improve aggregate MRR in the measured run."
    ],
    proof: [["93.33%", "Recall@5"], ["100%", "Recall@10"], ["60", "Labeled retrieval questions"]],
    stack: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "BM25", "BGE-M3", "Cross-Encoder", "Ollama", "Docker", "pytest"],
    github: "https://github.com/Sujeet-Kona/NEXORA",
    accent: "red",
    visual: "retrieval"
  },
  {
    id: "riskforge",
    number: "02",
    name: "RiskForge",
    category: "Machine Learning",
    type: "Machine Learning · Fraud Risk · Decisioning",
    tagline: "A chronological fraud-risk pipeline with calibrated probabilities and explainable transaction decisions.",
    description: "RiskForge is an offline fraud-risk modeling and transaction decisioning system built on the public IEEE-CIS Fraud Detection dataset. It creates point-in-time behavioral features, trains and evaluates models on chronological partitions, calibrates probabilities, applies an explicit decision policy, and serves scores through FastAPI. It is a research and portfolio system, not a live payment-network integration.",
    highlights: [
      "Built a point-in-time feature pipeline over 590,540 transactions, with a locked 28-feature contract covering behavioral, categorical, and C/D feature families.",
      "Used chronological train/validation/test partitions and leakage controls that prevent same-timestamp or future transactions from entering historical features.",
      "Selected XGBoost with test Average Precision of 0.449254 and ROC-AUC of 0.865318 on the held-out historical dataset.",
      "Applied isotonic calibration selected through forward-chaining validation; test Brier score decreased from 0.101228 to 0.024204 (approximately 76.1%), while calibrated Average Precision was 0.438919 versus 0.449254 raw.",
      "Built a FastAPI scoring path that loads a frozen model artifact, applies ALLOW / REVIEW / BLOCK policy thresholds, returns TreeSHAP signals, and persists decisions to PostgreSQL."
    ],
    proof: [["0.449", "Test Average Precision"], ["0.865", "Test ROC-AUC"], ["76.1%", "Brier reduction"]],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP", "FastAPI", "PostgreSQL", "MLflow", "pytest"],
    github: "https://github.com/Sujeet-Kona/RiskForge",
    accent: "gold",
    visual: "risk"
  },
  {
    id: "loraflow",
    number: "03",
    name: "LoRAFlow",
    category: "LLM Engineering",
    type: "LLM Engineering · Fine-Tuning · Evaluation",
    tagline: "A reproducible fine-tuning workflow that treats evaluation as a first-class part of the pipeline.",
    description: "LoRAFlow is a configuration-driven supervised fine-tuning and evaluation pipeline for Qwen2.5-0.5B using Hugging Face Transformers, TRL, and standard PEFT LoRA. It covers dataset validation, controlled training, held-out evaluation, multi-track experiments, adapter export, and FastAPI inference. Reported model-quality results come from small synthetic tasks and should not be interpreted as broad language-model generalization. QLoRA is not implemented.",
    highlights: [
      "Implemented configuration validation, JSONL dataset checks, supervised fine-tuning, held-out evaluation, adapter export/reload checks, and FastAPI inference.",
      "Fine-tuned Qwen2.5-0.5B with standard LoRA; the recorded adapter has 540,672 trainable parameters (about 0.109% of the base model).",
      "Built three controlled Prompt-v2 benchmark tracks and compared the adapted model against a train-only TF-IDF + LinearSVC baseline.",
      "Recorded 77.33% exact match on Track B versus 56.00% for the train-only TF-IDF + LinearSVC baseline, with 98.67% structured-output validity; Track C scored only 37.33% exact match and exposes a generalization weakness.",
      "Added reproducible experiment metadata, split audits, MLflow tracking, adapter/merged-export verification, automated tests, and CI smoke checks; documented Track A lexical-neighbour overlap, Track C generalization weakness, synthetic-task scope, single-device training, and the absence of QLoRA."
    ],
    proof: [["77.33%", "Track B exact match"], ["98.67%", "Structured validity"], ["3", "Benchmark tracks"]],
    stack: ["Python", "PyTorch", "Transformers", "TRL", "PEFT / LoRA", "FastAPI", "MLflow", "pytest", "GitHub Actions"],
    github: "https://github.com/Sujeet-Kona/LoRAFlow",
    accent: "cream",
    visual: "finetune"
  },
];

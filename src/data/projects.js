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
  {
    id: "finetunex",
    number: "04",
    name: "FineTuneX",
    category: "LLM Engineering",
    type: "LLM Engineering · Financial Reasoning",
    tagline: "A research pipeline foundation for evaluating numerical reasoning over financial reports.",
    description: "FineTuneX is an in-progress project exploring parameter-efficient adaptation of language models for FinQA financial question answering. The repository currently focuses on dataset preparation, structured reasoning-program parsing, and deterministic execution. Model feasibility, base-model evaluation, LoRA training, and comparative model results remain planned work.",
    highlights: [
      "Inspected the FinQA benchmark and built a dedicated dataset preparation and validation pipeline.",
      "Implemented a parser for FinQA reasoning programs and a restricted deterministic executor for numerical operations.",
      "Completed a gold-program execution audit across all 8,281 benchmark examples.",
      "Designed the next evaluation stages around official benchmark splits, comparable base/fine-tuned evaluation, and numerical answer correctness rather than fluent text alone.",
      "Clearly separates completed data/tooling work from planned model training, adapter packaging, and inference serving."
    ],
    proof: [["8,281", "Gold programs audited"], ["In progress", "Model evaluation"]],
    stack: ["Python", "FinQA", "Dataset Validation", "Program Parsing", "Deterministic Execution"],
    github: "https://github.com/Sujeet-Kona/FineTuneX",
    accent: "cream",
    visual: "finetune"
  },
  {
    id: "smart-inventory",
    number: "05",
    name: "Smart Inventory API",
    category: "AI Systems",
    type: "Backend Engineering · REST API",
    tagline: "An inventory management API demonstrating authentication, authorization, and maintainable backend structure.",
    description: "A FastAPI REST API for managing product inventory, backed by SQLite. The project focuses on backend fundamentals: authenticated access, role-based permissions, validation, service-layer separation, and automated tests.",
    highlights: [
      "Built REST endpoints for product inventory management using FastAPI and SQLite.",
      "Implemented JWT authentication and role-based access control for protected operations.",
      "Separated request handling and business logic using a service-layer architecture.",
      "Added input validation and automated tests to verify API behavior.",
      "Kept persistence lightweight with SQLite for a focused backend fundamentals project."
    ],
    proof: [],
    stack: ["Python", "FastAPI", "SQLite", "JWT", "REST APIs", "pytest"],
    github: "https://github.com/Sujeet-Kona/Smart_inventory_API",
    accent: "red",
    visual: "retrieval"
  },
  {
    id: "ai-backend-api",
    number: "06",
    name: "AI Backend API",
    category: "AI Systems",
    type: "Backend Engineering · AI Integration",
    tagline: "A small API layer that exposes a hosted language model through a clean JSON interface.",
    description: "A starter FastAPI backend integrated with the OpenAI API. It demonstrates how to accept prompt input over HTTP, call an external model provider, and return a JSON response while keeping credentials in environment configuration.",
    highlights: [
      "Created a FastAPI application with an AI prompt endpoint.",
      "Integrated the OpenAI API behind a backend request/response boundary.",
      "Used JSON request and response payloads for predictable client integration.",
      "Kept API credentials outside source code through environment-variable configuration.",
      "Documented a minimal local run workflow using Uvicorn."
    ],
    proof: [],
    stack: ["Python", "FastAPI", "OpenAI API", "REST APIs", "JSON", "Uvicorn"],
    github: "https://github.com/Sujeet-Kona/AI_backend_API",
    accent: "red",
    visual: "retrieval"
  },
  {
    id: "langchain-chatbot",
    number: "07",
    name: "LangChain Gemini Chatbot",
    category: "LLM Engineering",
    type: "LLM Applications · Conversational UI",
    tagline: "An introductory conversational application connecting a Streamlit interface to Gemini.",
    description: "A beginner-level AI chatbot built with Streamlit, LangChain, and the Google Gemini API. It demonstrates a simple conversational application flow and integration with a hosted LLM provider.",
    highlights: [
      "Built a Streamlit interface for interacting with a conversational AI application.",
      "Integrated LangChain with the Google Gemini API.",
      "Connected user prompts to a hosted language model and displayed generated responses.",
      "Kept the project intentionally small as an introductory LLM application rather than presenting it as a production agent system."
    ],
    proof: [],
    stack: ["Python", "Streamlit", "LangChain", "Google Gemini API"],
    github: "https://github.com/Sujeet-Kona/langchain-chatbot_gemini",
    accent: "cream",
    visual: "finetune"
  },
  {
    id: "superstore-analysis",
    number: "08",
    name: "Superstore Sales Analysis",
    category: "Machine Learning",
    type: "Data Analysis · Business Intelligence",
    tagline: "A retail profitability analysis focused on discounting, customer concentration, and regional performance.",
    description: "An exploratory analysis of a retail Superstore dataset to identify revenue drivers, margin weaknesses, loss-making sub-categories, customer concentration, regional gaps, and the relationship between discounting and profitability.",
    highlights: [
      "Analyzed sales, profit, and margin at category and sub-category levels to identify weak-margin and loss-driving product groups.",
      "Examined top-customer revenue and profit concentration, average order value by segment, and regional loss exposure.",
      "Built state-level geographic profitability visualization using Plotly choropleth mapping.",
      "Evaluated discount levels against median profit and loss rates; the repository reports sharply higher loss exposure above 30% discount.",
      "Translated findings into pricing, product, regional, and customer-retention recommendations."
    ],
    proof: [],
    stack: ["Python", "Pandas", "Matplotlib", "Plotly", "Jupyter Notebook"],
    github: "https://github.com/Sujeet-Kona/FUTURE_DS_01",
    accent: "gold",
    visual: "risk"
  },
  {
    id: "customer-churn",
    number: "09",
    name: "Customer Churn Analysis",
    category: "Machine Learning",
    type: "Machine Learning · Customer Analytics",
    tagline: "A classification workflow to identify customer characteristics associated with churn.",
    description: "A Telco Customer Churn analysis using customer demographics, service details, billing information, and churn labels. The workflow combines data cleaning, exploratory analysis, model comparison, and business recommendations.",
    highlights: [
      "Cleaned and preprocessed the Telco Customer Churn dataset and prepared features for classification.",
      "Compared Logistic Regression, K-Nearest Neighbors, Decision Tree, Random Forest, and Support Vector Machine models.",
      "Reported approximately 81% accuracy for Logistic Regression as the best-performing model in the project.",
      "Analyzed churn patterns associated with month-to-month contracts, shorter tenure, monthly charges, and fiber-optic service.",
      "Proposed retention actions including onboarding improvements, long-term contract incentives, and targeted support for higher-risk segments."
    ],
    proof: [["~81%", "Reported accuracy"], ["5", "Models compared"]],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/Sujeet-Kona/FUTURE_DS_02",
    accent: "gold",
    visual: "risk"
  },
  {
    id: "conversion-funnel",
    number: "10",
    name: "E-commerce Conversion Funnel",
    category: "Machine Learning",
    type: "Data Analysis · Predictive Modeling",
    tagline: "A session-level analysis of how shoppers move from product views to cart additions and purchases.",
    description: "An e-commerce behavior analysis using event-level interaction data. It studies the view-to-cart-to-purchase funnel, engineers session-level engagement features, and compares classification models for purchase prediction.",
    highlights: [
      "Analyzed large-scale e-commerce interaction events, including views, cart actions, and purchases.",
      "Built a conversion funnel to identify drop-off between product discovery, cart addition, and purchase.",
      "Engineered session-level features such as view counts, cart interactions, average price exposure, event counts, cart-to-view ratio, and engagement score.",
      "Compared Logistic Regression, Decision Tree, Random Forest, and Gradient Boosting for session purchase prediction.",
      "Produced visual analysis and business recommendations around product-page experience, cart engagement, recommendations, and checkout friction."
    ],
    proof: [],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/Sujeet-Kona/FUTURE_DS_03",
    accent: "gold",
    visual: "risk"
  }
];

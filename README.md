# Sujeet Kona — Portfolio

A responsive portfolio focused on AI engineering, backend systems, applied machine learning, and LLM engineering.

## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## Content architecture

- Identity, biography, education, contact, social links, and SEO: `src/config/site.js`
- Project descriptions, engineering notes, evaluation metrics, technologies, and repository links: `src/data/projects.js`
- Skills, technology icons, interactions, and page composition: `src/main.jsx`
- Visual system, responsive behavior, and reduced-motion styling: `src/styles.css`

## Project coverage

The portfolio presents ten documented project repositories:

- NEXORA — multi-tenant retrieval-augmented generation platform.
- RiskForge — chronological fraud-risk modeling and transaction decisioning.
- LoRAFlow — reproducible standard-LoRA fine-tuning and evaluation pipeline.
- FineTuneX — FinQA data/program tooling; model training and comparative evaluation remain in progress.
- Smart Inventory API — FastAPI inventory backend.
- AI Backend API — FastAPI integration with the OpenAI API.
- LangChain Gemini Chatbot — introductory Streamlit/LangChain/Gemini application.
- Superstore Sales Analysis — retail profitability and discount analysis.
- Customer Churn Analysis — Telco churn analysis and model comparison.
- E-commerce Conversion Funnel — session-level behavior analysis and purchase prediction.

The `MACHINE_LEARNING` repository is not presented as a project because its current README contains only a title and no documented implementation. The Qdrant client contribution is linked separately in the site's Open Source section.

## Quality and content integrity

Project claims and metrics are aligned with the corresponding project repository documentation. Metrics are labeled with their evaluation context and caveats; they should not be interpreted as production performance. FineTuneX is explicitly marked as in progress. No awards, employment history, clients, testimonials, or production deployments are invented.

The project-detail dialog supports Escape-to-close, focus containment, focus restoration, and background scroll locking. The site respects reduced-motion preferences and provides a persistent motion toggle.

## Design reference

The visual direction follows the supplied `Website_portfolio_details.md`: cinematic minimalism, near-black background, warm off-white typography, restrained red accents, Anton display type, Manrope body type, Caveat accent lettering, and controlled motion. The reference website itself was not accessible to the browsing environment during implementation, so this is an implementation of the supplied specification rather than a verified pixel-perfect recreation.

## Verification status

A GitHub Actions workflow is configured to run `npm install` and `npm run build` on pushes and pull requests targeting `main`. A configured workflow is not proof of a successful run; check the Actions tab for the latest result.

Responsive behavior, accessibility, and production output still require a final browser-based review at desktop, tablet, and mobile sizes.

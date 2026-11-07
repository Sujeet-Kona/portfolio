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
- Profile portrait: `public/images/profile.jpg`
- Visual system, responsive behavior, and reduced-motion styling: `src/styles.css`

## Featured projects

The portfolio intentionally highlights three flagship projects:

- **NEXORA** — multi-tenant retrieval-augmented generation platform with hybrid retrieval, reranking, tenant isolation, and grounded responses.
- **RiskForge** — chronological fraud-risk modeling and transaction decisioning with calibration, explicit policy thresholds, and a FastAPI scoring path.
- **LoRAFlow** — reproducible standard-LoRA fine-tuning and evaluation pipeline with controlled benchmark tracks and adapter export.

Project descriptions include evaluation context and limitations. Dataset benchmark results are not represented as production performance or proof of broad generalization. LoRAFlow uses standard LoRA; QLoRA is not implemented.

The Qdrant client contribution is linked separately in the site's Open Source section. The `MACHINE_LEARNING` repository is not presented as a project because its current README does not document an implementation.

## Quality and content integrity

Project claims and metrics are aligned with the corresponding project repository documentation. Metrics are labeled with their evaluation context and caveats. No awards, employment history, clients, testimonials, or production deployments are invented.

The project-detail dialog supports Escape-to-close, focus containment, focus restoration, and background scroll locking. The site respects reduced-motion preferences and provides a persistent motion toggle.

## Design reference

The visual direction follows the supplied `Website_portfolio_details.md`: cinematic minimalism, near-black background, warm off-white typography, a restrained premium-blue accent, Anton display type, Manrope body type, Caveat accent lettering, and controlled motion. The reference website itself was not accessible to the browsing environment during implementation, so this is an implementation of the supplied specification rather than a verified pixel-perfect recreation.

## Verification status

A GitHub Actions workflow is configured to run `npm install` and `npm run build` on pushes and pull requests targeting `main`. A configured workflow is not proof of a successful run; the latest commit currently has no reported commit-status checks.

Responsive behavior, accessibility, and production output still require a final browser-based review at desktop, tablet, and mobile sizes.

# StoreStride Portfolio

This is a Next.js portfolio project for StoreStride, showcasing Amazon advertising services, case studies, and a multi-step contact form.

## Project Structure

- `app/page.tsx`: Main homepage composition, imports all sections.
- `app/components/`: Contains all React components for sections, forms, and UI elements.
- `app/components/FinalStepSection.tsx`: Final call-to-action section with gradient button and glowing background.
- `public/`: Static assets (images, SVGs, etc.).

## Key Features

- **Hero Section**: Data-driven Amazon advertising, animated gradient CTA button.
- **About, Projects, Case Studies, ResultsHero, ApproachSection**: Informational and showcase sections.
- **PPCServicesSection**: Bento grid for PPC services.
- **Contact**: Multi-step form for audit requests.
- **FinalStepSection**: End-of-page CTA with glowing background and Trustpilot stars.

## Styling

- Tailwind CSS for rapid styling and layout.
- Gradient backgrounds and glowing effects for visual emphasis.
- Consistent button styles across sections.

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

- Edit section components in `app/components/` to update content or styling.
- Add new images/SVGs to `public/` for use in UI.
- Update form fields in `Contact.tsx` for custom audit requirements.

## Comments & Code Quality

- Components are commented for clarity.
- Variable and function names are human-readable and descriptive.
- Unused code is removed for maintainability.

## Deployment

- Deploy easily on Vercel or any Next.js-compatible platform.

## License

MIT

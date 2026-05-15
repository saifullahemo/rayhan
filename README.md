# Abu Rayhan Portfolio

Modern portfolio for Abu Rayhan, an SQA Engineer and UI/UX Consultant focused on reliable, usable digital products.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Sass
- Nodemailer contact API

## Pages

- `/` - Landing page with positioning, selected work, strengths, and CTA
- `/about` - Bio, principles, skills, and tools
- `/portfolio` - Filterable project case studies
- `/contact` - Contact links and message form

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Contact Form Environment

Create `.env.local` with:

```bash
EMAIL_USER="your-gmail-address"
EMAIL_PASS="your-app-password"
RECIPIENT_EMAIL="where-messages-should-go"
```

Use a Gmail app password rather than your account password.

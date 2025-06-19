# Silver Souls - Cover Band Website

A modern, responsive website for the Silver Souls cover band built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Contact Form**: Functional contact form with email notifications
- **Video Gallery**: Showcase of band performances
- **Show Listings**: Upcoming performances and booking information
- **Photo Gallery**: Band photos with lightbox functionality
- **Modern UI**: Sleek design with smooth animations and transitions

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- A Supabase account for the contact form functionality
- A Resend account for email delivery

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your Supabase project URL and anon key
   - Add your Resend API key (for the edge function)

### Contact Form Setup

The contact form uses Supabase Edge Functions to send emails. To set this up:

1. **Connect to Supabase**: Click the "Connect to Supabase" button in the top right of your development environment

2. **Set up Resend**: 
   - Sign up for a free account at [Resend](https://resend.com)
   - Get your API key from the dashboard
   - Add the API key to your Supabase project's environment variables as `RESEND_API_KEY`

3. **Configure Email Domain** (Optional):
   - For production, you may want to verify a custom domain in Resend
   - Update the `from` field in the edge function to use your domain

4. **Deploy Edge Function**:
   The edge function will be automatically deployed when you connect to Supabase.

### Development

Run the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Contact Form Features

- **Real-time Validation**: Form validates required fields
- **Loading States**: Shows loading spinner during submission
- **Success/Error Messages**: Clear feedback to users
- **Email Notifications**: Sends formatted emails to silversouls.ca@gmail.com
- **Responsive Design**: Works perfectly on all devices

## Email Template

The contact form sends beautifully formatted HTML emails that include:
- Contact person's name and email
- Full message content
- Timestamp of submission
- Professional Silver Souls branding

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons
- **Supabase** for backend services
- **Resend** for email delivery

## License

© 2024 Silver Souls. All rights reserved.
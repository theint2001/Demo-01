'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { CheckCircle2, Code2, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get('project');

  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    projectLocation: '',
    approximateArea: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showIntegrationCode, setShowIntegrationCode] = useState(false);

  useEffect(() => {
    if (projectParam) {
      const found = PROJECTS.find(
        (p) => p.slug.toLowerCase() === projectParam.toLowerCase() || p.title.toLowerCase() === projectParam.toLowerCase()
      );
      if (found) {
        setSelectedProjectTitle(found.title);
        setFormData((prev) => ({
          ...prev,
          projectType: found.category === 'Objects / Interior' ? 'Interior' : found.category,
        }));
      }
    }
  }, [projectParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please share a brief note about your project.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-surface p-8 sm:p-12 border border-border-stone space-y-8 animate-in fade-in duration-300 max-w-3xl">
        <div className="flex items-center space-x-4 text-olive">
          <CheckCircle2 className="w-8 h-8" />
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-charcoal">
            Form Demonstration Complete
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-3xl text-charcoal">
            Demo inquiry complete — connect your preferred form provider to receive real submissions.
          </h3>
          <p className="text-sm text-stone font-sans leading-relaxed">
            Thank you, {formData.name}. The frontend form validation, state management, and project preselection flow function cleanly.
          </p>
        </div>

        {/* Form Data Summary Box */}
        <div className="bg-limestone p-6 border border-border-stone space-y-3 text-xs text-stone font-mono">
          <div className="font-sans font-medium text-charcoal uppercase tracking-wider pb-2 border-b border-border-stone">
            Captured Inquiry Payload:
          </div>
          {selectedProjectTitle && <p><span className="text-clay">Project Interest:</span> {selectedProjectTitle}</p>}
          <p><span className="text-clay">Name:</span> {formData.name}</p>
          <p><span className="text-clay">Email:</span> {formData.email}</p>
          <p><span className="text-clay">Phone:</span> {formData.phone || 'N/A'}</p>
          <p><span className="text-clay">Type:</span> {formData.projectType}</p>
          <p><span className="text-clay">Location:</span> {formData.projectLocation || 'N/A'}</p>
          <p><span className="text-clay">Budget:</span> {formData.budget || 'N/A'}</p>
          <p><span className="text-clay">Message:</span> {formData.message}</p>
        </div>

        {/* Integration Code Toggle */}
        <div className="pt-4 border-t border-border-stone space-y-4">
          <button
            type="button"
            onClick={() => setShowIntegrationCode(!showIntegrationCode)}
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-charcoal hover:text-clay font-medium transition-colors"
          >
            <Code2 className="w-4 h-4 mr-2" />
            {showIntegrationCode ? 'Hide Backend Integration Code' : 'View Backend Integration Code (Resend / Formspree)'}
          </button>

          {showIntegrationCode && (
            <div className="bg-graphite text-limestone p-6 text-xs font-mono rounded overflow-x-auto space-y-4">
              <p className="text-clay">{'// Next.js App Router API Route / Server Action Snippet (app/api/contact/route.ts):'}</p>
              <pre className="text-limestone/80">{`import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, projectType, message } = body;

  await resend.emails.send({
    from: 'Forma Atelier <inquiries@forma-atelier.com>',
    to: ['hello@forma-atelier.example'],
    subject: \`New Project Inquiry: \${name} (\${projectType})\`,
    text: message,
  });

  return Response.json({ success: true });
}`}</pre>
            </div>
          )}
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: 'Residential',
                projectLocation: '',
                approximateArea: '',
                budget: '',
                timeline: '',
                message: '',
              });
            }}
            className="text-xs uppercase tracking-[0.2em] text-stone hover:text-charcoal underline"
          >
            ← Reset Inquiry Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface p-8 sm:p-12 border border-border-stone space-y-8 max-w-3xl"
      noValidate
    >
      <div className="space-y-2 border-b border-border-stone pb-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal">
          Tell us about the space.
        </h2>
        <p className="text-xs sm:text-sm text-stone font-sans">
          Share a little about the project, and we’ll take it from there.
        </p>
        {selectedProjectTitle && (
          <div className="mt-4 p-3 bg-limestone border border-clay/40 text-xs text-charcoal flex items-center justify-between">
            <span>
              Inquiring regarding project: <strong className="text-clay font-serif text-sm">{selectedProjectTitle}</strong>
            </span>
            <button
              type="button"
              onClick={() => setSelectedProjectTitle(null)}
              className="text-stone hover:text-charcoal underline text-[10px]"
            >
              Clear Pre-selection
            </button>
          </div>
        )}
      </div>

      {/* Section 1: Client Information */}
      <div className="space-y-6">
        <h3 className="text-xs uppercase tracking-[0.2em] text-clay font-medium">
          01. Contact Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Full Name <span className="text-clay">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Eleanor Vance"
              className={`w-full px-4 py-3 bg-limestone/50 border text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay ${
                errors.name ? 'border-red-500' : 'border-border-stone'
              }`}
            />
            {errors.name && <p className="text-[11px] text-red-600 font-sans">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Email Address <span className="text-clay">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="eleanor@example.com"
              className={`w-full px-4 py-3 bg-limestone/50 border text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay ${
                errors.email ? 'border-red-500' : 'border-border-stone'
              }`}
            />
            {errors.email && <p className="text-[11px] text-red-600 font-sans">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2 space-y-2">
            <label htmlFor="phone" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 bg-limestone/50 border border-border-stone text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Project Scope */}
      <div className="space-y-6 pt-4 border-t border-border-stone">
        <h3 className="text-xs uppercase tracking-[0.2em] text-clay font-medium">
          02. Project Scope
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="projectType" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-limestone/50 border border-border-stone text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-clay"
            >
              <option value="Residential">Residential Architecture</option>
              <option value="Hospitality">Hospitality & Dining</option>
              <option value="Workplace">Workplace & Studio</option>
              <option value="Interior">Interior Architecture</option>
              <option value="Other">Other Custom Commission</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="projectLocation" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Project Location
            </label>
            <input
              type="text"
              id="projectLocation"
              name="projectLocation"
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="e.g. Northern Coast / Hill Country"
              className="w-full px-4 py-3 bg-limestone/50 border border-border-stone text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="approximateArea" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Approximate Floor Area
            </label>
            <input
              type="text"
              id="approximateArea"
              name="approximateArea"
              value={formData.approximateArea}
              onChange={handleChange}
              placeholder="e.g. 350 m² / 3,800 sq ft"
              className="w-full px-4 py-3 bg-limestone/50 border border-border-stone text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
              Approximate Investment Bracket
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-limestone/50 border border-border-stone text-xs text-charcoal focus:outline-none focus:ring-1 focus:ring-clay"
            >
              <option value="">Select Estimated Range</option>
              <option value="$250k - $500k">$250k – $500k</option>
              <option value="$500k - $1M">$500k – $1M</option>
              <option value="$1M - $3M">$1M – $3M</option>
              <option value="$3M+">$3M+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Message */}
      <div className="space-y-6 pt-4 border-t border-border-stone">
        <h3 className="text-xs uppercase tracking-[0.2em] text-clay font-medium">
          03. Architectural Vision
        </h3>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-xs uppercase tracking-[0.15em] text-charcoal font-medium">
            Project Overview &amp; Site Brief <span className="text-clay">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your spatial aspirations, site conditions, or desired atmosphere..."
            className={`w-full px-4 py-3 bg-limestone/50 border text-xs text-charcoal placeholder:text-stone/50 focus:outline-none focus:ring-1 focus:ring-clay ${
              errors.message ? 'border-red-500' : 'border-border-stone'
            }`}
          />
          {errors.message && <p className="text-[11px] text-red-600 font-sans">{errors.message}</p>}
        </div>
      </div>

      <div className="pt-4 border-t border-border-stone">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-charcoal text-surface text-xs uppercase tracking-[0.2em] hover:bg-clay transition-all duration-300"
        >
          Submit Project Inquiry <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </form>
  );
}

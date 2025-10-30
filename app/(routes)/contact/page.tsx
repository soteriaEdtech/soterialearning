"use client";
import { motion } from "framer-motion";
import { Calendar, Shield, Clock, Send } from "lucide-react";
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import emailjs from '@emailjs/browser';

type FormData = yup.InferType<typeof schema>;

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  organization: yup.string().nullable().default(null),
  role: yup.string().nullable().default(null),
  goals: yup.string().required('Project goals are required'),
  audience: yup.string().nullable().default(null),
  budget: yup.string().required('Budget range is required'),
  timeline: yup.string().nullable().default(null),
  accessibility: yup.string().nullable().default(null),
  languages: yup.array().of(yup.string()).default([]),
}).required();

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese", "Arabic", "Portuguese"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      organization: null,
      role: null,
      goals: '',
      audience: null,
      budget: '',
      timeline: null,
      accessibility: null,
      languages: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    return;
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);
  };

emailjs.init({
  publicKey: 'YOUR_PUBLIC_KEY',
  // Do not allow headless browsers
  blockHeadless: true, 
  limitRate: { 
    id: 'app', 
    throttle: 10000,
  },
});

  return (
    <div className="min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{
            backgroundImage: 'url("/grid.svg")',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(circle at center, transparent 0%, black 100%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-1/2 right-0 h-[1000px] w-[1000px] rounded-full bg-linear-to-tr from-blue-50 to-indigo-100 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/2 left-0 h-[1000px] w-[1000px] rounded-full bg-linear-to-br from-sky-50 to-cyan-100 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Start Your Project
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let&apos;s discuss your e-learning needs and create a customized solution together
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.name && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    /> 
                    {errors.email && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      {...register('organization')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    /> 
                    {errors.organization && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.organization.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      {...register('role')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.role && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.role.message}</p>}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                    Project Goals
                  </label>
                  <textarea
                    id="goals"
                    rows={4}
                    {...register('goals')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Describe your project objectives and desired outcomes..."
                  />
                  {errors.goals && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.goals.message}</p>}
                </div>

                <div>
                  <label htmlFor="audience" className="block text-sm font-medium text-gray-700">
                    Target Audience
                  </label>
                  <textarea
                    id="audience"
                    rows={2}
                    {...register('audience')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Who is this content for?"
                  />
                  {errors.audience && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.audience.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Required Languages
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {languages.map((language) => (
                      <label key={language} className="flex items-center">
                        <input
                          type="checkbox"
                          {...register('languages')}
                          value={language}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{language}</span>
                      </label>
                    ))}
                  </div>
                {errors.languages && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.languages.message}</p>}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      {...register('budget')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.budget.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                      Desired Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      {...register('timeline')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 3 months, Q1 2026"
                    />
                    {errors.timeline && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.timeline.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="accessibility" className="block text-sm font-medium text-gray-700">
                    Accessibility Requirements
                  </label>
                  <textarea
                    id="accessibility"
                    rows={2}
                    {...register('accessibility')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Any specific accessibility standards or requirements?"
                  />
                  {errors.accessibility && <p style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{errors.accessibility.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Send className="h-4 w-4" />
                Submit 
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 lg:sticky lg:top-8"
          >
            {/* Trust Message */}
            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Your Data is Safe</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                We take your privacy seriously. All information shared is encrypted and never shared with third parties.
              </p>
            </div>

            {/* Response Time */}
            <div className="rounded-2xl bg-green-50 p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Response</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Our team typically responds within 24 hours during business days.
              </p>
            </div>

            {/* Calendar Embed */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Book a Call</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Prefer to discuss directly? Schedule a discovery call with our team.
              </p>
              <div className="mt-4 aspect-video bg-gray-100">
                {/* Calendly iframe would go here */}
                <div className="flex h-full items-center justify-center text-gray-500">
                  Calendly Embed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
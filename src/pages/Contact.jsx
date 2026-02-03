import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Leaf, Shield, Users, Truck, AlertCircle, Headphones, Copy, Check } from 'lucide-react';

// Reusable Input Component with professional styling
const FormInput = ({ label, name, type = 'text', value, onChange, error, required = true }) => (
  <motion.div
    className="space-y-2.5"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-1">
      <label htmlFor={name} className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      {required && <span className="text-red-500 text-sm">*</span>}
    </div>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 bg-white border-2 transition-all duration-300 focus:outline-none ${
        error
          ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
          : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
      } rounded-lg placeholder-slate-400 text-slate-900 text-sm font-normal`}
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
    {error && (
      <motion.div
        className="flex items-center gap-2 text-sm text-red-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AlertCircle className="w-4 h-4" />
        {error}
      </motion.div>
    )}
  </motion.div>
);

// Contact Channel Card - Professional version with copy functionality for single or multiple phones
const ContactChannel = ({ icon: Icon, label, value, subtext, phones = null }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div
      className="group p-6 border border-slate-200 rounded-lg hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">{label}</h3>
          
          {/* Multiple phones */}
          {phones ? (
            <div className="mt-3 space-y-2">
              {phones.map((phone, index) => (
                <div key={index} className="flex items-center justify-between gap-3 bg-slate-50/50 px-3 py-2 rounded-md">
                  <div className="flex-1 min-w-0">
                    {phone.label && (
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{phone.label}</p>
                    )}
                    <p className="text-emerald-700 font-medium text-base break-words">{phone.number}</p>
                  </div>
                  <motion.button
                    onClick={() => handleCopy(phone.number, index)}
                    className="flex-shrink-0 p-1.5 rounded-md text-slate-400 hover:text-emerald-700 hover:bg-emerald-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Copy to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-emerald-700 font-medium mt-1.5 text-base break-words">{value}</p>
          )}
          
          {subtext && <p className="text-slate-500 text-xs mt-2">{subtext}</p>}
        </div>
      </div>
    </motion.div>
  );
};

// Trust Stat Component
const TrustStat = ({ icon: Icon, number, label, delay }) => (
  <motion.div
    className="flex items-center gap-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <div className="text-2xl font-bold text-slate-900">{number}</div>
      <p className="text-slate-600 text-sm font-medium">{label}</p>
    </div>
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/80">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-100/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-6 h-6 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Contact Us</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Get in Touch with Our Team
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Have questions about our fresh produce, services, or anything else? Our dedicated team is here to help you with prompt and professional support.
          </p>
        </motion.div>

        {/* Main Content Grid - Optimized for laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Contact Information */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-4">
              <ContactChannel
                icon={Phone}
                label="Phone Numbers"
                phones={[
                  { label: 'Primary', number: '+91 9616350866' },
                  { label: 'Secondary', number: '+91 9598612059' }
                ]}
                subtext="Everyday, 8 AM - 10 PM"
              />
              <ContactChannel
                icon={Mail}
                label="Email"
                value="rahfreshmart@gmail.com"
                subtext="Response within 24 business hours"
              />
              <ContactChannel
                icon={MapPin}
                label="Location"
                value="Durganagar, Baskhari, Ambedkar Nagar, Uttar Pradesh"
                subtext="Visit our store for fresh stock"
              />
              <ContactChannel
                icon={Clock}
                label="Hours"
                value="7:00 AM - 9:00 PM"
                subtext="Open every day including holidays"
              />
            </div>

            {/* Trust Section */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 mt-8">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-6">
                Why Choose Us
              </h3>
              <div className="space-y-5">
                <TrustStat
                  icon={Users}
                  number="15K+"
                  label="Satisfied Customers"
                  delay={0}
                />
                <TrustStat
                  icon={Shield}
                  number="100%"
                  label="Quality Guaranteed"
                  delay={0.1}
                />
                <TrustStat
                  icon={Truck}
                  number="Fast"
                  label="Same-day Delivery"
                  delay={0.2}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-600 text-sm mb-8">Fill out the form below and we'll respond as soon as possible.</p>

              {isSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-emerald-100 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-8 h-8 text-emerald-700" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully</h3>
                  <p className="text-slate-600 mt-2 text-sm">
                    Thank you for reaching out. Our team will review your message and contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormInput
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required={false}
                  />

                  <FormInput
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    required={false}
                  />

                  <motion.div
                    className="space-y-2.5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-1">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                        Message
                      </label>
                      <span className="text-red-500 text-sm">*</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 bg-white border-2 transition-all duration-300 focus:outline-none resize-none ${
                        errors.message
                          ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                          : 'border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'
                      } rounded-lg placeholder-slate-400 text-slate-900 text-sm font-normal`}
                      placeholder="Describe your inquiry or question in detail..."
                    />
                    {errors.message && (
                      <motion.div
                        className="flex items-center gap-2 text-sm text-red-600 font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 px-6 bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-800 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2.5 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Additional Information Banner */}
        <motion.div
          className="bg-white border border-slate-200 rounded-lg p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Fast Delivery</h3>
                <p className="text-slate-600 text-sm">Same-day delivery available for orders before 2 PM in your area.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Secure & Safe</h3>
                <p className="text-slate-600 text-sm">Your personal information is protected with industry-standard security measures.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex-shrink-0">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">Expert Support</h3>
                <p className="text-slate-600 text-sm">Our knowledgeable team is always ready to help answer your questions.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          className="text-center border-t border-slate-200 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-700 font-medium mb-4">
            Prefer to call us directly?
          </p>
          <a
            href="tel:+919616350866"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            +91 9616350866
          </a>
        </motion.div>
      </div>
    </div>
  );
}
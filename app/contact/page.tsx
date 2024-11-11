'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Nav from "../components/nav";
import Character from '../components/three/character';
import {BackgroundDots, FloatingParticles} from "../portfolio/BackgroundElements";
import {ScrollProgress} from "../portfolio/ScrollElements";
import {SocialLinks} from "../portfolio/SocialLinks";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b text-white from-[#001F3F] to-[#002C4F] pt-4 relative min-h-screen">
      <BackgroundDots />
      <FloatingParticles />
      <Nav />
      <ScrollProgress />
      <SocialLinks />

      {/* Character with smooth animation */}
      <motion.div
        className="z-0 sm:top-1/2 sm:left-1/2 md:top-20 md:left-[30%] absolute"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Character />
      </motion.div>

      <div className="flex items-center justify-center max-w-6xl w-full mx-auto relative z-10 min-h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10 text-white"
          >
            <p className="text-sm text-white/90 font-normal tracking-widest">
              Experience the Impact of Collaboration
            </p>
            <h1 className="text-4xl md:text-5xl text-white font-normal">Let's Connect!</h1>
            <div className="space-y-8 ">
              {[{ href: "https://github.com/saifullahemo", Icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/saifullahemo", Icon: FaLinkedin, label: "LinkedIn" },
                { href: "mailto:saifullahemo@gmail.com", Icon: FaEnvelope, label: "Email" }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-4 text-white/90 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <link.Icon size={24} />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            {(['name', 'email', 'message'] as const).map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              >
                <label htmlFor={field} className="sr-only text-xs">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field !== 'message' ? (
                  <input
                    type={field}
                    id={field}
                    placeholder={field === 'name' ? "Full Name" : "example@gmail.com"}
                    className="w-full p-4 text-xs rounded-lg bg-gray-200/10 text-gray-200 focus:outline-none"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                ) : (
                  <textarea
                    id={field}
                    placeholder="Message"
                    rows={4}
                    className="w-full p-4 rounded-lg text-xs bg-gray-200/10 text-gray-200 focus:outline-none"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="w-full py-3 rounded-lg bg-sky-950/60 text-white/80 font-medium hover:bg-sky-900/60"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status && <p className="text-white/80 mt-4">{status}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { contactAPI } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await contactAPI.submit(formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We'd love to hear from you. Our team is always here to help.
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: Mail, title: 'Email', content: 'contact@example.com' },
            { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
            { icon: MapPin, title: 'Office', content: '123 Innovation Street, Tech City' }
          ].map((item, index) => (
            <FadeIn key={item.title} direction="up" delay={index * 100}>
              <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-500">{item.content}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              {status && (
                <div className={`p-4 rounded-md ${status.includes('success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {status}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all hover:scale-105"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { testimonialAPI } from '../services/api';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await testimonialAPI.getAll();
        setTestimonials(response.data);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by industry leaders
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </FadeIn>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} direction="up" delay={index * 200}>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg text-gray-600">{testimonial.quote}</p>
                  <div className="mt-6 flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
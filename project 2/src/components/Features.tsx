import React from 'react';
import { Shield, Zap, Heart, Trophy } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

const features = [
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security protocols to protect your sensitive data.',
    icon: Shield,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance for seamless user experience.',
    icon: Zap,
  },
  {
    name: 'Built with Care',
    description: '24/7 support from our dedicated customer success team.',
    icon: Heart,
  },
  {
    name: 'Industry Leader',
    description: 'Recognized as a top provider in our industry.',
    icon: Trophy,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our platform provides all the tools and features you need to take your business to the next level.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FadeIn key={feature.name} direction="up" delay={index * 100}>
                <div className="relative">
                  <div className="absolute h-12 w-12 rounded-md bg-indigo-500 flex items-center justify-center transform transition-transform hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
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
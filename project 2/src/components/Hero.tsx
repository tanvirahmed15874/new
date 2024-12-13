import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 min-h-[calc(100vh-4rem)]">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <FadeIn direction="down">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform your business</span>
                  <span className="block text-indigo-600">with innovation</span>
                </h1>
              </FadeIn>
              
              <FadeIn direction="up" delay={200}>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Empower your team with cutting-edge solutions that drive growth and efficiency. Join thousands of successful businesses that trust our platform.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={400}>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transform transition-transform hover:scale-105">
                      Get started
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transform transition-transform hover:scale-105">
                      Live demo
                      <Rocket className="ml-2" size={20} />
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
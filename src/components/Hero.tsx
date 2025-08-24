import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl animate-bounce">
            M
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Mailaralingappa
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Data Scientist | Machine Learning Engineer | AI Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about building predictive models, processing large datasets, and deploying AI solutions for real-world impact. 
              Skilled in Python, SQL, TensorFlow, and modern data pipelines—ready to drive data-driven decisions in Bengaluru’s tech ecosystem.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToNext()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <a
              href="mailto:mailarymeti@gmail.com"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Mailary982"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/mailary-meti-b62911261"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="mailto:mailarymeti@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

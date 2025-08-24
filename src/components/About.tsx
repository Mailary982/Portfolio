import React from 'react';
import { Code, Cpu, Database, Zap, BookOpen, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a driven B.Tech graduate passionate about solving real-world problems with code, data, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I recently completed my B.Tech in Computer Science and am actively preparing for opportunities in Artificial Intelligence, Machine Learning, and Full-Stack Development—especially in Bengaluru's vibrant tech ecosystem.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My technical toolkit includes Python, SQL, JavaScript, TensorFlow, Spark, and modern web frameworks. I'm especially interested in NLP, big data pipelines, and deploying ML models that make an impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey from rural Karnataka to tech has taught me resilience, curiosity, and the value of community. I believe in learning by building—whether it's a resume-screening tool, a plant disease detection app, or a dynamic portfolio website with React and Tailwind.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Quick Learner
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                Problem Solver (Code & LeetCode!)
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Clean, Maintainable Code</h3>
              </div>
              <p className="text-gray-600">
                I write Python and JavaScript that's easy to read, test, and extend—following best practices and modern conventions.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl border border-teal-200">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI/ML & Data Pipelines</h3>
              </div>
              <p className="text-gray-600">
                I build and deploy machine learning models—from data collection and preprocessing to training, evaluation, and production APIs.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Big Data & Databases</h3>
              </div>
              <p className="text-gray-600">
                Experienced with SQL, Spark, and data engineering for scalable applications. I optimize queries and design schemas for performance.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Deployment & DevOps</h3>
              </div>
              <p className="text-gray-600">
                I containerize apps with Docker, use Git/GitHub for version control, and deploy models on platforms like Hugging Face Spaces and Google Colab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

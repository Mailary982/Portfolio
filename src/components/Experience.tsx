import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science and Analytics Intern',
      company: 'Zidio Development',
      location: 'Bangalore, India',
      period: 'March 2025 – June 2025',
      description: [
        'Built machine learning features using scikit-learn and TensorFlow, achieving 15% improved inference latency.',
        'Developed Python-based data pipelines with Pandas and Spark, reducing processing time by 85%.',
        'Collaborated in cross-functional agile teams, participated in project planning, and delivered data-driven solutions to client challenges.',
      ],
      technologies: [
        'Python',
        'scikit-learn',
        'TensorFlow',
        'Pandas',
        'Spark',
        'Data Pipelines',
        'Agile Methodologies',
        'Statistical Analysis',
      ],
      color: 'teal',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        dot: 'bg-blue-600',
        text: 'text-blue-600',
        tag: 'bg-blue-100 text-blue-800',
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        dot: 'bg-teal-600',
        text: 'text-teal-600',
        tag: 'bg-teal-100 text-teal-800',
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        dot: 'bg-orange-600',
        text: 'text-orange-600',
        tag: 'bg-orange-100 text-orange-800',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My hands-on experience deploying machine learning features, building scalable data pipelines, and delivering data-driven solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 ${colors.dot} rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-sm z-10`}></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`p-6 ${colors.bg} ${colors.border} border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mt-1 sm:mt-0">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600 flex items-start">
                            <span className="text-gray-400 mr-2 mt-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 ${colors.tag} rounded-full text-xs font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'PES University',
      location: 'Bangalore, India',
      period: 'Dec 2021 – May 2025',
      description: 'Relevant Coursework: Data Structures, Object-Oriented Programming with Python, Machine Learning, Deep Learning, Data Analytics',
      // Add achievements and extra-curriculars if you have any
    },
  ];

  const certifications = [
    {
      name: 'Problem Solving (Intermediate) – HackerRank',
      issuer: 'HackerRank',
      date: '',
      details: 'Completed tasks focused on data structures, including arrays, sorting, and dynamic programming.',
      link: 'https://www.hackerrank.com/certificates/c506c2b17a28',
    },
    // Add more certifications if you have them
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and the professional credentials that shape my technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                    <div className="flex items-center text-gray-500 text-sm mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-semibold">{edu.school}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  {/* Add achievements, scholarships, or awards here if you have them */}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </h4>
                    <span className="text-sm text-teal-600 font-medium bg-teal-200 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </div>
                  {cert.details && (
                    <p className="text-gray-600 leading-relaxed">{cert.details}</p>
                  )}
                </div>
              ))}
            </div>
            {/* Learning Philosophy */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Continuous Learning</h4>
              <p className="text-gray-600">
                I believe in lifelong learning and staying current with emerging technologies.
                I regularly complete online courses, participate in hackathons, and actively contribute to
                open-source projects to enhance my skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

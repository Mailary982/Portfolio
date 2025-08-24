import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'SQL', 'C'],
      color: 'blue',
    },
    {
      title: 'ML & NLP',
      skills: ['scikit-learn', 'TensorFlow', 'OpenCV', 'spaCy', 'NLTK', 'Hugging Face'],
      color: 'teal',
    },
    {
      title: 'Big Data',
      skills: ['Hadoop', 'Spark'],
      color: 'orange',
    },
    {
      title: 'Data',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      color: 'purple',
    },
    {
      title: 'Web & APIs',
      skills: ['BeautifulSoup', 'Selenium', 'Requests', 'FastAPI', 'Flask'],
      color: 'indigo',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes'],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        text: 'text-teal-900',
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-900',
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-900',
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        text: 'text-indigo-900',
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-900',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the tools and technologies I use to extract insights, build models, and power data-driven decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`p-6 ${colors.bg} ${colors.border} border rounded-2xl shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-4 text-center`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white rounded-md text-sm font-medium border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

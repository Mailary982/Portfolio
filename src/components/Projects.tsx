import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plant Leaf Disease Detection',
      description: 'Built a CNN using TensorFlow/Keras on 10,000+ images, achieving 92% accuracy. Images processed with TensorFlow and OpenCV for a 25% reduction in misclassification. Exported model and deployed inference API via FastAPI.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Deep Learning', 'FastAPI'],
      github: 'https://github.com/Manojsolapure/Plant-leaf-Disease-Detection-in-Chilli-Tomato-And-Potato-Using-Deep-learning',
      demo: '',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/f610558b-cd7b-418e-8e92-3892e1a9bb76.png',
      featured: true,
    },
    {
      title: 'News Summarization and Text-to-Speech Application',
      description: 'Developed a web tool to extract, summarize, and analyze sentiment of company news, integrating web scraping, sentiment analysis, and Hindi TTS. Demo deployed with Streamlit.',
      technologies: ['Python', 'NLP', 'Web Scraping', 'Sentiment Analysis', 'TTS', 'Streamlit'],
      github: '',
      demo: 'https://huggingface.co/spaces/Mailary/News_Summarization_and_Text_to_Speech_Application',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/cdn/palmai/img/multimodal/nlp-article-summarization.jpeg',
      featured: true,
    },
    {
      title: 'Resume Screener',
      description: 'Extracted skills and experience from PDF resumes, implemented text classification to match candidates to job descriptions, and visualized results for recruitment decisions.',
      technologies: ['Python', 'NLTK', 'Text Classification', 'PDF Processing', 'Data Visualization'],
      github: '',
      demo: 'https://huggingface.co/spaces/Mailary/resume-screener-web',
      image: 'https://user-gen-media-assets.s3.amazonaws.com/images/pexels-photo-756744.jpeg',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI/ML, NLP, and data engineering projects built end-to-end—from data collection to deployment.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Github className="h-5 w-5 mr-1" />
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 mr-1" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group border border-gray-100"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-32">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.demo && (
                      <div className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-1 text-blue-600" />
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

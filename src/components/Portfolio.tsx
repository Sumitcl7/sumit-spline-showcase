
const Portfolio = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Own Redis Server",
      description: "Built a high-performance in-memory key-value store from scratch using Python, implementing core Redis commands with optimized memory management and performance-focused architecture.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["Python", "Redis", "Memory Management", "Performance Optimization"],
      category: "Backend Development",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Automation Web Application",
      description: "Developed a comprehensive cloud-based SaaS platform featuring modern authentication, file management, payment processing, and serverless deployment architecture.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "Clerk Auth", "Stripe", "NeonDB", "Uploadcare"],
      category: "Full Stack SaaS",
      featured: true
    },
    {
      id: 3,
      title: "Hybrid Cloud Networking Lab",
      description: "Engineered complex hybrid cloud environments with secure VPN connections, demonstrating expertise in cloud networking and infrastructure integration.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["GNS3", "AWS", "GCP", "VPN", "Network Security"],
      category: "Cloud Networking",
      featured: true
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 4,
      title: "Atlassian Pulse Clone",
      description: "Recreated a developer productivity dashboard with advanced data visualization and analytics capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "Dashboard", "Data Visualization", "Analytics"],
      category: "Data Analytics",
      featured: false
    },
    {
      id: 5,
      title: "Network Automation using Python & Ansible",
      description: "Automated network device configurations with Python scripts and Ansible playbooks for reliable infrastructure provisioning.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tech: ["Python", "Ansible", "YAML", "Network Automation"],
      category: "DevOps Automation",
      featured: false
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions in cloud computing, DevOps automation, and scalable system architecture
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 text-sm flex items-center group">
                  View Project 
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
            <p className="text-gray-400 mb-6">Explore more projects and see how I can contribute to your next big idea</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-purple-500 text-purple-400 px-6 py-3 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

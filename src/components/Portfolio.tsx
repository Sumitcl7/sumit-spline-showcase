
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Salesforce Solution Intern",
      description: "Gained hands-on experience with Salesforce CRM, including Sales Cloud and Service Cloud. Built custom objects, dashboards, and workflows to solve real-world business problems.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tech: ["Salesforce", "CRM", "Process Builder", "Flow"],
      category: "Enterprise Solutions",
      duration: "03/25 - Present",
      company: "Salesforce Solution Intern"
    },
    {
      id: 2,
      title: "Cloud Computing & Networking",
      description: "Cisco Virtual Internship Program - Acquired hands-on understanding of cloud infrastructure, deployment models, and DevOps pipelines through practical implementation.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tech: ["AWS", "GCP", "Cisco Packet Tracer", "DevOps"],
      category: "Cloud Infrastructure",
      duration: "05/2025 - Present (Remote)",
      company: "Cisco Virtual Internship"
    },
    {
      id: 3,
      title: "Own Redis Server",
      description: "Developed an in-memory key-value store mimicking Redis functionalities using Python. Implemented core Redis commands (GET, SET, EXPIRE, DEL) with performance-focused design.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["Python", "Redis", "Memory Management", "Performance Optimization"],
      category: "Backend Development"
    },
    {
      id: 4,
      title: "SaaS Automation Web Application",
      description: "Developed a cloud-based SaaS platform with Clerk Auth, Uploadcare, NeonDB, Stripe, and Ngrok. Built using Next.js and deployed with modern serverless tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "Clerk Auth", "Stripe", "NeonDB", "Uploadcare"],
      category: "Full Stack SaaS"
    },
    {
      id: 5,
      title: "Atlassian Pulse Clone",
      description: "Recreated a developer productivity dashboard inspired by Atlassian Pulse. Utilized fullstack development techniques for data visualization and reporting logic.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "Dashboard", "Data Visualization", "Analytics"],
      category: "Data Analytics"
    },
    {
      id: 6,
      title: "Hybrid Cloud Networking Lab",
      description: "Simulated hybrid cloud environments using GNS3 and AWS/GCP. Configured VPNs and routing to connect on-premises infrastructure to the cloud securely.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["GNS3", "AWS", "GCP", "VPN", "Network Security"],
      category: "Cloud Networking"
    },
    {
      id: 7,
      title: "Network Automation using Python & Ansible",
      description: "Automated switch and router configurations across multiple devices. Used YAML playbooks and Python scripts to ensure reliable infrastructure provisioning.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tech: ["Python", "Ansible", "YAML", "Network Automation"],
      category: "DevOps Automation"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my professional experience, projects, and technical accomplishments in cloud computing and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm text-purple-400">{project.category}</div>
                  {project.duration && (
                    <div className="text-xs text-gray-500">{project.duration}</div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                {project.company && (
                  <p className="text-sm text-gray-400 mb-2 font-medium">{project.company}</p>
                )}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Skills Summary</h3>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Cloud Platforms</h4>
                <p className="text-sm text-gray-400">AWS, GCP</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Infrastructure</h4>
                <p className="text-sm text-gray-400">Docker, Kubernetes, Jenkins, Ansible</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Languages</h4>
                <p className="text-sm text-gray-400">Python, Java, C++, Rust, SQL</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Networking</h4>
                <p className="text-sm text-gray-400">CCNA, Network Automation, VPN, Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

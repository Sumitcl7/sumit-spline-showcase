
const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud solutions on AWS, GCP, and Azure with infrastructure as code",
      icon: "☁️",
      features: ["AWS/GCP/Azure", "Infrastructure as Code", "Auto Scaling", "Cost Optimization"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development workflows with CI/CD pipelines and automation tools",
      icon: "⚙️",
      features: ["Jenkins/GitLab CI", "Docker/Kubernetes", "Ansible/Terraform", "Pipeline Automation"]
    },
    {
      title: "Network Engineering",
      description: "Design and implement robust network solutions with security best practices",
      icon: "🔗",
      features: ["Network Design", "VPN/Security", "Load Balancing", "Performance Monitoring"]
    },
    {
      title: "Backend Development",
      description: "Build scalable backend systems and APIs with modern technologies",
      icon: "💻",
      features: ["Python/Node.js", "Database Design", "API Development", "System Architecture"]
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive cloud & DevOps solutions to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 hover:bg-gray-800/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors duration-300"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h3>
            <p className="text-gray-400 mb-6">Let's discuss how I can help optimize your cloud and DevOps processes</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

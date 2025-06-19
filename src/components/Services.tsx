
const Services = () => {
  const services = [
    {
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud solutions on AWS, GCP, and Azure",
      icon: "☁️",
      features: ["AWS/GCP/Azure", "Infrastructure as Code", "Auto Scaling", "Cost Optimization"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development workflows with CI/CD and automation tools",
      icon: "⚙️",
      features: ["Jenkins/GitLab CI", "Docker/Kubernetes", "Ansible/Terraform", "Pipeline Automation"]
    },
    {
      title: "Network Engineering",
      description: "Design and implement robust network solutions and security",
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
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cloud & DevOps solutions to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

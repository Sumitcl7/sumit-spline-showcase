
import { Suspense, lazy, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ProjectModal from './ProjectModal';
import ContactModal from './ContactModal';

// Lazy load Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Own Redis Server",
      description: "Developed an in-memory key-value store mimicking Redis functionalities using Python. Implemented core Redis commands (GET, SET, EXPIRE, DEL) with performance-focused design.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["Python", "Redis", "Memory Management", "Performance Optimization"],
      category: "Backend Development",
      githubUrl: "https://github.com/sumit-kumar"
    },
    {
      id: 2,
      title: "SaaS Automation Web Application",
      description: "Developed a cloud-based SaaS platform with Clerk Auth, Uploadcare, NeonDB, Stripe, and Ngrok. Built using Next.js and deployed with modern serverless tools.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "Clerk Auth", "Stripe", "NeonDB", "Uploadcare"],
      category: "Full Stack SaaS",
      githubUrl: "https://github.com/sumit-kumar"
    },
    {
      id: 3,
      title: "Atlassian Pulse Clone",
      description: "Recreated a developer productivity dashboard inspired by Atlassian Pulse. Utilized fullstack development techniques for data visualization and reporting logic.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["React", "Dashboard", "Data Visualization", "Analytics"],
      category: "Data Analytics",
      githubUrl: "https://github.com/sumit-kumar"
    },
    {
      id: 4,
      title: "Hybrid Cloud Networking Lab",
      description: "Simulated hybrid cloud environments using GNS3 and AWS/GCP. Configured VPNs and routing to connect on-premises infrastructure to the cloud securely.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["GNS3", "AWS", "GCP", "VPN", "Network Security"],
      category: "Cloud Networking",
      githubUrl: "https://github.com/sumit-kumar"
    },
    {
      id: 5,
      title: "Network Automation using Python & Ansible",
      description: "Automated switch and router configurations across multiple devices. Used YAML playbooks and Python scripts to ensure reliable infrastructure provisioning.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tech: ["Python", "Ansible", "YAML", "Network Automation"],
      category: "DevOps Automation",
      githubUrl: "https://github.com/sumit-kumar"
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Spline 3D Animation Background */}
        <div className="flex-1 w-full h-full min-h-[70vh]">
          <Suspense 
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
              </div>
            }
          >
            <Spline 
              scene="https://prod.spline.design/vduyrmluLdhCYpQ3/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </Suspense>
        </div>

        {/* Content Overlay - Buttons below the 3D scene */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => setShowProjectModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Modals */}
      <ProjectModal 
        isOpen={showProjectModal} 
        onClose={() => setShowProjectModal(false)} 
        projects={projects}
      />
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </>
  );
};

export default Hero;

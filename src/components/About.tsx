
const About = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Aspiring Cloud and DevOps Engineer with a strong foundation in cloud computing, backend development, and infrastructure automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about developing scalable, secure, and efficient solutions that bridge user needs with 
              technological innovations. With hands-on experience in cloud platforms, infrastructure automation, and 
              building fullstack applications, I bring a comprehensive approach to modern software development.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Core Expertise</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h5 className="text-purple-400 font-semibold mb-2">Cloud Platforms</h5>
                  <p className="text-sm text-gray-400">AWS, GCP - Infrastructure & Services</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h5 className="text-purple-400 font-semibold mb-2">DevOps & Automation</h5>
                  <p className="text-sm text-gray-400">Docker, Kubernetes, Jenkins, Ansible, CI/CD Pipelines</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h5 className="text-purple-400 font-semibold mb-2">Programming</h5>
                  <p className="text-sm text-gray-400">Python, Java, C++, Rust, SQL, HTML, CSS, JavaScript</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h5 className="text-purple-400 font-semibold mb-2">Web Technologies</h5>
                  <p className="text-sm text-gray-400">MERN Stack, REST APIs, Git, Linux, Bash</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-purple-400 mb-3">Certifications</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">AWS Certified Cloud Practitioner</span>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">AWS Academy Cloud Security Foundations</span>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">AWS Academy Cloud Architecting</span>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">AWS Academy Data Engineering</span>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Cisco Certified Network Associate (CCNA)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SK</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Sumit Kumar</h4>
              <p className="text-purple-100 mb-4">Cloud & DevOps Engineer</p>
              <div className="text-sm text-purple-100 space-y-1">
                <p>📧 ksumit7017@gmail.com</p>
                <p>📱 8533808304</p>
                <p>📍 Noida, Uttar Pradesh</p>
                <p>💼 linkedin.com/in/sumit-kumar-2bb94428a</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-medium">B.Tech in Computer Science and Engineering</h5>
                  <p className="text-sm text-gray-400">Bennett University (2022 - Present)</p>
                  <p className="text-sm text-purple-400">CGPA: 7.89</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-400 mb-4">Passions</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-white font-medium">Cloud Innovation</h5>
                  <p className="text-sm text-gray-400">Excited about advancing cloud-native technologies for scalable, secure computing.</p>
                </div>
                <div>
                  <h5 className="text-white font-medium">DevOps Excellence</h5>
                  <p className="text-sm text-gray-400">Dedicated to improving CI/CD pipelines and reliable infrastructure delivery.</p>
                </div>
                <div>
                  <h5 className="text-white font-medium">Open Source & Learning</h5>
                  <p className="text-sm text-gray-400">Engaged in hands-on learning, open-source contributions, and knowledge sharing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

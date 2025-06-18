
const About = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who believes in the power of code to create beautiful, functional experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working on diverse projects 
              ranging from startups to enterprise applications. My approach combines technical expertise with creative 
              problem-solving to deliver solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in React, Node.js, and modern web technologies, always staying current with the latest 
              industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-gray-400">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-purple-400 font-semibold mb-2">Backend</h4>
                <p className="text-sm text-gray-400">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SK</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Sumit Kumar</h4>
              <p className="text-purple-100">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

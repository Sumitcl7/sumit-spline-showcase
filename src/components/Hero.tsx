
import { Suspense, lazy } from 'react';
import { ArrowDown } from 'lucide-react';

// Lazy load Spline component for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Animation Background */}
      <div className="absolute inset-0 w-full h-full">
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

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-fade-in">
          Sumit Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer & Creative Technologist
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Where Code Meets Creativity. I craft digital experiences that blend technical excellence with innovative design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300">
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;

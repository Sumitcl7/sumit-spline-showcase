
import { X, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 rounded-2xl p-8 max-w-2xl mx-4 border border-purple-500/20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="/lovable-uploads/a04bf6ed-837e-4b23-b417-e3c64f2f36ff.png" 
                alt="Sumit Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sumit Kumar</h3>
            <p className="text-purple-400">Cloud & DevOps Engineer</p>
          </div>

          <div className="grid gap-4">
            <a 
              href="mailto:krsumits7017@gmail.com"
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400">krsumits7017@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+918538908804"
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8538908804</p>
              </div>
            </a>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400">Noida, Uttar Pradesh, India</p>
                <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
              </div>
            </div>
            
            <a 
              href="https://linkedin.com/in/sumit-kumar-2bb94428a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">LinkedIn</h4>
                <p className="text-gray-400">sumit-kumar-2bb94428a</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">Ready to collaborate? Let's build something amazing together!</p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Download Resume
              </button>
              <button className="border border-purple-500 text-purple-400 px-6 py-2 rounded-lg font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

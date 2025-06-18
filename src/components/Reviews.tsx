
const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "Sumit delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      content: "Working with Sumit was a game-changer for our startup. He understood our vision and translated it into a beautiful, functional web application.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      content: "The website Sumit created for us has significantly improved our online presence. His creative approach and technical skills are outstanding.",
      rating: 5,
      avatar: "ED"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Reviews
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 italic">
                "{review.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{review.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

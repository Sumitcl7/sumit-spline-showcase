
const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging trends and technologies shaping the web development landscape",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for architecting large-scale React applications that maintain performance",
      date: "Dec 10, 2023",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop"
    },
    {
      title: "Design Systems: A Developer's Guide",
      excerpt: "How to create and maintain consistent design systems that bridge design and development",
      date: "Dec 5, 2023",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Blogs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on web development and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

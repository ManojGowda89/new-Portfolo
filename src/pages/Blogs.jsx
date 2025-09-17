import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const SkeletonCard = () => (
  <div className="border rounded-lg overflow-hidden animate-pulse shadow-md">
    <div className="w-full h-48 sm:h-64 md:h-72 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-6 bg-gray-300 mb-2 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded w-full"></div>
      <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
    </div>
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://api-email.manojgowda.in/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Random blog for SEO title/description
  const randomBlog = blogs.length > 0 ? blogs[Math.floor(Math.random() * blogs.length)] : null;

  const description = randomBlog
    ? randomBlog.content.slice(0, 160) + "..."
    : "Read blogs by Manoj Gowda on full-stack development, DevOps, IoT, and Web3.";

  const keywords = randomBlog
    ? randomBlog.title
        .split(" ")
        .concat(randomBlog.content.split(" ").slice(0, 15))
        .join(", ")
    : "Manoj Gowda, Blogs, Full Stack Developer, MERN, DevOps, IoT, Web3";

  const canonicalUrl = "https://manojgowda.in/blogs";

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 max-w-6xl">
      <Helmet>
        <title>{randomBlog ? randomBlog.title : "Blogs"} | Manoj Gowda</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Manoj Gowda" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={randomBlog ? randomBlog.title : "Blogs"} />
        <meta property="og:description" content={description} />
        {randomBlog && <meta property="og:image" content={randomBlog.imageUrl} />}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={randomBlog ? randomBlog.title : "Blogs"} />
        <meta name="twitter:description" content={description} />
        {randomBlog && <meta name="twitter:image" content={randomBlog.imageUrl} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">
        📝 Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : blogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="card border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 bg-white"
              >
                <div className="w-full h-48 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {blog.title}
                  </h2>
                  <p className="text-gray-700 mb-2">
                    {blog.content.slice(0, 100)}...
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Read More
                  </button>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Blogs;

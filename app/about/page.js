export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 sm:px-12 lg:px-20 py-10 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
        Hi, I’m Van Nguyen — a product developer and designer passionate about building meaningful,
        thoughtful digital experiences. I enjoy working at the intersection of technology, design, and storytelling.
      </p>

      <p className="text-gray-700 text-lg max-w-3xl mt-6 leading-relaxed">
        I’m currently majoring in Cognitive Science at UC San Diego, with a specialization in Machine Learning & Neural Computation, 
        and a minor in Business Analytics. I’m especially interested in applying data science to health and social impact projects.
      </p>

      <p className="text-gray-700 text-lg max-w-3xl mt-6 leading-relaxed">
        Outside of school, I like going to the zoo to see tigers, I also run a small vintage toy business.
      </p>

      <img
        src="/email.jpg"
        alt="Van Nguyen"
        className="mt-10 w-64 rounded-xl shadow-lg"
      />
    </main>
  );
}

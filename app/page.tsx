// For Next.js App Router (app/page.tsx)
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-gray-800">
      <nav className="w-full max-w-4xl flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-6">
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
        </div>
      </nav>

      <section className="text-center mt-10">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Van</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          I'm a passionate developer and designer exploring the intersection of technology and creativity.  
          Welcome to my space where I showcase my work, skills, and ideas.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="/projects"
            className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-8 sm:px-12 lg:px-20 py-10 bg-white text-black">
      <nav className="w-full max-w-6xl flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Van Nguyen</h1>
        <div className="space-x-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
        </div>
      </nav>

      <section className="text-center max-w-3xl w-full">
        <img
          src="/IMG_1711.jpeg"
          alt="Tiger"
          className="mt-10 w-80 h-auto shadow mx-auto"
        />

        <h2 className="text-4xl font-bold mb-4 mt-6">Hi, I'm Van</h2>
        <p className="text-lg mb-6">
          I'm a tiger lover, a product developer and designer exploring the intersection of technology and creativity.  
          Welcome to my portfolio!
        </p>

        <div className="mt-6 space-x-4">
          <a
            href="/projects"
            className="px-6 py-2 bg-black text-white rounded-xl border border-black hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="px-6 py-2 border border-black text-black rounded-xl hover:bg-black hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}

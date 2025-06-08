export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-8 sm:px-12 lg:px-20 py-10 bg-white text-black">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <section className="space-y-12">
        <div className="border-b pb-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src="/mirror.jpg"
              alt="Mirror Mirror screenshot"
              className="w-full md:w-1/3 shadow"
            />
            <div>
              <h2 className="text-2xl font-semibold">Mirror Mirror</h2>
              <p className="text-gray-700 mt-2 mb-4">
                An interactive webcam project that translates the user’s image into Old Vietnamese characters,
                exploring identity and connection through technology. Created using p5.js and OCR.
              </p>
              <a
                href="https://jznghivan.github.io/mirror/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

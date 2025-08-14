export default function ProjectsLoading() {
  return (
    <main className="section-spacing min-h-screen p-8 text-black">
      <div className="p-4">
        {/* Navbar placeholder */}
        <div className="h-16 bg-black/80 rounded-3xl animate-pulse" />
      </div>

      <section className="relative bg-white rounded-xl shadow-sm p-6 mt-8">
        <div className="space-y-4">
          {/* Title placeholders */}
          <div className="h-4 w-24 bg-green-200 rounded animate-pulse" />
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />

          {/* Project cards grid placeholder */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="aspect-video bg-gray-100 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

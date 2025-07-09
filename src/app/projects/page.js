// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1...",
    image: "/project1.jpg",
    link: "https://www.example.com/project1",
    technologies: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2...",
    image: "/project2.jpg",
    link: "https://www.example.com/project2",
    technologies: ["Next.js", "Firebase", "GraphQL"],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/10 to-[var(--background)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[var(--primary)] mb-4 tracking-tight">
            My Projects
          </h1>
          <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
            Explore a curated list of my latest and greatest development work.
          </p>
        </section>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/70 dark:bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={project.link} passHref>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[var(--secondary)] mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block text-[var(--primary)] hover:text-[var(--accent)] font-medium transition-colors">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

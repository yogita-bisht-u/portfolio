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
	// Add more projects here
];

export default function Projects() {
	return (
		<main className="bg-gray-100 py-12">
			<div className="container mx-auto px-4">
				<section className="mb-12 text-center">
					<h1 className="text-3xl font-bold text-gray-800 mb-4">
						My Projects
					</h1>
					<p className="text-gray-600 leading-relaxed">
						A showcase of my latest web development projects.
					</p>
				</section>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<Link href={project.link} passHref>
								<div>
									<Image
										src={project.image}
										alt={project.title}
										width={600}
										height={400}
										className="object-cover w-full h-64"
									/>
									<div className="p-6">
										<h2 className="text-xl font-semibold text-gray-800 mb-2">
											{project.title}
										</h2>
										<p className="text-gray-700 mb-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.technologies &&
												project.technologies.map((tech) => (
													<span
														key={tech}
														className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
													>
														{tech}
													</span>
												))}
										</div>
										<span className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
											View Project
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



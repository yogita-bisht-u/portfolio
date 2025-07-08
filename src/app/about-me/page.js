import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="md:flex bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="md:w-1/3 relative">
            <Image
              src="/image.jpeg"
              alt="Yogita Bisht"
              width={400}
              height={500}
              className="object-cover rounded-tl-3xl rounded-bl-3xl"
            />
          </div>
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Yogita Bisht
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A passionate Full Stack Developer Intern who enjoys crafting seamless
              web solutions. I build modern interfaces using tools like React,
              Tailwind and handle backend logic with PHP, Node.js. I value clean
              code, performance, and user experience.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "Bootstrap",
                  "PHP",
                  "WordPress",
                  "React",
                  "Node.js",
                  "JavaScript",
                  "MySQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-200 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
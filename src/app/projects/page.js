import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to Our projects
        </h1>
        <p className="text-gray-700 leading-relaxed text-center">
          This page provides information about my projects
        </p>
      </section>
    </main>
  );
}


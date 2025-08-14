import React, { Suspense } from "react";
import { mainprojects } from "../projects/Util/MainProjectsData";
import MainProjectCard from "../projects/Util/MainProjectsCard";
import Navbar from "@/components/navigationbar/Navbar";
import Footer from "@/components/footer/Footer";
import Loading from "./loading";
// Dynamically import the loading component for better performance

// Mark the page as dynamic to enable Suspense
export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="section-spacing min-h-screen p-8 text-black">
        <div className="p-4">
          <Navbar />
        </div>
        <section
          id="projectsection"
          className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing"
        >
          <div className="relative z-10">
            <p className="text-green-600 font-semibold">• Projects</p>
            <h2 className="text-3xl font-bold mb-6">Some of My Work</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {mainprojects.map((project, idx) => (
                <MainProjectCard key={idx} mainprojects={project} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </Suspense>
  );
}

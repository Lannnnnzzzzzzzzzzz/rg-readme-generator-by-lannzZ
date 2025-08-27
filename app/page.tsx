"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ReadmeForm from "@/components/ReadmeForm";
import Preview from "@/components/Preview";
import Actions from "@/components/Actions";

export default function Home() {
  const [readme, setReadme] = useState("");

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <ReadmeForm onGenerate={setReadme} />
        {readme && (
          <>
            <Preview content={readme} />
            <Actions content={readme} />
          </>
        )}
      </div>
      <footer className="mt-10 text-center text-sm text-gray-500">
        © 2025 lnnz
      </footer>
    </main>
  );
}

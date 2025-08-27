"use client";

import { useState } from "react";

export default function ReadmeForm({ onGenerate }: { onGenerate: (data: any) => void }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projectName,
        description,
        template: "default",
        badges: [],
        lang: "en",
        enhance: false,
      }),
    });
    const data = await res.json();
    onGenerate(data.readme);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <input
        type="text"
        placeholder="Project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <textarea
        placeholder="Describe your project..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Generate README
      </button>
    </form>
  );
}

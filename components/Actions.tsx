"use client";

export default function Actions({ content }: { content: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content);
    alert("README copied to clipboard!");
  };

  const downloadFile = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "README.md";
    link.click();
  };

  return (
    <div className="mt-4 flex gap-4">
      <button onClick={copyToClipboard} className="bg-green-500 text-white px-4 py-2 rounded-lg">
        Copy
      </button>
      <button onClick={downloadFile} className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
        Download
      </button>
    </div>
  );
}

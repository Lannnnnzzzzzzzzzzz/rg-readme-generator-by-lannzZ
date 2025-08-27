import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Preview({ content }: { content: string }) {
  return (
    <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">📄 Preview</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

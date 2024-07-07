import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col gap-2 font-mono text-sm">
        <Link className="text-white px-4 py-2 hover:bg-gray-600 border border-gray-600 rounded-xl" href="/onclick-move-object">OnClick Move Object</Link>
        <Link className="text-white px-4 py-2 hover:bg-gray-600 border border-gray-600 rounded-xl" href="/onload-text-change">OnLoad Text Change</Link>
        <Link className="text-white px-4 py-2 hover:bg-gray-600 border border-gray-600 rounded-xl" href="/onmousedown-open-modal">OnMouseDown Open Modal</Link>
        <Link className="text-white px-4 py-2 hover:bg-gray-600 border border-gray-600 rounded-xl" href="/onload-move-camera">OnLoad Move Camera</Link>
      </div>
    </main>
  );
}

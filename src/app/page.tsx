import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Welcome to My Next Docs</h1>
      <p>Learn Next.js concepts through practical examples.</p>
      <ul className="flex flex-col gap-8">
        <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/ssg">Static Site Generation (SSG)</Link></li>
        <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/ssr">Server-Side Rendering (SSR)</Link></li>
        <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/api/hello" target="_blank">API Route (Hello)</Link></li>
        <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/post/1">Dynamic Routing</Link></li>
        {/* <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/styles">CSS Modules</Link></li> */}
        <li><Link className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/deploy">Deploying to Vercel</Link></li>
      </ul>
    </div>
  );
}

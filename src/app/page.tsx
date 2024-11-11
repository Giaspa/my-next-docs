
export default function Home() {
  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Welcome to My Next Docs</h1>
      <p>Learn Next.js concepts through practical examples.</p>
      <ul className="flex flex-col gap-8">
        <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/ssg">Static Site Generation (SSG)</a></li>
        <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/ssr">Server-Side Rendering (SSR)</a></li>
        <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/api/hello" target="_blank">API Route (Hello)</a></li>
        <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/post/1">Dynamic Routing</a></li>
        {/* <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/styles">CSS Modules</a></li> */}
        <li><a className="px-4 py-2 bg-slate-900 rounded-lg hover:text-amber-500" href="/deploy">Deploying to Vercel</a></li>
      </ul>
    </div>
  );
}

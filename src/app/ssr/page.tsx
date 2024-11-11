//SERVER-SIDE RENDERING

import React from 'react';

// interface SSRProps {
//   message: string;
// }

const SSRExplanation: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Server-Side Rendering (SSR)</h1>
      <p>
        <strong>Cos&apos;è SSR?</strong> Server-Side Rendering è un metodo in cui il server genera una
        nuova pagina HTML per ogni richiesta. Questo garantisce che i dati mostrati siano sempre
        aggiornati.
      </p>
      <p>
        <strong>Perché usarlo?</strong> È utile per contenuti dinamici o personalizzati, come
        dashboard o pagine con dati che cambiano frequentemente.
      </p>
      <p>
        <strong>Come funziona in Next.js?</strong> Con la nuova <strong>app directory</strong>, puoi
        utilizzare direttamente il componente server-side per il rendering.
      </p>
      <pre className="bg-white text-black p-3 rounded-md">
        <code>
          {`export default async function Page() {\n  const data = await fetch('https://api.example.com');\n  return <div>{JSON.stringify(data)}</div>;\n}`}
        </code>
      </pre>
    </div>
  );
};

// Simula il fetch di dati dinamici
export default async function Page() {
  const message = `This page was rendered on ${new Date().toLocaleString()}`;

  return (
    <div>
      <SSRExplanation />
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
}

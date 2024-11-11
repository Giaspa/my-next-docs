//STATIC SITE GENERATION (SSG)

import React from "react";

const SSGExplanation: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Static Site Generation (SSG)</h1>
      <p>
        <strong>Cos'è SSG?</strong> Static Site Generation è un modo per
        generare pagine statiche al momento del build. Questo significa che il
        server costruisce le pagine in anticipo, rendendole velocissime da
        caricare quando un utente visita il sito.
      </p>

      <p>
        <strong>Perché usarlo?</strong> È super veloce, SEO-friendly e riduce il
        carico sul server. Perfetto per contenuti che cambiano raramente, come
        pagine di blog, documentazione o siti istituzionali.
      </p>

      <p>
        <strong>Come funziona in Next.js?</strong> In Next.js 13+, non servono
        più metodi specifici come <code>getStaticProps</code>. Puoi eseguire il
        fetch dei dati direttamente nel componente server-side. Ecco un esempio:
      </p>

      <pre className="bg-white text-black p-3 rounded-md">
        <code>
          {`async function fetchMessage() {
    return "This page was generated in advance!";
}

export default async function Page() {
    const message = await fetchMessage();
    
    return (
        <p>
            <strong>Message:</strong> 
            {message}
        </p>
    );
}`}
        </code>
      </pre>
      <p>
        Quando fai il build del progetto, questa funzione viene eseguita una
        sola volta, e il risultato viene salvato come una pagina HTML statica.
      </p>
    </div>
  );
};

// Simula il fetch di dati per generare la pagina statica
async function fetchMessage() {
  return "This page was generated in advance!";
}

export default async function Page() {
  const message = await fetchMessage();

  return (
    <div>
      <SSGExplanation />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </div>
    </div>
  );
}

import React from 'react';

const DeployPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Deploying to Vercel</h1>
      <p>
        <strong>Cos&apos;è Vercel?</strong> Vercel è una piattaforma che rende semplice fare il deploy delle
        tue applicazioni Next.js. Offre velocità, integrazione continua e supporto nativo per le
        funzionalità avanzate di Next.js.
      </p>
      <p>
        <strong>Come fare il deploy?</strong>
      </p>
      <ol className='list-disc ml-4'>
        <li>Registra un account su <a className="underline text-amber-500" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.</li>
        <li>Collega il tuo progetto GitHub al tuo account Vercel.</li>
        <li>Ogni push su GitHub avvierà automaticamente un nuovo deploy.</li>
      </ol>
      <p>
        Una volta completato il deploy, il tuo sito sarà accessibile da un URL fornito da Vercel.
      </p>
    </div>
  );
};

export default DeployPage;

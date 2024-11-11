"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const PostPage: React.FC = () => {
  const params = useParams();
  const { id } = params; // Ottieni il parametro dinamico 'id'

  return (
    <div className="flex flex-col gap-2 my-5 mx-auto max-w-xl">
      <h1 className="text-3xl">Dynamic Routing</h1>
      <p>
        You&apos;re viewing post with ID: <strong>{id}</strong>
      </p>
      <p>
        Questo è un esempio di routing dinamico. Puoi visitare diverse URL come
      </p>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/post/1">
            <pre className="bg-white text-black p-3 rounded-md">
              <code>/post/1</code>
            </pre>
          </Link>
        </li>

        <li>
          <Link href="/post/2">
            <pre className="bg-white text-black p-3 rounded-md">
              <code>/post/2</code>
            </pre>
          </Link>
        </li>
        
        <li>
          <Link href="/post/3">
            <pre className="bg-white text-black p-3 rounded-md">
              <code>/post/3</code>
            </pre>
          </Link>
        </li>
      </ul>
      <p>ecc., e tutte saranno gestite dallo stesso file.</p>
    </div>
  );
};

export default PostPage;

import React from "react";
import { getDictionary } from "../dictionaries";

export default async function About({ lang }: { readonly lang: string }) {
  const dict = await getDictionary(lang);

  return (
    <div className="py-5 border-1 border-b-black">
      <div>
        <h2 className="text-2xl font-bold">{dict.about.title}</h2>
        <p className="text-wrap  text-sm">{dict.about.description}</p>
      </div>
    </div>
  );
}

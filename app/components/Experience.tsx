import React from "react";
import { getDictionary } from "../dictionaries";
import ExpBlock from "./Additional/ExpBlock";

export default async function Experience({ lang }: { readonly lang: string }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">{dict.experience.title}</h2>
      </div>
      <ExpBlock dict={dict}></ExpBlock>
    </div>
  );
}

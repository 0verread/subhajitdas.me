import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Subhajit Das" },
    { name: "description", content: "My Personal Blog" },
  ];
};

export default function Index() {
  const aboutme: string =
    "hey there, i am subhajit, a student at boston university, and a computer engineer experienced in building computers and softwares.";
  
  const myInterest: string  = "i love to fix things that are broken (or break things that are already working). recently, i have been very interested in real-time data ingestion, and i am working on something related to that."

  const workExp : string  = "i have worked at a start-up called Fyle and OpenText in the past as a software engineer."
  return (
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header />
      <h1 className="text-white mb-8 text-3xl font-medium tracking-tighter">
        subhajit das
      </h1>
      <p className="text-white my-4">{aboutme}</p>
      <p className="text-white my-4">{myInterest}</p>
      <p className="text-white my-4">{workExp}</p> 
      <ul className="text-white pt-4 flex flex-col gap-2 my-6 ml-6 list-disc">
        <li className="mt-2">
          <a className="underline hover:no-underline underline-offset-4 decoration-2 decoration-neutral-400" href="https://github.com/0verread">
            github
          </a>
        </li>
        <li className="mt-2">
          <a className="underline hover:no-underline underline-offset-4 decoration-2 decoration-neutral-400" href="https://twitter.com/heysubha">
            twitter
          </a>
        </li>
        <li className="mt-2">
          <a className="underline hover:no-underline underline-offset-4 decoration-2 decoration-neutral-400" href="https://www.linkedin.com/in/heysubha/">
            linkedin
          </a>
        </li>
      </ul>
    </div>
  );
}

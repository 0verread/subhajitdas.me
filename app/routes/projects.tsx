import Header from "~/components/Header";

import allProjects from "~/utils/projects";

export default function Projects(){
  return(
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header/>
      <section className="mt-10">
        <ul className="list-disc ml-6">
          {allProjects.map(project =>
            <li className="underline text-white" key={project.name}>
              {project.name}
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
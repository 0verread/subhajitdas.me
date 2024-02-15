import { json } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";

import Header from "~/components/Header";

import * as posta from "~/contents/first-blog.mdx"

function postFormModule(mod : any){
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export function loader(){
  return json([
    postFormModule(posta),
  ]);
}

export default function BlogIndex(){
  const posts = useLoaderData<typeof loader>();
  return(
      <div className="text-white">
        <ul className="list-disc ml-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="mr-2">{post.date}</span><Link to={`${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
}
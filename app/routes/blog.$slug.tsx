import { useLoaderData, useParams } from "@remix-run/react";

import type { LoaderFunctionArgs } from "@remix-run/node";

// export const loader = ({ params } : LoaderFunctionArgs) => {
//   // const contact = await getContact(params.contactId);
//   // return json({ contact });
//   console.log(params);
//   return params.slug;
// };

export default function BlogContent(){
  // const slug =  useLoaderData<typeof loader>();
  const params =  useParams();
  return(
    <h1 className=" text-white">Hey here {params.slug}</h1>
  );
}
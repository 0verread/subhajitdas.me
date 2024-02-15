import { Outlet } from "@remix-run/react";

import Header from "~/components/Header";

export default function Blog() {
  return (
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

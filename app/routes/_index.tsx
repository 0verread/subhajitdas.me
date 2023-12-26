import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Subhajit" },
    { name: "description", content: "My Personal Blog" },
  ];
};

export default function Index() {
  const aboutme: string  = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique nisl vel maximus congue. Maecenas nisl turpis, bibendum sed molestie quis, iaculis et sapien. Phasellus maximus metus nec varius molestie. Vestibulum massa elit, sollicitudin sed ex nec, accumsan interdum diam. Cras eleifend, sapien vel tincidunt bibendum, neque nunc consequat ipsum, sit amet pulvinar libero eros non massa. Nam et tristique dolor. Praesent sit amet mauris at enim vestibulum venenatis. Donec sit amet egestas nibh. Nullam tempus dolor gravida, pretium quam ut, elementum neque. Etiam a ultricies urna. Etiam varius augue mauris, sed molestie nulla tempor sed. Maecenas euismod sapien in lacinia rutrum. Nam pellentesque diam sapien, sed cursus justo porttitor id. Curabitur vehicula vitae libero et euismod. Pellentesque sit amet elit quis ante congue fringilla in commodo augue. Quisque neque ante, euismod et mauris vel, congue imperdiet ipsum."
  return (
    <div className="mx-4 flex lg:mx-auto max-w-2xl mt-8 flex-col">
      <Header />
      <h1 className="text-white mb-8 text-2xl font-medium tracking-tighter">subhajit das</h1>
      <p className="text-white">{aboutme}</p>
    </div>
  );
}

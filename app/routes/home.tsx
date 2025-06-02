import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skel Tech" },
    { name: "description", content: "Skel Tech | Home" },
  ];
}

export default function Home() {
  return <Welcome />;
}

import { Outlet } from "react-router";
import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === "/news") {
    return redirect("/news/kica-news");
  }
  return null;
}

export default function NewsLayout() {
  return <Outlet />;
}


import { Outlet } from "react-router";
import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === "/about-kica") {
    return redirect("/about-kica/greeting");
  }
  return null;
}

export default function AboutLayout() {
  return <Outlet />;
}


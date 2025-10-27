import { Outlet } from "react-router";
import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === "/works") {
    return redirect("/works/services-support-areas");
  }
  return null;
}

export default function WorksLayout() {
  return <Outlet />;
}


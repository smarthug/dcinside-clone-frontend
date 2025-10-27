import { Outlet } from "react-router";
import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === "/client") {
    return redirect("/client/dispute-submission");
  }
  return null;
}

export default function ClientLayout() {
  return <Outlet />;
}


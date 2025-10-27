import { Outlet } from "react-router";
import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  if (url.pathname === "/auth") {
    return redirect("/auth/login");
  }
  return null;
}

export default function AuthLayout() {
  return <Outlet />;
}


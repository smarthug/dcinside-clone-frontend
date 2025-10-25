import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("education", "routes/education.tsx"),
    route("resources", "routes/resources.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;

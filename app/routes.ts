import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

  index("routes/home.tsx"),

  // About KICA -> /about-kica -> /about-kica/greeting
  route("about-kica", "./about/layout.tsx", [
    route("greeting", "./about/greeting.tsx"),
    route("organization", "./about/organization.tsx"),
  ]),

  // Works -> /works -> /works/services-support-areas
  route("works", "./works/layout.tsx", [
    route("services-support-areas", "./works/services.tsx"),
    route("work-group", "./works/work-group.tsx"),
  ]),

  // Tech (단일)
  route("tech", "./tech.tsx"),

  // News -> /news -> /news/kica-news
  route("news", "./news/layout.tsx", [
    route("kica-news", "./news/kica-news.tsx"),
    route("related-news", "./news/related-news.tsx"),
  ]),

  // Data (단일)
  route("data", "./data.tsx"),

  // Contract (단일)
  route("contract", "./contract.tsx"),

  // Client -> /client -> /client/dispute-submission
  route("client", "./client/layout.tsx", [
    route("dispute-submission", "./client/dispute.tsx"),
    route("advertisement-request", "./client/advertise.tsx"),
  ]),

  // Intranet (단일)
  route("intranet", "./intranet.tsx"),

  // Auth -> /auth -> /auth/login
  route("auth", "./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("signup", "./auth/signup.tsx"),
    route("forgot-id", "./auth/forgot-id.tsx"),
    // 필요 시: route("forgot-password", "./auth/forgot-password.tsx"),

  ]),
] satisfies RouteConfig;

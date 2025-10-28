import { Link, NavLink, Outlet } from "react-router";
import LogoImg from "app/assets/logo/logo_img.svg?react";
import LogoText from "app/assets/logo/logo_text.svg?react";
import type { Route } from "./+types/site-layout";

const NAV_LINKS = [
  { to: "/", label: "메인" },
  { to: "/about", label: "협회 소개" },
  { to: "/services", label: "사업 안내" },
  { to: "/education", label: "교육·세미나" },
  { to: "/resources", label: "자료실" },
  { to: "/contact", label: "오시는 길" },
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "한국건설감정사회" }];
}

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur h-[70px] overflow-hidden sticky top-0 z-1">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 h-[100%] overflow-hidden">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight h-[100%] overflow-hidden"
          >
            <span className="h-[100%]">
              <LogoImg width="100%" height="100%" />
            </span>
            <span className="h-[100%] p-2 pl-0">
              <LogoText height="100%" width="100%" />
            </span>
          </Link>
          <nav className="hidden flex-1 justify-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "transition-colors",
                    isActive
                      ? "text-blue-900"
                      : "text-slate-600 hover:text-blue-800",
                  ].join(" ")
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/contact"
            className="rounded-full border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
          >
            상담 문의
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            KICA
          </p>
          <h2 className="text-2xl font-semibold">한국건설감정사회</h2>
          <p className="mt-3 text-sm text-slate-400">
            서울특별시 강동구 성안로 18, 917호 | Tel. 02-6953-1492 | Fax.
            02-6919-4008
          </p>
        </div>
        <div className="grid gap-2 text-sm text-slate-300">
          <p>사업자등록번호 560-82-00847</p>
          <p>이메일 kica0472@naver.com</p>
          <p>
            © {new Date().getFullYear()} Korea Institute of Construction
            Appraisers
          </p>
        </div>
      </div>
    </footer>
  );
}

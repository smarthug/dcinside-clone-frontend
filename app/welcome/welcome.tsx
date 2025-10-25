import { Link } from "react-router";

const stats = [
  {
    label: "설립",
    value: "1972",
    description: "건설감정 제도화를 견인한 원년",
  },
  {
    label: "전문위원",
    value: "450+",
    description: "건설·법률·안전 분야 통합 자문",
  },
  {
    label: "연간 프로젝트",
    value: "120건",
    description: "분쟁조정·기술자문·정책연구",
  },
];

const quickLinks = [
  {
    title: "협회 소개",
    description: "연혁·조직·비전을 한눈에",
    to: "/about",
  },
  {
    title: "사업 안내",
    description: "감정, 분쟁조정, 정책자문",
    to: "/services",
  },
  {
    title: "교육·세미나",
    description: "실무자를 위한 프로그램 일정",
    to: "/education",
  },
  {
    title: "자료실",
    description: "법령, 표준양식, 보고서",
    to: "/resources",
  },
];

export function Welcome() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 px-8 py-12 text-white shadow-2xl">
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-sm tracking-[0.3em] uppercase text-blue-200">
            Korea Institute of Construction Appraisers
          </p>
          <h1 className="text-4xl font-semibold leading-snug text-white lg:text-5xl">
            한국건설감정사회
            <span className="block text-blue-200">
              건설분쟁·기술감정의 신뢰 기준을 새롭게 제시합니다.
            </span>
          </h1>
          <p className="text-lg text-blue-100">
            공정한 감정과 전문 컨설팅으로 민간 및 공공 프로젝트의 위험을
            줄이고, 안전한 시공 품질을 확보하는 KICA의 디지털 허브입니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="rounded-full bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              사업 영역 보기
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              협력 문의
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-sm text-blue-100">{stat.label}</p>
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="text-xs text-blue-100">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-4 transition hover:border-white/40 hover:bg-white/10"
              >
                <p className="text-sm text-blue-100">{link.title}</p>
                <p className="text-lg font-semibold">{link.description}</p>
                <span className="text-sm font-medium text-blue-200 group-hover:translate-x-1 group-hover:text-white">
                  바로가기 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
      </div>
    </section>
  );
}

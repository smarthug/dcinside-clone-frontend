import { Link } from "react-router";

import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

const focusAreas = [
  {
    title: "건설감정 · 기술검증",
    description: "대형 프로젝트 감정, 하자 진단, 공정·원가 검증",
    to: "/services",
  },
  {
    title: "분쟁조정 · 정책자문",
    description: "조정·중재 대응과 제도 개선 연구",
    to: "/about",
  },
  {
    title: "교육 · 네트워크",
    description: "현장형 실무 교육, 정책 포럼, 전문가 커뮤니티",
    to: "/education",
  },
];

const updates = [
  {
    category: "공지",
    title: "2025 상반기 감정위원 모집",
    summary: "토목·건축·플랜트 분야 위원 위촉 절차 안내",
  },
  {
    category: "세미나",
    title: "공공공사 분쟁 리스크 포럼",
    summary: "지자체 사례로 살펴보는 사전 예방 전략",
  },
  {
    category: "리포트",
    title: "건설 리스크 인사이트 Vol.07",
    summary: "최근 3년간 감정 쟁점 데이터 분석",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "한국건설감정사회 | 디지털 허브" },
    {
      name: "description",
      content: "건설감정, 분쟁조정, 교육, 자료실을 하나의 라우팅 구조로 제공합니다.",
    },
  ];
}

export default function Home() {
  return (
    <div className="space-y-16">
      <Welcome />

      <section className="grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <Link
            key={area.title}
            to={area.to}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900">
              Focus
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{area.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{area.description}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-900 group-hover:translate-x-1">
              자세히 보기 →
            </span>
          </Link>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            최근 소식
          </p>
          <ul className="mt-4 space-y-4">
            {updates.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-500">{item.category}</p>
                <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.summary}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            협력 기관
          </p>
          <ul className="mt-4 grid gap-3 text-sm font-semibold text-slate-700">
            <li>국토교통부 · 한국도로공사</li>
            <li>서울·부산시 건설본부</li>
            <li>대한건설협회 · 전문건설협회</li>
            <li>대형 로펌 건설팀 · 중재원</li>
          </ul>
          <p className="mt-6 text-xs text-slate-400">
            * 실제 파트너 데이터로 교체 가능합니다.
          </p>
        </article>
      </section>
    </div>
  );
}

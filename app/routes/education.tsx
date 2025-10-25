import { Link } from "react-router";

import type { Route } from "./+types/education";

const programs = [
  {
    name: "건설감정 실무 아카데미",
    level: "6주 집중",
    detail: "분쟁사례 분석, 감정서 작성, 전문가 증언 실습",
  },
  {
    name: "프로젝트 리스크 매니지먼트",
    level: "4주",
    detail: "원가·공정관리, 계약리스크 진단 프레임 구성",
  },
  {
    name: "법원·중재기관 대응 워크숍",
    level: "2일",
    detail: "감정인 출석 요령, 증거설계, 협상 전략",
  },
];

const schedule = [
  { month: "3월", topic: "감정 전문가 기본 과정", status: "접수중" },
  { month: "6월", topic: "플랜트 프로젝트 분쟁사례", status: "준비중" },
  { month: "9월", topic: "공공공사 하자판정 워크숍", status: "준비중" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "교육 · 세미나 | 한국건설감정사회" },
    {
      name: "description",
      content: "KICA가 운영하는 건설감정·분쟁 전문 교육 과정을 확인하세요.",
    },
  ];
}

export default function Education() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
          Training & Seminar
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">실무 중심 전문 교육</h1>
        <p className="text-lg text-slate-600">
          분야별 전문위원과 현업 실무자가 직접 참여하는 커리큘럼으로 감정, 계약, 리스크 대응 역량을
          단계적으로 강화할 수 있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <div key={program.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-blue-700">{program.level}</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{program.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{program.detail}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">2025 일정 미리보기</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {schedule.map((item) => (
            <div key={item.topic} className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-blue-700">{item.month}</p>
              <p className="text-lg font-semibold text-blue-900">{item.topic}</p>
              <p className="text-sm text-blue-800">{item.status}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-8 text-white">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">맞춤형 사내 교육이 필요하신가요?</h3>
          <p className="text-sm text-slate-200">
            발주처·시공사·감리사 등 조직별 니즈에 맞춘 워크숍을 설계해 드립니다.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            상담 요청
          </Link>
          <Link
            to="/resources"
            className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white"
          >
            커리큘럼 다운로드
          </Link>
        </div>
      </section>
    </div>
  );
}

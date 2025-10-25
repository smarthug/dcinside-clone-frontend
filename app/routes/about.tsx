import type { Route } from "./+types/about";

const timeline = [
  {
    year: "1972",
    title: "한국건설감정사회 설립",
    detail: "건설분쟁 감정제도화를 위해 민관 합동기구로 출범",
  },
  {
    year: "1990s",
    title: "분쟁조정센터 신설",
    detail: "대형 현장 분쟁을 위한 전담조직과 기술위원회 운영",
  },
  {
    year: "2010s",
    title: "공공·민간 프로젝트 확대",
    detail: "SOC, 주거, 플랜트 분야 감정·검증 프로젝트 수행",
  },
  {
    year: "2020s",
    title: "디지털 플랫폼 전환",
    detail: "데이터 기반 리스크 분석과 온라인 교육으로 확장",
  },
];

const pillars = [
  {
    title: "신뢰",
    description: "독립성과 객관성을 지키는 다층 검증 프로세스",
  },
  {
    title: "전문성",
    description: "건설·법률·금융을 아우르는 450명 이상의 전문가 풀",
  },
  {
    title: "연결",
    description: "공공기관, 시공사, 법률기관과의 유기적 협업",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "협회 소개 | 한국건설감정사회" },
    {
      name: "description",
      content: "한국건설감정사회의 역사와 사명, 핵심가치를 소개합니다.",
    },
  ];
}

export default function About() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
          About KICA
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">신뢰 기반의 건설감정 전문기관</h1>
        <p className="text-lg text-slate-600">
          한국건설감정사회(KICA)는 건설분쟁의 객관적 감정, 공정한 조정, 기술 리스크 컨설팅을
          제공하는 비영리 전문기관입니다. 현장 중심의 전문위원단과 축적된 판례·데이터를 기반으로
          안전하고 투명한 건설 생태계를 만드는 데 기여하고 있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-800">
              {pillar.title}
            </p>
            <p className="mt-4 text-slate-600">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-slate-900">연혁</h2>
        <div className="space-y-6 border-l-2 border-blue-900 pl-6">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <span className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-900" />
              <p className="text-sm font-semibold text-blue-900">{item.year}</p>
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

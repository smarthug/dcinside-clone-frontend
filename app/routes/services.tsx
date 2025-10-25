import type { Route } from "./+types/services";

const services = [
  {
    title: "건설감정 · 기술자문",
    items: [
      "현장 실사 및 공정별 원가 검증",
      "하자·지체상금 산정 보고서",
      "법원·중재기관 감정 대응",
    ],
  },
  {
    title: "분쟁조정 · 중재",
    items: [
      "민간·공공 프로젝트 분쟁 컨설팅",
      "사전 예방형 계약 검토",
      "전문위원 합동 협상 지원",
    ],
  },
  {
    title: "정책·교육",
    items: [
      "건설기술 정책연구 및 데이터 분석",
      "실무자 심화 교육과정 기획",
      "지자체·공공기관 맞춤 자문",
    ],
  },
];

const workflow = [
  { step: "01", title: "사전 상담", detail: "사업 범위 정의 및 필요자료 안내" },
  { step: "02", title: "전문위원 배정", detail: "분야별 위원단 구성 및 착수보고" },
  { step: "03", title: "현장 조사", detail: "실측·인터뷰·자료분석을 통한 근거 확보" },
  { step: "04", title: "보고 및 대응", detail: "감정서 제출, 분쟁기관 출석, 후속 자문" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "사업 안내 | 한국건설감정사회" },
    {
      name: "description",
      content: "건설감정, 분쟁조정, 정책연구 등 KICA의 핵심 사업을 확인하세요.",
    },
  ];
}

export default function Services() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
          Services
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">전국 단위 건설감정 토탈 서비스</h1>
        <p className="text-lg text-slate-600">
          KICA는 사전 기획부터 분쟁 대응까지 하나의 워크플로우 안에서 통합 서비스를 제공합니다.
          프로젝트 규모, 분야, 긴급도에 맞춰 전문위원단을 즉시 구성합니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">진행 프로세스</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {workflow.map((phase) => (
            <div key={phase.step} className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
                {phase.step}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-blue-900">{phase.title}</h3>
              <p className="mt-2 text-sm text-blue-800">{phase.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

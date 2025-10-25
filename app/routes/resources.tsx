import type { Route } from "./+types/resources";

const downloads = [
  {
    title: "감정 의뢰 신청서",
    description: "분쟁 유형·사업 개요·필요 서류 체크리스트 포함",
  },
  {
    title: "표준 감정 보고서 템플릿",
    description: "프로젝트 개요, 쟁점 정리, 기술 검토, 결론 구조 안내",
  },
  {
    title: "분쟁 예방 계약 가이드",
    description: "사전 리스크 평가 항목과 권장 조항 모음",
  },
];

const references = [
  { category: "법·제도", items: ["건설기술진흥법", "국가계약분쟁조정법", "하도급법"] },
  { category: "기술기준", items: ["KCS 구조·토목 표준", "품셈·표준시장단가", "안전점검 매뉴얼"] },
  { category: "보고서", items: ["KICA 이슈 브리프", "건설 리스크 동향", "해외 중재사례"] },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "자료실 | 한국건설감정사회" },
    {
      name: "description",
      content: "감정 의뢰 서식, 표준 템플릿, 관련 법령 등을 모았습니다.",
    },
  ];
}

export default function Resources() {
  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
          Resources
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">문서 · 양식 · 참고자료</h1>
        <p className="text-lg text-slate-600">
          업무 착수를 빠르게 돕는 대표 서식을 우선 정리했습니다. 추후 실제 파일 업로드 위치와 연동할 수
          있도록 구조화되어 있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {downloads.map((doc) => (
          <article key={doc.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{doc.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{doc.description}</p>
            <p className="mt-4 text-sm font-semibold text-blue-900">PDF · HWP · DOC</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="text-2xl font-semibold text-blue-900">주요 참고자료</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {references.map((ref) => (
            <div key={ref.category}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                {ref.category}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-blue-900">
                {ref.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

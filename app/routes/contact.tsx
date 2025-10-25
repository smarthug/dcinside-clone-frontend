import type { Route } from "./+types/contact";

const contactInfo = [
  { label: "주소", value: "서울특별시 강동구 성안로 18, 917호" },
  { label: "대표전화", value: "02-6953-1492" },
  { label: "팩스", value: "02-6919-4008" },
  { label: "이메일", value: "kica0472@naver.com" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "오시는 길 | 한국건설감정사회" },
    {
      name: "description",
      content: "협회 위치와 상담 채널을 확인하세요.",
    },
  ];
}

export default function Contact() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-slate-900">문의 및 방문 안내</h1>
        <p className="text-lg text-slate-600">
          감정 의뢰, 교육 협력, 정책 자문 등 필요한 사항을 알려주시면 담당자가 빠르게 회신드립니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">연락처</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-600">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex flex-col">
                <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {info.label}
                </dt>
                <dd className="text-base text-slate-900">{info.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-slate-500">
            * 방문 전 사전 예약을 권장드립니다. 주차 지원 가능.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-xl font-semibold text-blue-900">간편 문의</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="성함 / 기관"
              className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="이메일"
              className="w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm"
            />
            <textarea
              placeholder="문의 내용을 남겨주세요"
              className="h-28 w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm"
            />
            <button
              type="button"
              className="w-full rounded-full bg-blue-900 px-4 py-3 text-sm font-semibold text-white"
            >
              접수 (UI 목업)
            </button>
          </form>
          <p className="mt-3 text-xs text-blue-800">
            실제 전송 기능은 백엔드 연동 시 활성화됩니다.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">찾아오시는 길</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <p className="text-sm text-slate-600">
            지하철 5호선 굽은다리역 3번 출구에서 도보 5분 거리에 위치해 있습니다. 1층 로비에서 방문증을
            발급받은 뒤 9층 협회 사무국으로 오시면 안내해 드립니다.
          </p>
          <div className="rounded-2xl bg-slate-100 p-6 text-center text-sm text-slate-500">
            지도를 연결할 영역입니다.
            <br />
            (향후 카카오/네이버 지도를 iframe 또는 SDK로 연동)
          </div>
        </div>
      </section>
    </div>
  );
}

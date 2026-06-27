import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[#f5f2f0] px-6 py-12 text-[#111827]">
      <div className="mx-auto max-w-[1200px] space-y-16">
        <section className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
          <div className="rounded-[32px] border border-[#d6d6d6] bg-white p-10 shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-start">
              <div>
                <div className="mb-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-[#f1ccff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#111827]">
                    자기소개서
                  </span>
                  <span className="rounded-full bg-[#f5f2f0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7b7b7b]">
                    프로필
                  </span>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-[-0.03em] text-[#111827]">
                  {profile.name}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-9 text-[#334155]">
                  {profile.tagline || "데이터 기반 마케팅을 실현하는 인재입니다."}
                </p>
              </div>
              <div className="rounded-[32px] border border-[#d6d6d6] bg-[#f1ccff] p-8">
                <div className="flex h-72 items-center justify-center rounded-[24px] bg-white/90 shadow-sm overflow-hidden">
                  <img src="/images/다운로드.jpeg" alt="프로필 사진" className="h-full w-full object-contain object-center" />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6">
              <div className="rounded-[32px] border border-[#d6d6d6] bg-[#faf5ff] p-8 shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7b7b7b]">소개</p>
                <p className="mt-3 text-base leading-8 text-[#334155]">{profile.introduction}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-[#d6d6d6] bg-white p-10 shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b7b7b]">특징</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <div key={highlight.id} className="rounded-[20px] bg-[#f5f2f0] p-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#111827]">
                    {highlight.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[32px] border border-[#d6d6d6] bg-[#faf5ff] p-8 shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7b7b7b]">소속</p>
                <p className="mt-3 text-3xl font-semibold text-[#111827]">{profile.team}</p>
              </div>
              <div className="rounded-[32px] border border-[#d6d6d6] bg-[#faf5ff] p-8 shadow-[0_8px_16px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#7b7b7b]">나이</p>
                <p className="mt-3 text-3xl font-semibold text-[#111827]">{profile.uniform_number}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

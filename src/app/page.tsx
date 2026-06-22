export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 px-6 py-10 text-slate-900">
      {/* 자기소개 전체 화면: 학생들이 이름, 소속, 설명을 바꿔보는 첫 실습 영역 */}
      <section className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
          {/* 프로필 사진 영역: public/images/ohtani.jpeg 파일을 화면에 보여줌 */}
          <img
            src="/images/ohtani.jpeg"
            alt="오타니 쇼헤이 프로필 사진"
            className="h-72 w-full rounded-lg object-cover shadow-sm"
          />

          <div>
            <p className="text-sm font-bold text-blue-600">Baseball Player Profile</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">오타니 쇼헤이</h1>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              투수와 타자를 모두 소화하는 세계적인 야구 선수입니다. 강한 타격, 빠른 주루, 압도적인
              경기 영향력으로 많은 팬들에게 사랑받고 있습니다.
            </p>
          </div>
        </div>

        {/* 기본 정보 카드: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">이름</p>
            <p className="mt-2 text-xl font-black text-slate-950">오타니 쇼헤이</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">소속</p>
            <p className="mt-2 text-xl font-black text-slate-950">LA 다저스</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">포지션</p>
            <p className="mt-2 text-xl font-black text-slate-950">투수 / 지명타자</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-blue-50 p-5">
            <p className="text-sm font-bold text-slate-500">등번호</p>
            <p className="mt-2 text-xl font-black text-slate-950">17번</p>
          </div>
        </div>

        {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
        <div className="mt-8 rounded-lg border border-slate-200 p-6">
          <h2 className="text-2xl font-black text-slate-950">자기소개</h2>
          <p className="mt-4 leading-8 text-slate-700">
            안녕하세요. 저는 오타니 쇼헤이입니다. 현재 LA 다저스에서 뛰고 있으며, 매 경기 팀에 도움이
            되는 선수가 되기 위해 최선을 다하고 있습니다.
          </p>
        </div>

        {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
        <div className="mt-8">
          <h2 className="text-2xl font-black text-slate-950">특징</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-100 px-4 py-3 text-center font-bold text-slate-700">
              강한 홈런 파워
            </div>
            <div className="rounded-lg bg-slate-100 px-4 py-3 text-center font-bold text-slate-700">
              빠른 주루
            </div>
            <div className="rounded-lg bg-slate-100 px-4 py-3 text-center font-bold text-slate-700">
              이도류 플레이
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

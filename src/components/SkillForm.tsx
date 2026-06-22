"use client";

import { useActionState } from "react";
import { addSkill, type FormState } from "@/app/actions";

const initialState: FormState = {
  ok: false,
  message: "",
};

export function SkillForm() {
  const [state, formAction, isPending] = useActionState(addSkill, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      {/* 스킬 입력 폼: 학생들이 AI에게 수정 요청하기 쉬운 영역 */}
      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="skill-name">
          기술 이름
        </label>
        <input
          id="skill-name"
          name="name"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="예: React"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="skill-level">
          숙련도
        </label>
        <select
          id="skill-level"
          name="level"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          defaultValue="중"
        >
          <option>상</option>
          <option>중</option>
          <option>하</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="skill-description">
          한 줄 설명
        </label>
        <input
          id="skill-description"
          name="description"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="예: 컴포넌트를 만들 수 있어요"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:bg-slate-300"
        disabled={isPending}
      >
        {isPending ? "저장 중..." : "스킬 저장하기"}
      </button>

      {state.message ? (
        <p className={`text-sm font-semibold ${state.ok ? "text-green-600" : "text-red-600"}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useActionState } from "react";
import { addProject, type FormState } from "@/app/actions";

const initialState: FormState = {
  ok: false,
  message: "",
};

export function ProjectForm() {
  const [state, formAction, isPending] = useActionState(addProject, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      {/* 프로젝트 입력 폼: 포트폴리오 카드 데이터를 SQLite에 저장하는 영역 */}
      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="project-title">
          프로젝트 제목
        </label>
        <input
          id="project-title"
          name="title"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="예: 나만의 블로그"
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="project-description">
          프로젝트 설명
        </label>
        <textarea
          id="project-description"
          name="description"
          className="mt-2 min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="예: AI와 함께 만든 자기소개 웹사이트입니다."
        />
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="project-tech-stack">
          기술 스택
        </label>
        <input
          id="project-tech-stack"
          name="tech_stack"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="예: Next.js, SQLite"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700 disabled:bg-slate-300"
        disabled={isPending}
      >
        {isPending ? "저장 중..." : "프로젝트 저장하기"}
      </button>

      {state.message ? (
        <p className={`text-sm font-semibold ${state.ok ? "text-green-600" : "text-red-600"}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

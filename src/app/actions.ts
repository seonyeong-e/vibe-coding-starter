"use server";

import { revalidatePath } from "next/cache";
import { insertProject, insertSkill } from "@/lib/db";

export type FormState = {
  ok: boolean;
  message: string;
};

const emptyState: FormState = {
  ok: false,
  message: "",
};

function readRequired(formData: FormData, key: string, label: string) {
  const value = String(formData.get(key) ?? "").trim();

  if (!value) {
    throw new Error(`${label}을(를) 입력해줘.`);
  }

  return value;
}

export async function addSkill(
  _previousState: FormState = emptyState,
  formData: FormData,
): Promise<FormState> {
  try {
    const name = readRequired(formData, "name", "기술 이름");
    const level = readRequired(formData, "level", "숙련도");
    const description = readRequired(formData, "description", "기술 설명");

    insertSkill(name, level, description);
    revalidatePath("/");

    return { ok: true, message: "스킬이 저장됐어." };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "스킬 저장 중 문제가 생겼어.",
    };
  }
}

export async function addProject(
  _previousState: FormState = emptyState,
  formData: FormData,
): Promise<FormState> {
  try {
    const title = readRequired(formData, "title", "프로젝트 제목");
    const description = readRequired(formData, "description", "프로젝트 설명");
    const techStack = readRequired(formData, "tech_stack", "기술 스택");

    insertProject(title, description, techStack);
    revalidatePath("/");

    return { ok: true, message: "프로젝트가 저장됐어." };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "프로젝트 저장 중 문제가 생겼어.",
    };
  }
}

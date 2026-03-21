import { projects as staticProjects } from "@/data/projects/projects";
import { ProjectData } from "@/types/projects";
import { getMessages } from "next-intl/server";

export async function getProjects(locale: string): Promise<ProjectData[]> {
  const messages = await getMessages({ locale }) as any;
  const projectsData = messages.ProjectsData;

  return staticProjects.map((p) => ({
    ...p,
    ...projectsData[p.slug]
  }));
}

export async function getProjectBySlug(slug: string, locale: string): Promise<ProjectData | undefined> {
  const allProjects = await getProjects(locale);
  return allProjects.find((p) => p.slug === slug);
}

export async function getActiveProjects(locale: string): Promise<ProjectData[]> {
  const allProjects = await getProjects(locale);
  return allProjects.filter((p) => p.status === "active" || p.status === "active-and-expanding");
}

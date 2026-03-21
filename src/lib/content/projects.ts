import { projects } from "@/data/projects/projects";
import { ProjectData } from "@/types/projects";

export async function getProjects(): Promise<ProjectData[]> {
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getActiveProjects(): Promise<ProjectData[]> {
  return projects.filter((p) => p.status === "active");
}

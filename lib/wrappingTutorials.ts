import { wrappingTutorials, type WrappingTutorial } from "@/data/wrappingTutorials";

export { wrappingTutorials };
export type { WrappingTutorial };

export function getWrappingTutorialBySlug(slug: string) {
  return wrappingTutorials.find((tutorial) => tutorial.slug === slug);
}

export function getWrappingTutorialMetadata(slug: string) {
  const tutorial = getWrappingTutorialBySlug(slug);

  if (!tutorial) {
    return {
      title: "WrapLab Christmas Wrapping Tutorial",
      description: "Learn simple Christmas wrapping tutorials from WrapLab by Holiday Road Map.",
      path: "/guidebook/wrapping"
    };
  }

  return {
    title: tutorial.title,
    description: tutorial.description,
    path: tutorial.href
  };
}

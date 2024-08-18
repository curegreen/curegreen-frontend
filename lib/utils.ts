import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 160; // Adjust this value as needed
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
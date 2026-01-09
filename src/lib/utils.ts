import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom transition for that "premium, controlled" feel
export const transition = {
  duration: 1.2,
  ease: [0.25, 0.1, 0.25, 1.0], // Ease-in-out, no bounce
};

export const fastTransition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1.0],
}

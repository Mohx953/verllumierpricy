"use client";
import { AsciiArt } from "@/components/ui/ascii-art";
import {Ngeti} from "../assets/src/assets/1778266370631.jpg"

export default function AsciiArtDemo() {
  return (
    <AsciiArt
      src="Ngeti"
      resolution={100}
      color="var(--color-neutral-500)"
      animationStyle="fade"
      animationDuration={1.5}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950" />
  );
}

"use client";
import React from "react";
import { SquigglyText } from "@/components/ui/squiggly-text";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function SquigglyTextDemo() {
  return (
    <>
    <BackgroundBeamsWithCollision>
    <div className="flex h-[40rem] w-full items-center justify-center">
      <h1
        className="text-center text-5xl leading-tight font-bold text-neutral-900 md:text-7xl lg:text-8xl dark:text-neutral-100">
        How{" "}
        <SquigglyText stepDuration={70} scale={[6, 9]} className="text-amber-500">
          do I
        </SquigglyText>{" "}
        <br />
        win <SquigglyText scale={5}>her</SquigglyText> heart?
      </h1>
    </div>
    </BackgroundBeamsWithCollision>
    </>
  );
}

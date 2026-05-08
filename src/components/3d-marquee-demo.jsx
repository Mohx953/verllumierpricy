"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
    "https://i.imghippo.com/files/cqg4237lV.jpg",
    "https://i.imghippo.com/files/IG5453ew.jpg",
    "https://i.imghippo.com/files/tUc3971sE.jpg",
  ];
  return (
    <div
      className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}

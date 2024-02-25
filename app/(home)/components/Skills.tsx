import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";

export default function Skills() {
  return (
    <div>
        <Title text="Skills 🔪" className="flex flex-col items-center justify-center -rotate-6" />

        <HoverEffect items={Skills} />
    </div>
  )
}

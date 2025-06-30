import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipDemo";
import { TechStackDemo } from "@/components/InfiniteMovingCards";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export default function Home() {
  return (
    <>
    <div className="h-screen flex items-center justify-center w-full">
      <div className="w-full pt-10">
        {/* Header with greeting, profile pic, and name */}
        <div className="flex flex-row items-center gap-2 sm:gap-4 mb-6 w-full justify-center">
          <h1 className="text-8xl md:text-9xl font-semibold text-gray-800 text-gradient">
            Hi, I'm
          </h1>
          <div className="flex items-center gap-6">
            <AnimatedTooltipPreview />
            <h1 className="text-8xl md:text-9xl font-bold text-gray-800 text-gradient">
              !
            </h1>
          </div>
        </div>

        {/* Role and company section */}
        <div className="mb-14 w-full">
          <div className="mb-2 flex items-center justify-center flex-wrap gap-1 sm:gap-2 w-full">
            <span className="text-4xl md:text-6xl text-gray-500 font-bold">
              I'm a
            </span>
            <TextRevealCard
              text="Guess if you can?"
              revealText="Software Engineer"
            />
            <span className="text-4xl md:text-6xl text-gray-500 font-bold">
              from
            </span>
            <span className="text-4xl md:text-6xl font-bold text-[#5AA85A]">
              Pakistan.
            </span>
          </div>
        </div>

        {/* Call-to-action section */}
        <div className="flex flex-col justify-center items-center gap-1">
          <PointerHighlight> Things I am good at</PointerHighlight>
          <TechStackDemo />
        </div>
      </div>
    </div>
    </>
  );
}

import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipDemo";
import ExperienceSection from "@/components/Experience";
import Header from "@/components/Header";
import { TechStackDemo } from "@/components/InfiniteMovingCards";
import ServicesCards from "@/components/ServicesCards";
import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen relative flex flex-col items-center justify-center w-full">
        <Header />
        <div className="w-full justify-self-center">
          {/* Header with greeting, profile pic, and name */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 mb-6 w-full justify-center">
            <h1 className="text-8xl md:text-9xl font-bold text-gradient">
              Hi, I'm
            </h1>
            <div className="flex items-center gap-6">
              <AnimatedTooltipPreview />
              <h1 className="text-8xl md:text-9xl font-bold text-gradient">
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
      <div className="below-section mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center flex items-center justify-center gap-2 flex-wrap">
          <span className="text-gradient pb-[2px]">Turning ideas</span>
          <Cover>rapidly</Cover>
          <span className="text-gradient pb-[2px]">into reality</span>
        </h1>
        <ServicesCards />
      </div>
      <div className="below-section mb-20">
        <h1 className="text-4xl mb-10 md:text-6xl font-bold text-center text-gradient">
          Worked at reputed firms
        </h1>
        <ExperienceSection/>
      </div>
    </>
  );
}

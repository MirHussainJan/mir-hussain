import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipDemo";
import ExperienceSection from "@/components/Experience";
import Header from "@/components/Header";
import { InfiniteMovingCardsDemo } from "@/components/infinite-testimonials";
import { TechStackDemo } from "@/components/InfiniteMovingCards";
import ServicesCards from "@/components/ServicesCards";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { SparklesPreview } from "@/components/ui/under-sparkles";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen relative flex flex-col items-center justify-center w-full reveal-on-view">
        <Header />
        <div className="w-full justify-self-center ">
          {/* Header with greeting, profile pic, and name */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 mb-6 w-full justify-center reveal-children-on-view">
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
          <div className="mb-14 w-full reveal-children-on-view">
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
          <div className="flex flex-col justify-center items-center gap-1 reveal-children-on-view">
            <PointerHighlight> Things I am good at</PointerHighlight>
            <TechStackDemo />
          </div>
        </div>
      </div>

      <div className="below-section mb-20 max-w-[1440px] mx-auto px-4 lg:px-0 reveal-on-view">
        <h1 className="text-4xl md:text-6xl font-bold text-center flex items-center justify-center gap-2 flex-wrap reveal-children-on-view">
          <span className="text-gradient pb-[2px]">Turning ideas</span>
          <Cover>rapidly</Cover>
          <span className="text-gradient pb-[2px]">into reality</span>
        </h1>
        <ServicesCards />
      </div>

      <div className="below-section mb-20 max-w-[1440px] mx-auto px-4 lg:px-0 reveal-on-view">
        <h1 className="text-4xl md:text-6xl font-bold text-center flex items-center justify-center gap-3 md:gap-3 reveal-children-on-view mb-8">
          <span className="text-gradient">Worked at</span>
          {/* <ContainerTextFlip
            className="text-white"
            words={["reputed", "renowned", "leading", "well-known"]}
          /> */}
          <span className="md:px-3 px-1 py-1 text-3xl md:text-5xl bg-neutral-100 relative shadow-md">
            reputed
            <div className="dots absolute bg-neutral-200 w-3 h-3 md:w-4 md:h-4 rounded-full top-[-6] left-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-3 h-3 md:w-4 md:h-4 rounded-full top-[-6] right-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-3 h-3 md:w-4 md:h-4 rounded-full left-[-6] bottom-[-6]"></div>
            <div className="dots absolute bg-neutral-200 w-3 h-3 md:w-4 md:h-4 rounded-full right-[-6] bottom-[-6]"></div>
          </span>
          <span className="text-gradient">firms</span>
        </h1>
        <ExperienceSection />
        {/* Fixed alignment for "Worked at reputed firms" with proper spacing */}
        {/* <div className="text-4xl mb-10 md:text-6xl font-bold text-center flex items-center justify-center flex-wrap gap-1 md:gap-2">
          <span className="text-gradient mr-1 md:mr-2 mb-1 md:mb-2">
            Worked at
          </span>
          <TextHoverEffect text="reputed" className="text-4xl md:text-6xl" />
          <span className="text-gradient mb-1 md:mb-2">firms</span>
        </div>
        <ExperienceSection />*/}
      </div>

      <div className="below-section mb-10 reveal-on-view">
        <div className="flex items-center justify-center text-4xl md:text-6xl font-bold gap-2 mb-5 reveal-children-on-view">
          <span className="text-gradient mb-1 md:mb-2">People</span>
          <TextHoverEffect text="love" className="text-4xl md:text-6xl" />
          <span className="text-gradient mb-1 md:mb-2">my work</span>
        </div>
        <InfiniteMovingCardsDemo />
      </div>
    </>
  );
}

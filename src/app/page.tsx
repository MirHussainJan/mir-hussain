import LandingPage from "@/app/landingPage/page";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="23, 23, 23"
        outerAlpha={0.25}
        innerScale={0.85}
        outerScale={3.5}
        showSystemCursor={false}
        outerStyle={{
          border: "1.5px solid #171717",
          background: "rgba(23,23,23,0.08)",
          boxShadow: "0 0 0 2px #17171722",
          mixBlendMode: "difference",
        }}
        innerStyle={{
          background: "#171717",
          border: "1.5px solid #fff",
          boxShadow: "0 0 2px #171717, 0 0 1px #fff",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".cursor-pointer",
        ]}
      />
      <LandingPage />
    </>
  );
}

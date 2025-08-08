import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { link } from "fs";
import Link from "next/link";
function HeroSection() {
  return (
    <section
      className="relative mx-auto flex flex-col items-center justify-center z-0 py-16 sm:py-20
    g:pb-28 transition-all animate-in lg:px-12 max-w-7xl "
    >
      <div
        className=" relative p-[1px] rounded-full overflow-hidden 
          bg-linear-to-r  from-rose-200 via-rose-500 to-rose-800 
          animate-gradient-x group"
      >
        <Badge
          variant={"secondary"}
          className="relative px-6 py-2 text-base font-medium
             bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
        >
          <Sparkles className="h-6 w-6 mr-2 animate-pulse text-rose-500" />
          <p>Powered by AI</p>
        </Badge>
      </div>
      <h1 className="font-bold py-6 text-center">
        Transform description into{" "}
        <span className="relative inline-block">
          <span className=" relative px-2 z-10"> concise</span>
          <span
            className="bg-rose-200/50  transform -rotate-2 -skew-y-1 inset-0 absolute"
            aria-hidden="true"
          ></span>
        </span>{" "}
        flowcharts
      </h1>
      <h2
        className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 
        lg:max-w-4xl text-gray-600"
      >
        Real-world architecture that translates well to your flowchart generator
        project.
      </h2>
      <div>
        <Button
          variant={"link"}
          className="text-white mt-6 text-base sm:text-lg lg:text-xl 
        rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 
        to-rose-500 hover:bg-linear-to-l hover:no-underline"
        >
          <Link href={"/#pricing"} className="flex gap-2 items-center">
            <span>Try Diagramme</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;

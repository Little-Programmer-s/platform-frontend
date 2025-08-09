import { AnimatedGridPattern } from "@/components/partials/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
        />
      </div>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="skew-y-12"
        />
      </div>
    </div>
  );
}

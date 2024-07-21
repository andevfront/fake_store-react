import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#c0c0c0" duration={0.5}>
      <Skeleton className="h-[663px] w-full sm:h-[432px] lg:h-[340px]" />
    </SkeletonTheme>
  );
};

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonProductDetails = () => {
  return (
    <div className="col-span-2 sm:col-span-1">
      <SkeletonTheme baseColor="#e0e0e0" highlightColor="#c0c0c0" duration={0.5}>
        <Skeleton className="h-8 max-w-[340px] mb-6" />
        <Skeleton className="h-7 max-w-[50px] mb-4" />
        <Skeleton className="h-5 w-full mb-1" />
        <Skeleton className="h-5 w-[90%] mb-1" />
        <Skeleton className="h-5 w-[80%] mb-1" />
        <Skeleton className="h-5 w-[10%] mb-4" />
        <Skeleton className="h-10 w-[132px]" />
      </SkeletonTheme>
    </div>
  );
};

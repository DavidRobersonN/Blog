import { SpinLoader } from "@/components/Spinloader";
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}

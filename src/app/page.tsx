import "tailwindcss";
import { SpinLoader } from "@/components/Spinloader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export default async function Home() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  );
}

"use client";

import { Header } from "@/components/layout/header";
import { Features } from "@/components/sections/features";
import { DiseaseMap } from "@/components/sections/disease-map";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Features />
      <DiseaseMap />
    </main>
  );
}
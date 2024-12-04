"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-24 pb-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container relative space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your Intelligent Health Assistant
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Track your health, monitor real-time disease hotspots, and stay informed with personalized recommendations.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download on iOS
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-5 w-5" />
              Download on Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
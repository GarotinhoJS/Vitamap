"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MapPin } from "lucide-react";

export function DiseaseMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Real-Time Disease Mapping</h2>
            <p className="text-muted-foreground">
              Stay informed about health risks in your area and around the world. Our interactive map provides real-time
              data on disease outbreaks and health trends.
            </p>
            <div className="space-y-2">
              <Card className="p-4 border-yellow-500/50 bg-yellow-500/10">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <p className="text-sm font-medium">High alert areas are marked in red</p>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <p className="text-sm font-medium">Safe zones are marked in green</p>
                </div>
              </Card>
            </div>
            <Button className="gap-2">
              <MapPin className="h-4 w-4" />
              Explore the Map
            </Button>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#30D5C8,#2C3E50)] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Interactive map visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
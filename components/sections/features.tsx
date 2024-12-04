import { Activity, Map, Brain, Calendar } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

export function Features() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Core Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Activity className="h-10 w-10" />}
            title="Health Monitoring"
            description="Track your vitals such as heart rate (BPM) and oxygen saturation (SpO2) using your phone's sensors."
          />
          <FeatureCard
            icon={<Map className="h-10 w-10" />}
            title="Disease Mapping"
            description="View an interactive global map highlighting disease hotspots, using real-time data from integrated health APIs."
          />
          <FeatureCard
            icon={<Brain className="h-10 w-10" />}
            title="Smart Recommendations"
            description="Receive health tips tailored to your vitals, location, and activity to improve your well-being."
          />
          <FeatureCard
            icon={<Calendar className="h-10 w-10" />}
            title="Medical Appointments"
            description="Book appointments with healthcare providers directly from the app, ensuring easy access to professional care."
          />
        </div>
      </div>
    </section>
  );
}
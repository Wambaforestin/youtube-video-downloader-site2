import { Shield, Video, History, Bell, Download, Users, AlertCircle, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "100% virus-free and family-friendly application",
  },
  {
    icon: Video,
    title: "Quality Options",
    description: "Choose your preferred video quality and format",
  },
  {
    icon: History,
    title: "Download History",
    description: "Keep track of your downloaded videos",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Get notified when downloads complete",
  },
  {
    icon: Download,
    title: "Batch Download",
    description: "Download multiple videos at once",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Safe for all family members to use",
  },
  {
    icon: AlertCircle,
    title: "Error Handling",
    description: "Clear error messages and solutions",
  },
  {
    icon: Settings,
    title: "Easy Setup",
    description: "Simple installation process",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Shield, Video, History, Bell, Download, Users, AlertCircle, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "100% virus-free application designed for family use",
    color: "text-green-500",
  },
  {
    icon: Video,
    title: "Quality Options",
    description: "Choose your preferred video quality and format",
    color: "text-blue-500",
  },
  {
    icon: History,
    title: "Download History",
    description: "Keep track of all your downloaded videos",
    color: "text-purple-500",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Get notified when downloads complete",
    color: "text-yellow-500",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Watch videos without internet connection",
    color: "text-red-500",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Safe interface for all family members",
    color: "text-indigo-500",
  },
  {
    icon: AlertCircle,
    title: "Smart Error Handling",
    description: "Clear error messages and solutions",
    color: "text-orange-500",
  },
  {
    icon: Settings,
    title: "Easy Setup",
    description: "Simple installation process for everyone",
    color: "text-teal-500",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Everyone
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to download and manage your YouTube videos offline
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn bg-white/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
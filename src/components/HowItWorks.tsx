import { Card } from "@/components/ui/card";
import { Download, Folder, Play, Wifi } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download & Install",
    description: "Get the application and follow our simple installation guide",
    color: "text-blue-500",
  },
  {
    icon: Folder,
    title: "Copy YouTube URL",
    description: "Copy the video URL you want to download and save",
    color: "text-green-500",
  },
  {
    icon: Play,
    title: "Paste & Download",
    description: "Paste the URL into the app and start downloading",
    color: "text-purple-500",
  },
  {
    icon: Wifi,
    title: "Watch Offline",
    description: "Enjoy your videos anytime - no internet needed",
    color: "text-orange-500",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Download your favorite YouTube videos in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -z-10" />
              <div className={`w-16 h-16 ${step.color} bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="absolute top-6 right-6 text-3xl font-bold text-gray-100">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
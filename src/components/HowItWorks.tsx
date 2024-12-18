import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Download & Install",
    description: "Download the application and follow the simple installation guide",
  },
  {
    number: "2",
    title: "Copy YouTube URL",
    description: "Copy the URL of the video you want to download",
  },
  {
    number: "3",
    title: "Paste & Download",
    description: "Paste the URL into the app and click download",
  },
  {
    number: "4",
    title: "Enjoy Offline",
    description: "Watch your videos anytime, anywhere - no internet required",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
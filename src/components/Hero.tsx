import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight animate-fadeIn">
            Download YouTube Videos
            <span className="block text-blue-600">Simply and Safely</span>
          </h1>
          <p className="text-xl text-gray-600 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            The family-friendly YouTube downloader for offline viewing in Africa. 
            Download videos and watch them anytime, anywhere - no internet required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button variant="outline" size="lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="pt-4 flex items-center justify-center gap-8 text-sm text-gray-500 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <span className="flex items-center">
              <Download className="mr-2 h-4 w-4" />
              100K+ Downloads
            </span>
            <span>Windows Compatible</span>
            <span>100% Safe & Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
};
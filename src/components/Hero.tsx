import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Download YouTube Videos Simply and Safely
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            The family-friendly YouTube downloader for offline viewing
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
          <p className="text-sm text-white/80 mt-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            100% Safe & Secure • Windows Compatible
          </p>
        </div>
      </div>
    </div>
  );
};
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-gray-600">
            Our support team is here to help you with any questions
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Contact Support</h3>
                <p className="text-gray-600">
                  Having issues or questions? Our support team is available 24/7 to assist you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">support@youtubedownloader.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white" />
                  <Input placeholder="Your Email" type="email" className="bg-white" />
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="h-32 bg-white" 
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Need Help?
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
                <p className="text-gray-600 mb-6">
                  Having issues or questions? Our support team is here to help you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span>support@youtubedownloader.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary mr-2" />
                    <span>Live chat available 24/7</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
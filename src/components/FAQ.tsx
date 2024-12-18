import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this application safe to use?",
    answer: "Yes, our application is 100% safe and virus-free. While Windows Defender might show a warning due to the application not being commercially signed, you can safely add an exception.",
  },
  {
    question: "What are the system requirements?",
    answer: "The application works on Windows computers with a stable internet connection for downloading videos. Minimal disk space is required for installation.",
  },
  {
    question: "Why does Windows Defender show a warning?",
    answer: "This occurs because the application isn't signed with a commercial certificate. It's a common occurrence with YouTube downloaders. You can safely add an exception in Windows Defender.",
  },
  {
    question: "How do I install the application?",
    answer: "Simply download the ZIP file, extract it to your preferred location, and run the executable. Follow the on-screen instructions for any Windows security prompts.",
  },
  {
    question: "Where are my downloaded videos saved?",
    answer: "By default, videos are saved in the 'videos' folder within the application directory. You can easily access them from there.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-earth-600 to-earth-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your BSF Farm Journey?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join the growing community of Filipino farmers and entrepreneurs turning food waste into opportunity. 
            Get access to resources, training materials, and connect with experienced BSF farmers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-earth-800 hover:bg-earth-100">
              Get Started Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-earth-700">
              Contact Us
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No prior farming experience required. We'll help you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

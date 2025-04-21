
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-earth-50 to-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-earth-200 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-soil-200 rounded-full opacity-20 blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center rounded-full border border-earth-200 bg-white/50 px-4 py-1.5 text-sm font-medium text-earth-700 backdrop-blur-sm">
              <Leaf size={16} className="mr-1.5 text-earth-500" />
              <span>Sustainable Agriculture Innovation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-soil-900 leading-tight">
              Transform Food Waste with <span className="text-earth-600">Black Soldier Fly Farming</span>
            </h1>
            <p className="text-lg md:text-xl text-soil-800 max-w-2xl">
              Join the growing movement of Filipino farmers turning organic waste into valuable resources using Black Soldier Fly larvae – a sustainable solution for waste management and protein production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-earth-500 hover:bg-earth-600">
                Start Your BSF Farm
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button size="lg" variant="outline" className="border-earth-300 text-soil-700 hover:bg-earth-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-earth-100 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80" 
                  alt="Food waste being processed into valuable resources" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-earth-100">
                      <Leaf className="h-5 w-5 text-earth-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-soil-900">Reducing Waste</h3>
                      <p className="text-sm text-soil-600">BSF larvae can process up to 70% of organic waste</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

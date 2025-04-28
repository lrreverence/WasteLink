import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Collect Food Waste",
      description: "Gather organic waste materials from households, restaurants, or markets that would otherwise end up in landfills."
    },
    {
      id: 2,
      title: "Prepare the Habitat",
      description: "Create a suitable environment for BSF using simple containers with proper drainage and protection from rain."
    },
    {
      id: 3,
      title: "Introduce BSF Eggs/Larvae",
      description: "Add BSF eggs or young larvae to the prepared waste, which will begin the breakdown process."
    },
    {
      id: 4,
      title: "Monitor Growth Cycle",
      description: "BSF larvae grow rapidly, consuming organic waste and converting it to valuable biomass in just 2 weeks."
    },
    {
      id: 5,
      title: "Harvest the Larvae",
      description: "Collect mature larvae which can be processed into high-protein feed for livestock, poultry, and fish."
    },
    {
      id: 6,
      title: "Utilize By-products",
      description: "The remaining frass (larval excrement) serves as an excellent organic fertilizer for crops."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soil-900 mb-4">
            How BSF Farming Works
          </h2>
          <p className="text-lg text-soil-700">
            Setting up a Black Soldier Fly farm is simple and can be done with minimal investment, 
            making it accessible for Filipino communities of all sizes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {steps.slice(0, 3).map((step) => (
                <div key={step.id} className="relative z-10">
                  <div className="bg-white mx-auto w-12 h-12 rounded-full flex items-center justify-center border-2 border-earth-500 mb-4">
                    <span className="text-earth-700 font-semibold">{step.id}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-soil-900 mb-2">{step.title}</h3>
                    <p className="text-soil-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.slice(3).map((step) => (
                <div key={step.id} className="relative z-10">
                  <div className="bg-white mx-auto w-12 h-12 rounded-full flex items-center justify-center border-2 border-earth-500 mb-4">
                    <span className="text-earth-700 font-semibold">{step.id}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-soil-900 mb-2">{step.title}</h3>
                    <p className="text-soil-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-earth-50 rounded-xl p-8 border border-earth-100">
            <h3 className="text-2xl font-bold text-soil-900 mb-4 text-center">Start Small, Scale Gradually</h3>
            <p className="text-soil-700 text-center max-w-3xl mx-auto">
              One of the advantages of BSF farming is that you can start with minimal investment and 
              scale up as you gain experience. A small pilot project can process several kilograms of waste per day 
              and provide valuable learning experience before expanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

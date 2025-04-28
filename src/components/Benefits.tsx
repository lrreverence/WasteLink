
import { Check } from "lucide-react";

const Benefits = () => {
  const benefitsList = [
    "Reduces food waste by up to 70%",
    "Creates valuable protein for animal feed",
    "Produces organic fertilizer as a byproduct",
    "Low startup costs compared to other farming",
    "Minimal space requirements - suitable for urban areas",
    "Creates local jobs and livelihood opportunities",
    "Decreases landfill use and methane emissions",
    "Promotes sustainable agriculture practices",
    "Offers additional income streams for farmers",
    "Helps meet the Philippines' growing protein demand",
    "Requires minimal water and energy input",
    "Supported by growing research and innovation"
  ];

  return (
    <section id="benefits" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soil-900 mb-4">
            Benefits of BSF Farming in the Philippines
          </h2>
          <p className="text-lg text-soil-700">
            Black Soldier Fly farming offers numerous advantages for Filipino communities, 
            from environmental sustainability to economic opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-1 bg-earth-100 rounded-full p-1">
                <Check className="h-4 w-4 text-earth-600" />
              </div>
              <p className="text-soil-800">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-earth-100 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-soil-900 mb-3">Perfect for the Philippine Climate</h3>
              <p className="text-soil-700 mb-4">
                The warm, humid climate of the Philippines creates ideal conditions for BSF farming 
                year-round, with minimal climate control requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-earth-500">•</div>
                  <p className="text-soil-700">Thrives in 24-30°C temperatures common across the country</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-earth-500">•</div>
                  <p className="text-soil-700">Naturally occurring species in the Philippines</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-earth-500">•</div>
                  <p className="text-soil-700">Can process locally available waste streams</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-earth-100">
                <img 
                  src="/bsfarm.jpg"
                  alt="Sustainable farming in the Philippines" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

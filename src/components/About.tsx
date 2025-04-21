
import { Globe, TreeDeciduous, Wheat } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soil-900 mb-4">
            What is Black Soldier Fly Farming?
          </h2>
          <p className="text-lg text-soil-700 max-w-3xl mx-auto">
            A sustainable approach to organic waste management that converts food waste into valuable products while helping the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-earth-50 rounded-xl p-6 border border-earth-100 hover:shadow-md transition-shadow">
            <div className="bg-earth-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Globe className="text-earth-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-soil-900 mb-2">Environmentally Friendly</h3>
            <p className="text-soil-700">
              BSF farming significantly reduces greenhouse gas emissions compared to traditional waste management methods while requiring minimal resources.
            </p>
          </div>

          <div className="bg-earth-50 rounded-xl p-6 border border-earth-100 hover:shadow-md transition-shadow">
            <div className="bg-earth-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <TreeDeciduous className="text-earth-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-soil-900 mb-2">Circular Economy</h3>
            <p className="text-soil-700">
              Creates a closed-loop system where waste becomes a valuable resource, reducing landfill use and creating new income streams for farmers.
            </p>
          </div>

          <div className="bg-earth-50 rounded-xl p-6 border border-earth-100 hover:shadow-md transition-shadow">
            <div className="bg-earth-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Wheat className="text-earth-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-soil-900 mb-2">Protein Production</h3>
            <p className="text-soil-700">
              BSF larvae are rich in proteins and fats, making them an excellent sustainable feed for poultry, fish, and other livestock in the Philippines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

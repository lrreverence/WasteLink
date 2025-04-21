
import { MapPin } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Maria Santos",
      location: "Batangas",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
      quote: "Starting my BSF farm has not only helped manage waste from our local market but has become a profitable venture providing feed for my chickens.",
      results: "Processing 50kg of food waste weekly"
    },
    {
      name: "Juan Reyes",
      location: "Cavite",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
      quote: "Our community BSF project has created jobs for five people and significantly reduced our village's organic waste problems.",
      results: "Reducing landfill waste by 60%"
    },
    {
      name: "Elena Cruz",
      location: "Laguna",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80",
      quote: "The fertilizer byproduct from our BSF operation has improved our vegetable farm's yield while cutting our feed costs for fish farming.",
      results: "Saving ₱3,000 monthly on feed costs"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-soil-900 mb-4">
            Success Stories from the Philippines
          </h2>
          <p className="text-lg text-soil-700">
            Meet Filipino farmers and entrepreneurs who have successfully implemented 
            BSF farming in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-earth-100">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={story.image}
                  alt={`${story.name}'s BSF farm`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-earth-500 mr-1" />
                  <span className="text-sm text-soil-600">{story.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-soil-900 mb-2">{story.name}</h3>
                <p className="text-soil-700 mb-4 italic">"{story.quote}"</p>
                <div className="bg-earth-100 rounded-lg py-2 px-3">
                  <p className="text-sm font-medium text-earth-700">{story.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-soil-700 mb-4">
            Join these successful BSF farmers and be part of the sustainable agriculture movement in the Philippines.
          </p>
          <h3 className="text-2xl font-bold text-soil-900">
            Your success story could be next!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

import Image from "next/image";

// Feature Section Component
const Feature = () => {
  return (
    <div className="bg-muted py-16 px-12 w-full flex flex-col items-center justify-center gap-5">
      {/* Section Header Button */}
      <button className="p-1 text-xs font-semibold text-neutral-900 bg-neutral-200 rounded-md">
        Features
      </button>

      {/* Section Title */}
      <h2 className="text-3xl">Revolutionize your workflow</h2>

      {/* Feature Content */}
      <div>
        <div className="grid grid-cols-2 gap-3">
          {/* Feature Block 1 */}
          <div className="flex flex-col justify-between space-y-6 bg-white rounded-lg shadow px-6 pb-6">
            {/* Image for Feature 1 */}
            <div className="flex items-center justify-center">
              <Image
                src={"/feature(1).png"}
                height={200}
                width={200}
                alt="feature-1"
              />
            </div>

            {/* Feature 1 Details */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold">24/7 Data Collection</h3>
              <p className="text-sm text-gray-600">
                By analyzing user interactions, AI can help businesses identify
                trends and patterns, making it easier to tailor products.
              </p>
              <button className="py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm">
                Get started
              </button>
            </div>
          </div>

          {/* Feature Block 2 */}
          <div className="flex flex-col justify-between space-y-6 bg-white rounded-lg shadow px-6 pt-6">
            {/* Feature 2 Details */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold">24/7 Data Collection</h3>
              <p className="text-sm text-gray-600">
                By analyzing user interactions, AI can help businesses identify
                trends and patterns, making it easier to tailor products.
              </p>
              <button className="py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm">
                Get started
              </button>
            </div>

            {/* Image for Feature 2 */}
            <div className="flex items-center justify-end">
              <Image
                src={"/feature(2).png"}
                className="w-full"
                height={200}
                width={200}
                alt="feature-2"
              />
            </div>
          </div>
        </div>

        {/* New Full-Width Card */}
        <div className="mt-2 w-full bg-white rounded-lg shadow-lg px-8 pb-8">
          {/* Image for the New Card */}
          <div className="flex justify-center">
            <Image
              src={"/feature(2).png"}
              height={300}
              width={500}
              alt="mockup"
              className="rounded-md"
            />
          </div>

          {/* Card Details */}
          <div className="mt-6 text-center space-y-4">
            <h3 className="text-2xl font-semibold">More Accurate Response</h3>
            <p className="text-sm text-gray-600 px-24">
              This advantage emphasizes how chat AI can provide faster and more
              accurate responses to user inquiries, improving overall efficiency
              and user satisfaction.
            </p>
            <button className="py-2 px-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

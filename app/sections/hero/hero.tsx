import Form from "./form";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-black px-8 pt-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 text-muted text-center">
        <div className="space-y-4">
          <button className="p-2 text-sm bg-neutral-900 rounded-md">Unique technology</button>
          <h1 className="text-4xl">Unleash the power of ai</h1>
          <p className="px-8 text-sm font-light text-gray-300">
            Frankie is a Ai-powered chatbot app that allows users to have
            conversations with a virtual assistant
          </p>
        </div>
        <div className="px-8">
          <Form />
        </div>
      </div>
      <Image
        className="size-full relative bottom-24"
        src={"/mockup.png"}
        height={400}
        width={400}
        alt="mockup"
      />
    </div>
  );
};

export default Hero;

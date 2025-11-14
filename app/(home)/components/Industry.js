import ContentImage from "./Content-Image";
import Dynamic from "./Dynamic";

import project from "@/public/Images/grp_1.webp";

export default function Industry() {
  return (
    <div className="px-6 md:px-16 py-16 bg-gray-100 flex flex-col gap-10">
      <Dynamic
        heading={"INDUSTRIES "}
        heading_1={"WE ARE SERVING"}
        button={"Explore All"}
        paragraph={
          "We are working with several industries to improve their businesses and experiences through technology. We have built many web and mobile applications for them."
        }
      />

      <ContentImage
        img={project}
        heading={" I n d u s t r y ."}
        heading_1={"HEALTH"}
        paragraph={
          "We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry."
        }
        button_2={"Read Details"}
        reverse
      />
      <ContentImage
        img={project}
        heading={" I n d u s t r y ."}
        heading_1={"HEALTH"}
        paragraph={
          "We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry."
        }
        button_2={"Read Details"}
      />
      <ContentImage
        img={project}
        heading={" I n d u s t r y ."}
        heading_1={"HEALTH"}
        paragraph={
          "We are helping and educating doctors and other people through our applications. Our app is ranked in the top five in the health category in Pakistan. We provide management systems to the health industry."
        }
        button_2={"Read Details"}
        reverse
      />
    </div>
  );
}

import Dynamic from "./Dynamic";
import project from "@/public/Images/project.webp";
import ContentImage from "./Content-Image";

export default function RecentProjects() {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-16 bg-gray-100">
      <div className="flex flex-col gap-10">
        <Dynamic
          heading="Recent Projects"
          heading_1="FROM OUR PORTFOLIO"
          button="View All Projects"
          paragraph="As we have delivered many web, mobile, and AI projects recently, the most recent project we have completed is given below."
        />

        <ContentImage
          img={project}
          heading={" I n d u z ."}
          heading_1={"AN INDUSTRY'S EMPLOYEES"}
          heading_2={"MANAGEMENT APPLICATION"}
          paragraph={
            "We have delivered numerous web, mobile, UI/UX, and AI projects recently, and the most recent project we have completed is detailed below."
          }
          button_1={"Read Case Study"}
          button_2={"Contact Us"}
        />
      </div>
    </section>
  );
}

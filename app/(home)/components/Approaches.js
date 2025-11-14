import Card from "@/components/Card";
import Dynamic from "./Dynamic";
import approachData from "./approachesData";

export default function Approaches() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-200">
      <Dynamic
        heading={"OUR APPROACHES"}
        heading_1={"TO SOLVE A PROBLEM"}
        button={"Read Details"}
        paragraph={
          "We at Encoderbytes follow every possible method to solve problems for our clients and help them in their businesses."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {approachData.map((approach, index) => (
          <Card
            key={index}
            number={approach.number}
            image={approach.image}
            heading={approach.heading}
            heading_1={approach.heading_1}
            paragraph={approach.paragraph}
            width="100%"
          />
        ))}
      </div>
    </section>
  );
}

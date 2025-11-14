import Card from "@/components/Card";
import cardData from "./CardData";
import Dynamic from "./Dynamic";

export default function Solution() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-100">
      <Dynamic
        heading={"WE PROVIDE THE EXEMPLARY"}
        heading_1={"IT SOLUTIONS"}
        button={"View All Projects"}
        paragraph={
          "Encoder Bytes (Pvt.) Ltd. is a leading software development company. We build robust software for startups and established businesses since 2019."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            image={card.image}
            heading={card.heading}
            heading_1={card.heading_1}
            paragraph={card.paragraph}
            width="100%"
          />
        ))}
      </div>
    </section>
  );
}

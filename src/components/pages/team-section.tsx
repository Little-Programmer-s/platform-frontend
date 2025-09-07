import { Card, Carousel } from "@/components/ui/apple-cards-carousel";

const data = [
    {
        category: "CEO",
        title: "Habib Behdarvandi",
        src: "/assets/images/Habibetoon.jpg",
        content: "",
    },
    {
        category: "CIO",
        title: "Amirhossein Amiri",
        src: "/assets/images/Amiri.jpg",
        content: "",
    },
    {
        category: "CTO",
        title: "Mohammad Hossein Alidadi Talkhestani",
        src: "/assets/images/talkhestani.jpg",
        content: "",
    },
];


export default function TeamSection() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="container max-w-7xl mx-auto c-space mt-32">
            <h1 className="text-center text-5xl font-bold mb-4">Team  <span className="text-lavender">members</span></h1>
            <Carousel items={cards} />
        </div>
    )
}

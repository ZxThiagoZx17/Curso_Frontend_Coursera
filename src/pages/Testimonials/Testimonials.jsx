import "./Testimonials.css";
import TestimonialCard from "./components/TestimonialCard";

const customers = [
  {
    fullName: "Anthony",
    image:
      "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0.5],
    says: "The ambiance at Little Lemon is simply enchanting. The Greek Salad was fresh and flavorful, and the Lemon Basil Pasta was the perfect light dish. A true gem!",
  },
  {
    fullName: "Mary",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0],
    says: "Fantastic dining experience! The Spiced Veggie Skewers were packed with flavor, and the Lemon Dessert was a perfect ending. The service was top-notch. Highly recommend!",
  },
  {
    fullName: "John",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 0.5],
    says: "Little Lemon offers a cozy, welcoming atmosphere. The dishes, especially the Lemon Basil Pasta, were delightful. Great place for a casual yet delicious meal.",
  },
  {
    fullName: "Sarah",
    image:
      "https://images.unsplash.com/photo-1581714161666-dade083654ae?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: [1, 1, 1, 1, 1],
    says: "A wonderful spot for Mediterranean cuisine. The Greek Salad and Lemon Dessert were standout favorites. Excellent service and a charming setting make it a must-visit!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Testimonials</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

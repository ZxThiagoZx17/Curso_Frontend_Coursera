import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonBasilImage from "./assets/lemon-basil.jpg";
import spicedVeggieImage from "./assets/spiced-veggie.jpg";
import lemonDessertImage from "./assets/dessert.jpg";
import "./WeekSpecials.css";
import MealCard from "./components/MealCard";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$10.00",
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary
      croutons.`,
  },
  {
    name: "Lemon Basil Pasta",
    image: lemonBasilImage,
    price: "$6.79",
    description: `Indulge in our Lemon Basil Pasta, a delightful and refreshing take on a classic favorite. This dish features perfectly cooked al dente spaghetti tossed in a light and zesty lemon-infused sauce.`,
  },
  {
    name: "Spiced Veggie Skewers",
    image: spicedVeggieImage,
    price: "$8.50",
    description: `To elevate the taste experience, we've drizzled these skewers with a tangy and savory sauce made from a blend of fresh herbs, garlic, lemon juice, and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$8.50",
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft*2 + clientWidth < scrollWidth);
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="week-specials-container">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <HashLink className="button-primary" to="/orderOnline">
          Online Menu
        </HashLink>
      </div>
      <div className="week-specials" ref={scrollRef}>
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
      <div className="scroll-buttons">
        {showLeftArrow && (
          <button
            className="scroll-button scroll-button-left"
            aria-label="Scroll Left"
            onClick={handleScrollLeft}
          >
            &lt;
          </button>
        )}
        {showRightArrow && (
          <button
            className="scroll-button scroll-button-right"
            aria-label="Scroll Right"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        )}
      </div>
    </section>
  );
};

export default WeekSpecials;

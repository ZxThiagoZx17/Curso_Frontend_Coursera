import React, { useState } from "react";
import "./OrderOnline.css";
import ItemDetail from "./components/ItemDetail";
import greekSaladImage from "../WeekSpecials/assets/greek-salad.jpg";
import lemonBasilImage from "../WeekSpecials/assets/lemon-basil.jpg";
import spicedVeggieImage from "../WeekSpecials/assets/spiced-veggie.jpg";
import lemonDessertImage from "../WeekSpecials/assets/dessert.jpg";

const foodSections = [
  {
    header: "Salads",
    items: [
      {
        title: "Greek Salad",
        description:
          "The famous Greek salad of crispy lettuce, vibrant peppers, briny olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$10.00",
        image: greekSaladImage,
      },
    ],
  },
  {
    header: "Pastas",
    items: [
      {
        title: "Lemon Basil Pasta",
        description:
          "Indulge in our Lemon Basil Pasta, a delightful and refreshing take on a classic favorite. This dish features perfectly cooked al dente spaghetti tossed in a light and zesty lemon-infused sauce with fresh basil.",
        price: "$6.79",
        image: lemonBasilImage,
      },
    ],
  },
  {
    header: "Vegetarian Skewers",
    items: [
      {
        title: "Spiced Veggie Skewers",
        description:
          "To elevate the taste experience, we've drizzled these skewers with a tangy and savory sauce made from a blend of fresh herbs, garlic, lemon juice, and olive oil. Each skewer is loaded with a colorful medley of vegetables, perfectly grilled and seasoned.",
        price: "$8.50",
        image: spicedVeggieImage,
      },
    ],
  },
  {
    header: "Desserts",
    items: [
      {
        title: "Lemon Dessert",
        description:
          "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined. Enjoy a refreshing and zesty lemon flavor that will take you back to the comfort of home.",
        price: "$8.50",
        image: lemonDessertImage,
      },
    ],
  },
];
const OrderOnline = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <div className="App">
      <h1>Menu</h1>
      <div className="food-card-list">
        {foodSections.map((section, index) => (
          <div key={index} className="food-section">
            <h2 className="food-section-header">{section.header}</h2>
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="food-card"
                aria-label="On Click"
                onClick={() => handleClick(item)}
              >
                <div className="food-card__content">
                  <h3 className="food-card__title">{item.title}</h3>
                  <p className="food-card__description">{item.description}</p>
                  <p className="food-card__price">{item.price}</p>
                  <div className="food-card__line"></div>{" "}
                  {}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedItem && (
        <ItemDetail item={selectedItem} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default OrderOnline;

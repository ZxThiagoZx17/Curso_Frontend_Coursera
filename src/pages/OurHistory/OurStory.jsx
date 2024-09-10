import chefsMarioAndAdrian1Img from "./assets/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "./assets/chefs-mario-and-adrian_2.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
          Welcome to Little Lemon, where Mediterranean flavors come to life.
          Founded in 1995 by Maria and Antonio Rossi, our restaurant was born
          from a love for authentic, vibrant cuisine. Inspired by family recipes
          and a passion for fresh ingredients, Little Lemon offers a warm,
          inviting atmosphere where each dish tells a story. From our crisp
          Greek Salad to our zesty Lemon Basil Pasta, every plate is crafted
          with care. Our Spiced Veggie Skewers and delightful Lemon Dessert are
          just a few highlights of our menu. Thank you for joining us on this
          flavorful journey. At Little Lemon, every meal is a celebration of
          tradition and taste.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
        <img src={chefsMarioAndAdrian2Img} alt="Chefs Mario and Adrian #2" />
      </div>
    </section>
  );
};

export default OurStory;

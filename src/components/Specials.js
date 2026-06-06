import { useState } from "react";

function Specials() {
  const [specialsItems] = useState([
    {
      id: 1,
      title: "Greek Salad",
      des: "Fresh lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: 12.99,
      image: "./icons_assets/greek salad.jpg"
    },
    {
      id: 2,
      title: "Bruschetta",
      des: "Grilled bread topped with garlic, fresh tomatoes, olive oil and basil. A classic Italian appetizer loved by our guests.",
      price: 7.99,
      image: "./icons_assets/bruchetta.svg"
    },
    {
      id: 3,
      title: "Lemon Dessert",
      des: "A traditional homemade lemon cake with a rich citrus flavor, served fresh daily by our talented chefs.",
      price: 5.99,
      image: "./icons_assets/lemon dessert.jpg"
    }
  ]);

  return (
    <section>
      <div className="special-top-content">
        <h1>This Week Specials</h1>
        <button className="button">Online Menu</button>
      </div>
      <div className="special-img-container">
  {specialsItems.map((item) => (
    <div className="special-card-box" key={item.id}>
      <img src={item.image} alt={item.title} />

      <div className="card-content">
        <div className="card-header">
          <h3>{item.title}</h3>
          <span>${item.price}</span>
        </div>

        <p>{item.des}</p>

        <button>Order a Delivery</button>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}

export default Specials;
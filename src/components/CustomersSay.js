function CustomersSay() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Amazing food and excellent service. The Greek Salad was absolutely delicious.",
      image: "./icons_assets/img_2.png",
    },
    {
      id: 2,
      name: "John D.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Best Mediterranean restaurant in town. Will definitely visit again.",
      image: "./icons_assets/img2-.png",
    },
    {
      id: 3,
      name: "Emily R.",
      rating: "⭐⭐⭐⭐",
      review:
        "Beautiful atmosphere and friendly staff. Highly recommended.",
      image: "./icons_assets/imge_1.png",
    },
    {
      id: 4,
      name: "Michael K.",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Fresh ingredients and quick service. Loved the lemon dessert.",
      image: "/icons_assets/img-5.png",
    },
  ];

  return (
    <section className="testimonials">
      <h1>What Our Customers Say!</h1>

      <div className="testimonial-container">
        {reviews.map((review) => (
          <div className="testimonial-card" key={review.id}>
            <h3>{review.rating}</h3>

            <img src={review.image} alt={review.name} />

            <h4>{review.name}</h4>

            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";

const reviews = [
    {
        image: client1,
        name: "Ananya Sharma",
        rating: "⭐⭐⭐⭐⭐",
        review: "Amazing experience! Everything was perfectly organized.",
    },
    {
        image: client2,
        name: "Aditi Joshi",
        rating: "⭐⭐⭐⭐⭐",
        review : "Very smooth booking process. I loved the Goa Package.",
    },
    {
        image: client3,
        name: "Aman Verma",
        rating: "⭐⭐⭐⭐☆",
        review : "Great experience. Hotel and  transport were excellent.",
    },
];
function  Testimonials(){
    return (
        <section className ="testimonials">
            <h2>What Our Travelers Say</h2>

            <div className="testimonial-container">
                {reviews.map ((review, index) => (
                    <div className ="testimonial-card" key={index}>
                        <img
                            src={review.image}
                            alt={review.name}
                            className="client-img"
                        />
                        <h3>{review.name}</h3>

                        <div className="rating">
                            {review.rating}
                            </div>

                        <p>"{review.review}"</p>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
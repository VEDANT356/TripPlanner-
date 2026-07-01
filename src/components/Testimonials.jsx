const reviews = [
    {
        name: "Rahul Sharma",
        rating: "⭐⭐⭐⭐⭐",
        review: "Amazing experience! Everything was perfectly organized.",
    },
    {
        name: "Priya Patel",
        rating: "⭐⭐⭐⭐⭐",
        review : "Very smooth booking process. I loved the Goa Package.",
    },
    {
        name: "Aman Verma",
        rating: "⭐⭐⭐⭐☆",
        review : "Great experience. Hotel and  transport were excellent.",
    },
];
function  Testimonials(){
    return (
        <section className ="testimonials">
            <h2>What Our Travelers Say</h2>

            <div className=".testimonial-container">
                {reviews.map ((review, index) => (
                    <div className ="testimonial-card" key={index}>
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
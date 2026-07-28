import "../styles/Wishlist.css"
import { useEffect, useState } from "react";

const Wishlist =() =>{
    const [wishlist ,setWishlist] = useState([]);
    
    useEffect(() => {
        const savedWishlist =JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];
        setWishlist(savedWishlist);
    }, []);

    const removeWishlist = (id) => {

        const updatedWishlist = wishlist.filter(
        (item) => item.id !== id
    );
        setWishlist(updatedWishlist);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(updatedWishlist)
        );
    };

    return (
        <div className="Wishlist-page">
            <h1>My Wishlist</h1>

            {
                wishlist.length === 0 ? (
                    <h2>No wishlist yet</h2>
                ) : (
                    <div className=" wishlist-grid">
                        {
                            wishlist.map((place)=>(
                                <div className="wishlist-card"
                                    key={place.id}
                                >
                                    <img
                                        src={place.image}
                                        alt={place.name}
                                    />

                                    <h2>{place.name}</h2>

                                    <p>
                                        {place.price}
                                    </p>

                                    <button
                                            onClick={() =>
                                                removeWishlist(place.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Wishlist;
"use client"
import { useRouter } from 'next/navigation'
import React from "react";


interface ListingCardProps {

    data: string

}
const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
    let router = useRouter()
    const handleCardRoute = (category: string) => {
        console.log(category);
        router.push(`/Used-cars/${category}`);
    };
    

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        handleCardRoute(data);
    };

    return (
        <div className="card" onClick={() => { handleCardRoute(data) }}>
            <img src="https://i.ibb.co/X4HVQ63/Vintage-2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="nav-link" href={`/Used-cars/${data}`}>Checkout</a>
            </div>
        </div>
    );
}

export default ListingCard
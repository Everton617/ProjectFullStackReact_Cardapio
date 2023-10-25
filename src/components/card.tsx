import "./card.css"

interface CardProps{
    price: number,
    title: string,
    description: string,
    image: string
}

export function Card({price, image, description, title} : CardProps){
    return(
        <div className="card">
        <img src={image}/>
        <h2>{title}</h2>
        <span>{description}</span>
        <p>R$ {price},00</p>
    </div>
    )
}
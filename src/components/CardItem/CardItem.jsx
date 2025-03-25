import {Card} from './CardItem.styled'; 
import {CardQuantity} from './CardItem.styled'; 

export const CardItem = ({item}) => {
    const total = item.quantity * item.price;

    return (
        <Card>
            <p>{item.name}</p>
            <p>{item.price}</p>

            <CardQuantity>
                <button>-</button>
                <p>{item.quantity}</p>
                <button>+</button>
            </CardQuantity>

            <p>{total}</p>
            <button>x</button>
        </Card>
    )
}
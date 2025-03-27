import { Card } from "components/CardItem/CardItem.styled"
import { CardList } from "components/CardList/CardList"
import { InputForm } from "components/InputForm/InputForm"
import { Loader } from "components/Loader/Loader"
import { TotalAmount } from "components/TotalAmount/TotalAmount"

const initialState = [
    {
        id: "1",
        name: "PEUGEOT- LR01",
        price: 1999,
        quantity: 1,
        image: '../images/puegeot.png'
    },
    {
        id: "2",
        name: "PILOT - CHROMOLY 520",
        price: 3999,
        quantity: 1,
        image: '../images/pilot.png'
    },
    {
        id: "3",
        name: "SMITH - Trade",
        price: 120,
        quantity: 1,
        image: '../images/helmet.png'
    },
    {
        id: "4",
        name: "ELECTRIC BICYCLE",
        price: 5999,
        quantity: 1,
        image: '../images/gray.png'
    }
]

export const Container = () => {
    return (
        <div>
            <InputForm/>
            <Loader/>
            <CardList items={initialState}/>
            <TotalAmount items={initialState}/>
            <Card/>
        </div>
    )
}
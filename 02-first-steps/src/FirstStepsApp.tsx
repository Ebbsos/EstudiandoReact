import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {

    return (//regresa un objeto
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name='Nintendo' quantity={1} />
            <ItemCounter name='Iphone' quantity={2} />
            <ItemCounter name='Samsung' quantity={3}/>
        </>)
}
import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {

    return (//regresa un objeto
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name='Nintendo' />
            <ItemCounter name='Iphone' />
            <ItemCounter name='Samsung' />
        </>)
}
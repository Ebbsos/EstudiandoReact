import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
     productName: string;
     quantity: number;
}

const ItemsInCart: ItemInCart[] =[
 {
  productName: 'ELIAS',
  quantity:1,
 },
 {
  productName:'Evelyn',
  quantity: 2,

 }, 
 {productName:'ELIAS',
    quantity: 3
 }

]

export function FirstStepsApp() {

    return (//regresa un objeto
     /*    
            <h1>Carrito de compras</h1>
            <ItemCounter name='Nintendo' quantity={1} />
            <ItemCounter name='Iphone' quantity={2} />
            <ItemCounter name='Samsung' quantity={3}/>
        */
    <>
     
    {
     ItemsInCart.map(({productName, quantity})=>(
     <ItemCounter key={productName} name={productName} quantity={quantity}/>

     )
        
     )

    }

     </>
    )
}
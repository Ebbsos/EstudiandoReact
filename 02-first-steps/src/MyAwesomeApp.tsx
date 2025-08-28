import type { CSSProperties } from "react";

const firstName = 'Eve';
const lastName = 'Sosa';
const letters = ['a', 'b', 'c', 'd']
const isActive = true;

const mascota = {
    nombre: 'Gris',
    sexo: 'Hembra',
    años: 25
}
const myStyles: CSSProperties = {

    backgroundColor: 'greenyellow',
    borderRadius: 10,
    padding: 10

}
export const MyAwesomeApp = () => {
    return (
        <>
            <h1>{firstName}</h1>
            <p>{lastName}</p>
            <p>{letters.join(',')}</p>
            <p>{2 + 2}</p>
            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
            <h1>Nombre: {mascota.nombre}</h1>
            <p style={myStyles} >{JSON.stringify(mascota)}</p>
        </>
    );
}
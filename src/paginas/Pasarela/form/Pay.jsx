import styles from './Form.module.css'
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

const Pay = ({formData}) => {

    const carritoById = useSelector(state=>state.carritoById)


    const createPreference = async () => {
        const totalcarrito = carritoById?.reduce((valorAnterior, valorActual) => {
            return valorAnterior + (valorActual.precio * valorActual.cantidad);
        }, 0);
        try {
            
            const response = await axios.post('https://servicie-fixer.onrender.com/users/mercadopago', {
                description: "Compra FixerShoes",
                price: totalcarrito,
                quantity: 1,
                name: formData.name,
                lastName: formData.lastName,
                phoneNumber: formData.phoneNumber,
                dni: formData.dni,
                place: formData.place,
            });

            window.location.href = response.data.response.body.init_point;

        } catch (error) {
            
            return alert(error);
        }
    };


    return ( 
        <>
        <div className={styles.pay}>

            <button className={styles.btn} onClick={createPreference} >Ir a Pagar</button>

        </div>
        </>
     );
}
 
export default Pay;
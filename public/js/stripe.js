/* eslint-disable */
import axios from 'axios';
import {showAlert} from './alerts'
const stripe = Stripe('pk_test_51IgC6zKZS99F4PJhjTF2O7Y3tTqNTjx2JOJkOG9wOhABiJfzJMEZ0FVOUkJnLyk69SCGWEbNxtUO7HMWIMyYcUlV00zWpHkbkm')

export const bookTour = async tourId => {
    try{
    // 1) Get check out session from API
    const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session)
    // 2) Create checkout form +chance the credit card 

    await stripe.redirectToCheckout({
        sessionId:session.data.session.id
    })
}catch(err) {
    console.log('error',err)
}

}

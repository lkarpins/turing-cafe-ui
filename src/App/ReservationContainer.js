import React from 'react';
import ReservationCard from './ReservationCard';
import './ReservationContainer.css'


const ReservationContainer = ({reservations}) => {
    const resCards = reservations.map(reservation => {
        return (
            <ReservationCard 
                id={reservation.id}
                key={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number} 
            />
        )
    })
    return (
        <div className='reservation-container'>
            {resCards}
        </div>

    )
}
export default ReservationContainer; 
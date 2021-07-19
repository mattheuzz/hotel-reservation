import './reservation.css'
import { ButtonReservation } from "../button/button"
import { ReservationDescription } from "./reservation"

export const ReservationBox = () =>{
    return(
        <div className="txt">
            <h1 className="title">Stanley Hotel</h1>
            
            <ReservationDescription />

            <ButtonReservation />
      </div>
    )
}
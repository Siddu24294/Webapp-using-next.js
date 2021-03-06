import Flight from "./Flight";
import AccommodationCheckIn from "./AccommodationCheckIn";
import Restaurant from "./Restaurant";
import AccommodationCheckOut from "./AccommodationCheckOut";

export default function Itinerary({itinerary}) {
    return (
        <>
            <div className="itinerary">
                {itinerary.flights.map(flight => (
                    <Flight
                        departureTime={flight.departureTime}
                        arrivalTime={flight.arrivalTime}
                        date={flight.date}
                        origin={flight.origin}
                        destination={flight.destination}
                        key={flight.confirmation}
                    />
                ))}

                {itinerary.accommodation.map(place => (
                    <AccommodationCheckIn
                        startDate={place.startDate}
                        checkInTime={place.checkInTime}
                        name={place.name}
                        address={place.address}
                    />
                ))}

                {itinerary.restaurants.map(res => (
                    <Restaurant
                        time={res.time}
                        date={res.date}
                        name={res.name}
                        address={res.address}
                    />
                ))}

                {itinerary.accommodation.map(place => (
                    <AccommodationCheckOut
                        endDate={place.endDate}
                        checkOutTime={place.checkOutTime}
                        name={place.name}
                        address={place.address}
                    />
                ))}


            </div>
            <style jsx>{`
              .itinerary {
                display: flex;
                flex-direction: column;
                grid-gap: 18px;
                padding: 18px 0;
                width: 150%;
              }
            `}</style>
        </>
    )
}
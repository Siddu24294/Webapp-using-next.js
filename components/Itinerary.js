import Flight from "./Flight";

export default function Itinerary({itinerary}) {
    return (
        <>
            <div className="itinerary">
                {itinerary.flights.map(flight => (
                    <Flight
                        departureTime={flight.departureTime}
                        arrivalTimw={flight.date}
                        date={flight.date}
                        origin={flight.origin}
                        destination={flight.destination}
                        key={flight.confirmation}
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
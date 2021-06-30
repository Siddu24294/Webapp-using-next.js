import InformationContainer from "./InformationContainer";

export default function Flight({departureTime,arrivalTime,date,origin,destination}){
    return (
        <>
            <InformationContainer
                icon="✈"
                upperDescription={`${date} ${departureTime} ${origin}`}
                lowerDescription={`${date} ${arrivalTime} ${destination}`}
            />
        </>
    )
}
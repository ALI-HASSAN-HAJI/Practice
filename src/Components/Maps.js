import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:
        "AIzaSyDmTmZPHdsCgJ4janeMsYMKyTaJfHogD1E"
    });
    if(!isLoaded) return <div>Loading...........</div>
    return(
        <div>
            
            <h1>Practice how to add a map to you are website</h1>
            <GoogleMap zoom={10} center={{
                lat: 3.114050, 
                lng: 43.651925}}
            mapContainerStyle={styles.containerstyle}>

            </GoogleMap>

        </div>
    )
}
const styles = {
    containerstyle: {
        height: '400px',
        width: '100%',
    }
}

export default Maps;
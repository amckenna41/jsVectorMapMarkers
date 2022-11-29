function getCityMarkerLatLng(city) {
    
    //validate input var is of type string
    if (typeof city !== 'string') {
        return [];
    }
    
    //replace various characters and any accents from string to normalize it, trim to remove leading whitespace
    city = city.toLowerCase().replace('&', 'and').replace('st.', 'saint').replace('u.s.', 'us').trim();
    city = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    var markerCoords=[];
    
    //iterate over all cases of switch statment, return lat long coords of matching country/jurisdiction
    switch(city) {

        case "london":
            markerCoords = []
        break;
        case "new york":
            markerCoords = [] 
        break;

    }

    return markerCoords;
}

function getAllMarkers() {

    allMarkers = [
        {"name": "London", "country": "GB"},
        {"name": "New York", "country": "US"},
    ]
}

var allMarkers = [];
var allMarkerNames = [];
var fullAddress;
var lat;
var lng;

//load URL string to results form
window.addEventListener('load', () => {
    //use location.search to read from URL
    const params = new URLSearchParams(location.search);

    //print out params in console
    console.log(params.toString());

    //get value form params according to the name of each input
    var firstname = params.get('firstname');
    var lastname = params.get('lastname');
    var title = params.get('title');
    var height = params.get('height');
    var phone = params.get('phone');
    var address = params.get('address');
    var city = params.get('city');
    var state = params.get('state');
    var zip = params.get('zip');
    var service = params.getAll('service');
    var budget = params.get('budget');
    var email = params.get('email');


    //use innerHTML to fill span in result page
    document.getElementById('result-first').innerHTML = firstname;
    document.getElementById('result-last').innerHTML = lastname;
    document.getElementById('result-title').innerHTML = title;
    document.getElementById('result-height').innerHTML = height;
    document.getElementById('result-phone').innerHTML = phone;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-city').innerHTML = city;
    document.getElementById('result-state').innerHTML = state;
    document.getElementById('result-zip').innerHTML = zip;
    document.getElementById('result-service').innerHTML = service;
    document.getElementById('result-budget').innerHTML = budget;
    document.getElementById('result-email').innerHTML = email;

    //combine user's address, city, state
    fullAddress = address+city+state;
    //coor发生在map前，这个map使用response from callback的response
    initMap();
})

function getCoordinates(){
    console.log('coor');
    var location = '22 Main st Boston MA';

    //apply geocoding API
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
            address:location,
            key:'AIzaSyD73uJcWWHFE-mH05UhTNBAhVGU83a2TJw'
        }
    })
    .then(function(response){
        console.log(response);

        //get geometry of user's address
        lat = response.data.results[0].geometry.location.lat;
        lng = response.data.results[0].geometry.location.lng;
    })
    .catch(function(error){
        console.log(error);
    });
}

function initMap() {
    console.log('init');
    //get geometry of user's address
    getCoordinates();

    //convert string to float
    var latFloat = parseFloat(lat);
    var lngFloat = parseFloat(lng)

    // The location of Uluru
    const uluru = { lat: latFloat, lng: lngFloat };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
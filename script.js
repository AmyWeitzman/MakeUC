function getWeight() {
    var object = document.getElementById('objects').value;
    var planet = document.getElementById('planets').value;

    var origWeight = null;  // grams
    switch(object) {
        case 'apple':
            origWeight = 85;
            break;
        case 'paperclip':
            origWeight = 1;
            break;
        case 'baseball':
            origWeight = 150;
            break;
        case 'schoolbus':
            origWeight = 11000000;
            break;
        case 'brick':
            origWeight = 3000;
            break;
        default:     
    }

    var weight = null;
    switch(planet) {
        case 'mercury':
            weight = (origWeight / 9.8) * 3.7;
            break;
        case 'venus':
            weight = (origWeight / 9.8) * 8.87;
            break;
        case 'earth':
            weight = origWeight;
            break;
        case 'mars':
            weight = (origWeight / 9.8) * 3.711;
            break;
        case 'jupiter':
            weight = (origWeight / 9.8) * 24.79;
            break;
        case 'saturn':
            weight = (origWeight / 9.8) * 10.44;
            break;
        case 'uranus':
            weight = (origWeight / 9.8) * 8.69;
            break;
        case 'neptune':
            weight = (origWeight / 9.8) * 11.15;
            break;
        default:
    }

    document.getElementById('weight').innerHTML = weight + " g"
}
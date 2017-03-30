/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

function getRandomArrayElement(a) {
	var randomElementIndex = Math.floor(Math.random()*(a.length));
	return a[randomElementIndex];
}

function generateRandomAddress() {
	var street_number = [232, 12, 2, 503, 934, 203, 1, 34, 94, 2, 38];
	var street_name = ['John', 'Main', '2nd', 'Mission', 'Valencia', 'Castro', 'Powell'];
	var city_name = ['New York', 'Seattle', 'Austin', 'Chicago', 'Boston', 'Edmonton', 'Houston', 'Los Angeles'];
	var state_name = ['NY', 'WA', 'TX', 'IL', 'MA', 'AB', 'CA', 'FL'];
	var zip_code = [85533, 34342, 56545, 34502, 94022, 34888, 23098, 64344];

	var address = getRandomArrayElement(street_number) + " "
				  + getRandomArrayElement(street_name) + " Street, "
				  + getRandomArrayElement(city_name) + " "
				  + getRandomArrayElement(state_name) + ", "
				  + getRandomArrayElement(zip_code);

    var div = document.getElementById("textDiv");

    div.innerHTML = "<b>" + address + "</b>";
}


window.onload = generateRandomAddress;




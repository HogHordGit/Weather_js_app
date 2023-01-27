export const getData = (city) => 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=900c6ea1f9026a3abcf6c1620274ebbe&units=metric&lang=en`)
	.then((res) => res.json());


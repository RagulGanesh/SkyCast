// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('jokeElement');

//         jokeElement.innerHTML = jokeText;
//     })
// require('dotenv').config()
fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=94cd13c4ea4f1ab4c52c9e64bc783f00&units=metric')
    .then(data => data.json())
    .then(weatherData => {
        const tempData = weatherData.main.temp;
        console.log(weatherData)
        const jokeElement = document.getElementById('temp');
        jokeElement.innerHTML = tempData+"<br>Feels Like"+weatherData.main.feels_like;
    })

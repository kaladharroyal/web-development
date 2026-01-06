const callerFunction = () => {
  const searchInput = document.getElementById("SearchInput").value.trim(); //trim whitespace
  const error = document.getElementById("error");
  const output = document.getElementById("output");
  error.innerText = "";
  output.innerText = "";

  if (!searchInput) {
    error.innerHTML = "<p>Please enter a city name.</p>";
    error.style.color = "red";
    return;
  }
  console.log("${searchInput}");
  fetchData(searchInput);
};

const fetchData = async (city) => {
  const apiKey = "4118b5096349c671da2fceb6b06b9c76";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  if (!response.ok) {
    alert("City not found");
    return;
  }
  const weatherData = await response.json();
  displayData(weatherData);
};

const displayData = (data) => {
  const output = document.getElementById("output");
  const error = document.getElementById("error");
  error.innerText = "fetch successful";
  error.style.color = "green";
  const temp = Math.floor(data.main.temp);
  setTimeout(() => {
    error.innerText = "";
    output.innerHTML = `<h1>${data.name}</h1>
    <p>temperature: ${temp} °C</p>
    <p>weather: ${data.weather[0].description}</p>
    <p>humidity: ${data.main.humidity}%</p>
    <p>country: ${data.sys.country}</p>
    <p>wind speed: ${data.wind.speed} m/s</p>`;
  }, 1000);
};

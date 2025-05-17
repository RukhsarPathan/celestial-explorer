const planets = [
  {
    name: "Mercury",
    image: "https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?resize=600,338",
    facts: [
      "Closest planet to the Sun, and the smallest in the solar system.",
      
      "Average Temp: 167°C (day), -173°C (night)",
      "Atmosphere: Very thin – oxygen, sodium, hydrogen",
      "Habitability: ❌ No — too hot/cold, no atmosphere for life"
    ]
  },

  {
    name: "Venus",
    image: "https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?resize=600,338",
    facts: [
      "Hottest planet with toxic clouds.",
      "Average Temp: 464°C",
      "Atmosphere: Mostly CO₂ & sulfuric acid",
      "Habitability: ❌ No — extreme heat, unlivable"
    ]
  },
  {
  name: "Earth",
  image: "https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?resize=600,338",
  facts: [
    "The only known planet that supports life and liquid water.",

    "Average Temperature: 15C.",
    "Atmosphere: Nitrogen, oxygen, trace gases",
    "Habitability: ✅ Yes — life exists in many forms." 
  ]
},

{
  name: "Mars",
  image: "https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?resize=600,338",
  facts: [
    "Fact: Known as the Red Planet; may have had water in the past." ,
    "Average Temperature: -63°C.",
    "Atmosphere: Mostly CO₂." ,
    "Habitability: 🌱 Possibly in the future — has water ice and seasonal methane."
    
  ]
},

{
  name: "Jupiter",
  image: "https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?resize=600,338",
  facts: [
    "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system.",
     "Average Temperature: -145°C.",
     "Atmosphere: Hydrogen and helium.", "Habitability: ❌ No — but some moons (like Europa) may support life"
    
  ]
},

{
  name: "Saturn",
  image: "https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?resize=600,200",
  facts: [
    "Fact: Known for its stunning rings; second largest planet.",
    "Average Temperature: -178°C.", 
    "Atmosphere: Hydrogen and helium.","Habitability: ❌ No — but Titan, its moon, is being studied for habitability"
    
  ]
},
{
  name: "Uranus",
  image: "https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?resize=600,338",
  facts: [
    "Uranus is the seventh planet from the Sun, and the third largest planet in our solar system.", "Rotates on its side; ice giant with faint rings." ,
    "Average Temperature: -224°C." ,
    "Atmosphere: Hydrogen, helium, methane.", "Habitability: ❌ No — extremely cold and not solid."
    
  ]
},

{
  name: "Neptune",
  image: "https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?resize=600,338",
  facts: [
    "Neptune is the eighth and most distant planet in our solar system.", 
    "It's the fourth largest planet.Coldest planet; has supersonic winds.",
    "Average Temperature: -214°C.",
     "Atmosphere: Hydrogen, helium, methane.","Habitability: ❌ No — icy, windy, and high pressure"
    
  ]
}
];




const gallery = document.getElementById("planetGallery");

planets.forEach(planet => {
  const factList = planet.facts.map(fact => `<li>${fact}</li>`).join("");

  gallery.innerHTML +=
   `
   <div class="container">
    <div class="card-container">

      <div class="card">

        <div class="front-content">

          <img src="${planet.image}" 
     alt="${planet.name}" 
     class="${planet.name === 'Saturn' ? 'planet-img saturn' : 'planet-img'}" />

          <h3 class="planet-name">${planet.name}</h3>

        </div>
        <div class="content">
          <h3 class="planet-facts-heading">${planet.name} Facts</h3>

          <ul class="factlists">${factList}</ul>
        </div>
      </div>
    </div>
    </div>
  `;
});

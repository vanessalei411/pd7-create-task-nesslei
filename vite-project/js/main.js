const Toxic = [
  "Acetylated Lanolin",
  "Acetylated Lanolin Alcohol",
  "Algae Extract",
  "Algin",
  "Beeswax",
  "Bismuth",
  "Butyl Stearate",
  "Butyrospermum Parkii",
  "Carrageenan",
  "Cetearyl Alcohol + Ceteareth 20",
  "Cetyl Acetate",
  "Chlorella",
  "Chondrus Crispus",
  "Coal Tar",
  "Cocoa Butter",
  "Coconut Alkanes",
  "Coconut Butter",
  "Coconut Oil",
  "Cocos Nucifera Oil",
  "Colloidal Sulfur",
  "Cotton Awws Oil",
  "Cotton Seed Oil",
  "Corn Oil",
  "D&C Red 3, 4, 6, 7, 9",
  "D&C Red 17, 19",
  "D&C Red 21, 27",
  "D&C Red 30, 33, 36",
  "D&C Red 40",
  "Decyl Oleate",
  "Dioctyl Succinate",
  "Disodium Monooleamido",
  "Ethoxylated Lanolin",
  "Ethylhexyl Palmitate",
  "Glyceryl Stearate SE",
  "Glyceryl-3 Diisostearate",
  "Hexadecyl Alcohol",
  "Hydrogenated Vegetable Oil",
  "Isocetyl Alcohol",
  "Isocetyl Stearate",
  "Isodecyl Oleate",
  "Isopropyl Isostearate",
  "Isopropyl Linolate",
  "Isopropyl Myristate",
  "Isopropyl Palmitate",
  "Isostearyl Isostearate",
  "Isostearyl Neopentanoate",
  "Jojoba Wax",
  "Kelp",
  "Laminaria Digitata Extract",
  "Laminaria Saccharina Extract",
  "Laureth-4",
  "Laureth-23",
  "Lauric Acid",
  "Mango Butter",
  "Mink Oil",
  "Myristic Acid",
  "Myristyl Lactate",
  "Myristyl Myristate",
  "Octyl Palmitate",
  "Octyl Stearate",
  "Oleth-3",
  "Oleyl Alcohol",
  "PEG 2 Sulfosuccinate",
  "PEG 8 Stearate",
  "PEG 16 Lanolin",
  "PEG 200 Dilaurate",
  "PG Monostearate",
  "PPG 2 Myristyl Propionate",
  "Plankton",
  "Polyglyceryl-3 Diisostearate",
  "Potassium Chloride",
  "Propylene Glycol Monostearate",
  "Red Algae",
  "Seaweed",
  "Shark Liver Oil",
  "Shea",
  "Shea Butter",
  "Sodium Laureth Sulfate",
  "Sodium Lauryl Sulfate",
  "Solulan 16",
  "Sorbitan Oleate",
  "Soybean Oil",
  "Spirulina",
  "Steareth 10",
  "Stearic Acid Tea",
  "Stearyl Heptanoate",
  "Sulfated Castor Oil",
  "Sulfated Jojoba Oil",
  "Talc",
  "Wheat Germ Glyceride",
  "Wheat Germ Oil",
  "Xylene",
];

function search(userInput) {
  let inputArr = userInput.split(", ");

  let foundIngredients = [];

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < Toxic.length; j++) {
      if (Toxic[j].toLowerCase().includes(inputArr[i].toLowerCase())) {
        foundIngredients.push(Toxic[j]);
      }
    }
  }

  let outputHTML;

  if (foundIngredients.length > 0) {
    outputHTML =
      "<p>Found " + foundIngredients.length + " ingredients that may irritate your skin:</p>";
    outputHTML = outputHTML + "<ul>";
    foundIngredients.forEach(function (ingredient) {
      outputHTML = outputHTML + "<li>" + ingredient + "</li>";
    });
    outputHTML = outputHTML + "</ul>";
  } else {
    outputHTML = "<p>No harmful ingredients found.</p>";
  }

  let outputContainer = document.getElementById("output-container");
  outputContainer.innerHTML = outputHTML;
}

// Add an event listener to the input field for Enter key press
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission (if any)
    search(document.getElementById("userInput").value);
  }
});

document.getElementById("srchBtn").addEventListener("click", function () {
  search(document.getElementById("userInput").value);
});
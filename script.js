//your code here
// Data for dog breeds
const dogs = [
  {
    name: "Golden Retriever",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Golden_Retriever_Carlos_%2810581910556%29.jpg",
    wiki: "https://en.wikipedia.org/wiki/Golden_Retriever"
  },
  {
    name: "Poodle",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Poodle_stand.jpg",
    wiki: "https://en.wikipedia.org/wiki/Poodle"
  }
];

// Create <ul>
const ul = document.createElement("ul");

// Loop through dog data
dogs.forEach(dog => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");

  // Set attributes
  a.href = dog.wiki;
  a.target = "_blank";

  img.src = dog.img;
  img.alt = dog.name;
  img.width = 250;

  // Nest elements
  a.appendChild(img);
  li.appendChild(a);
  ul.appendChild(li);
});

// Add list to the page
document.body.appendChild(ul);

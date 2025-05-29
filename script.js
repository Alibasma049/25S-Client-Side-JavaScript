const phrases = [
  ["A pirate", "An alien", "My grandma", "The robot", "A unicorn", "My pet hamster", "The superhero"],
  ["ate", "painted", "teleported", "sneezed on", "hugged", "accidentally called"],
  ["a rainbow", "a jelly donut", "a flying carpet", "a giant marshmallow", "a goldfish", "a smelly sock"],
  ["on the roof", "under the couch", "in the jungle", "at the zoo", "in the refrigerator", "inside a video game"],
  ["because it was Tuesday", "to impress a squirrel", "for science", "because it smelled funny", "to win a contest", "by mistake"]
];

const selected = ["", "", "", "", ""];

const imageMap = {
  "A pirate": "https://th.bing.com/th/id/OIP.QTtEKmWU8q82F48EbtPndAHaMa?w=117&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "An alien": "https://th.bing.com/th/id/OIP.c-nYabeCSVaIGYUwC60S6gHaLA?w=128&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "My grandma": "https://th.bing.com/th/id/OIP.UvN5qE0YnAkGJNzdtwOdywHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "The robot": "https://th.bing.com/th/id/OIP.52ta1Mxw0oq3ePLHuh1hbAHaIu?w=138&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "A unicorn": "https://th.bing.com/th/id/OIP.tZwgDYbAr0RAlzw7NUf7vAHaGd?w=210&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "painted": "https://th.bing.com/th/id/OIP.Bvs-viHboNzqbyW0k9fiMwHaHA?w=200&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "teleported": "https://th.bing.com/th/id/OIP._YeyRSQA9tDsCCeNGtNCrAHaH6?w=175&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "hugged": "https://th.bing.com/th/id/OIP.qC2srj2n1l-fMdiaT7YzuQHaIP?w=157&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "accidentally called": "https://th.bing.com/th/id/OIP.39US9WNwAWTGqRan8KlTqAHaI4?w=147&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "a rainbow": "https://th.bing.com/th/id/OIP._rIXn45bLOGM_RW3lJdnPgHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "a jelly donut": "https://th.bing.com/th/id/OIP.rys6IUvSrzz9qEEXf7kxIgHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "a giant marshmallow": "https://th.bing.com/th/id/OIP.DPKu2nAiQSozceNC2bHqSAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "a goldfish": "https://th.bing.com/th/id/OIP.kQ34asuS30Ggnc4XV_d5kwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "a smelly sock": "https://th.bing.com/th/id/OIP.yGwf_Quq9PtHHdysjjK4CAHaIN?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "under the couch": "https://th.bing.com/th/id/OIP.41u45NeHU8dDnST3zvgXAQHaFx?w=234&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.5",
  "in the jungle": "https://th.bing.com/th/id/OIP.BtZZ7RKrL4eMG1lz4VqbCAHaF1?w=208&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.5",
  "at the zoo": "https://th.bing.com/th/id/OIP.4NKMq3UN1EIKqxXJ8J5l6QHaE8?w=284&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  "by mistake": "https://th.bing.com/th/id/OIP.9voVkjTackr4UcC2rsl7zAHaH7?w=187&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"
};

function createButtons() {
  for (let i = 0; i < phrases.length; i++) {
    const col = document.getElementById(`col-${i + 1}`);
    phrases[i].forEach((phrase, idx) => {
      const btn = document.createElement("button");
      const imgSrc = imageMap[phrase];
      if (imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = phrase;
        img.className = "btn-img";
        btn.appendChild(img);
      }
      const span = document.createElement("span");
      span.textContent = phrase;
      btn.appendChild(span);

      btn.onclick = () => {
        selected[i] = phrase;
        highlightSelected(col, idx);
      };
      col.appendChild(btn);
    });
  }
}

function highlightSelected(column, index) {
  Array.from(column.children).forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });
}

function buildStory() {
  if (selected.includes("")) {
    alert("Please select one phrase from each column!");
    return;
  }
  const story = selected.join(" ") + ".";
  document.getElementById("final-story").textContent = story;
  const utterance = new SpeechSynthesisUtterance(story);
  speechSynthesis.speak(utterance);
}

createButtons();

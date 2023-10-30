const hexColorCodes = [
  "#FFA07A", // lightsalmon
  "#F29E8D",
  "#ECA08D",
  "#E3A28D",
  "#DBA38D",
  "#D3A58D",
  "#CCA68D",
  "#C4A88D",
  "#BCA98D",
  "#B4AB8D",
  "#ADAE8D",
  "#A5B08D",
  "#9DB28D",
  "#95B38D",
  "#8EB58D",
  "#86B68D",
  "#7EB88D",
  "#76BA8D",
  "#6FBB8D",
  "#67BD8D",
];

let i = 0;

function increment() {
  document.body.style.backgroundColor = hexColorCodes[i];
  i++;
  if (i === 19) {
    i = 0;
  }
}

setInterval(increment, 300);
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.textContent = "Ritick Lath Hacked you hahahahah";
});

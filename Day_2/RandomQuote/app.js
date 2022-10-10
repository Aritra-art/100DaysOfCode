const generate = document.querySelector("#generate");
const mainQuote = document.querySelector(".mainQuote");
const mainName = document.querySelector(".mainName");

const quotes = [
  {
    id: "q1",
    name: "Zig Ziglar",
    quote:
      "You can get everything in life you want if you will just help enough other people get what they want.",
  },
  {
    id: "q2",
    name: "Pablo Picasso",
    quote: "Inspiration does exist, but it must find you working.",
  },
  {
    id: "q3",
    name: "Angela Bassett",
    quote:
      "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.",
  },
  {
    id: "q4",
    name: "Isabel Allende",
    quote:
      "Show up, show up, show up, and after a while the muse shows up, too.",
  },
  {
    id: "q5",
    name: "David Ogilvy",
    quote:
      "Don't bunt. Aim out of the ballpark. Aim for the company of immortals.",
  },
];

mainQuote.textContent = `❝ ${quotes[0].quote} ❞`; // updating the initial quote
mainName.textContent = `~ ${quotes[0].name}`; // updating the initial name

const quoteSetter = () => {
  let index = Math.floor(Math.random() * quotes.length); // generating a random index
  mainQuote.textContent = `❝ ${quotes[index].quote} ❞`;
  mainName.textContent = `~ ${quotes[index].name}`;
};

const quoteGeneratorHandler = () => {
  mainQuote.textContent = "Loading ..."; // setting the quote to loading on click
  mainName.textContent = "Loading ..."; // setting the name to loading on click
  setTimeout(() => quoteSetter(), 2000); // setting a timeout to the quote setter function
};

generate.addEventListener("click", quoteGeneratorHandler);

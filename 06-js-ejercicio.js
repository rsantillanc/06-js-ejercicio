const list = ["Papa", "Arroz", "Queso", "Galletas", "Pan"];
list.push("Aceite Girasol");

const terminators = [
  {
    title: "Terminator I",
    director: "James Cameron",
    date: 1985,
  },
  {
    title: "Terminator II",
    director: "James Cameron",
    date: 1991,
  },
  {
    title: "Terminator III",
    director: "Jonathan Mostow",
    date: 2003,
  },
  {
    title: "Terminator IV",
    director: "McG",
    date: 2009,
  },
  {
    title: "Terminator V",
    director: "Alan Taylor",
    date: 2015,
  },
  {
    title: "Terminator VI",
    director: "Tim Miller",
    date: 2019,
  },
];

const mostRecients = terminators.filter((movie) => movie.date > 2010);
const directors = terminators.map(movie => movie.director)
const titles = terminators.map(movie => movie.title)
const directorsPlusTitles = directors.concat(titles)
const titlesPlusDirectors = [...titles, ...directors]

console.log(titlesPlusDirectors);
console.log(directorsPlusTitles);
console.log(titles);
console.log(directors);
console.log(mostRecients);
console.log(list);

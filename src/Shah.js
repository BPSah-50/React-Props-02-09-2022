import React from "react";
import "./Shah.css";

const name = "New Project - Books Store";
const books = [
  {
    id: 1,
    img: "https://rukminim1.flixcart.com/image/400/200/jyeq64w0/book/5/4/0/you-are-the-best-wife-original-imafgkyugczdayt8.jpeg?q=70",
    title: "You are the Best Wife",
    author: "Ajay K Pandey",
  },
  {
    id: 2,
    img: "https://rukminim1.flixcart.com/image/416/416/kybvo280/book/n/d/n/-original-imagah76agfy2gzy.jpeg?q=70",
    title: "Life is What You Make it",
    author: "Shenoy Preeti",
  },
  {
    id: 3,
    img: "https://rukminim1.flixcart.com/image/416/416/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    title: "One Indian Girl ",
    author: "Bhagat Chetan",
  },
];

export default function Shah() {
  return (
    <div>
      <h2 className="name">{name}</h2>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </div>
  );
}

function Book(props) {
  const { img, title, author } = props;
  return (
    <article className="books">
      <img src={img} alt="" />
      <h2> {title}</h2>
      <h4> {author}</h4>
    </article>
  );
}

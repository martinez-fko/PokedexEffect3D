import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/slices/currentPage.slice";
import "../assets/css/pagination.css";

const Pagination = ({currentNumber, changeNumber}) => {
  const currentPage = useSelector((state) => state.currentPage);
  const pokemons = useSelector((state) => state.pokemons);
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const distpach = useDispatch();
  const numbersPage = Math.ceil(pokemons.length / itemPerPage);
  const numbers = [];
  for (let i = 1; i <= numbersPage; i++) {
    numbers.push(i);
  }
  const lastIndexNumber = currentNumber * 5;
  const firstIndexNumber = lastIndexNumber - 5;
  const currentListNumbers = numbers.slice(firstIndexNumber, lastIndexNumber);
  const lastNumber = Math.ceil(numbers.length / 5);

  const first = () => {
    changeNumber(1);
    distpach(setCurrentPage(1));
  };
  const prev = (number) => {
    distpach(setCurrentPage(number));
    if (firstIndexNumber === number) {
      changeNumber(currentNumber - 1);
    }
  };
  const next = (number) => {
    distpach(setCurrentPage(number));
    if (lastIndexNumber < number) {
      changeNumber(currentNumber + 1);
    }
  };

  const last = () => {
    changeNumber(lastNumber);
    distpach(setCurrentPage(numbersPage));
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <button
            disabled={currentPage === 1 && "disable"}
            onClick={() => first()}
          >
            First
          </button>
        </li>
        <li>
          <button
            disabled={currentPage === 1 && "disable"}
            onClick={() => prev(currentPage - 1)}
          >
            Prev
          </button>
        </li>

        {currentListNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "pageNumber active" : "pageNumber"
            }
          >
            <button onClick={() => distpach(setCurrentPage(number))}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === numbersPage && "disable"}
            onClick={() => next(currentPage + 1)}
          >
            Next
          </button>
        </li>
        <li>
          <button onClick={() => last()}>Last</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

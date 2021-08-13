import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBookListQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { data } = useQuery(getBookListQuery);
  console.log(data);

  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};

export default BookList;

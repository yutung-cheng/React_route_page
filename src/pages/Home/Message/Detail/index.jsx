import React from "react";
import { useParams, useLocation } from "react-router-dom";

const detailData = [
  { id: "01", content: "Hello World 1" },
  { id: "02", content: "Hello World 2" },
  { id: "03", content: "Hello World 3" },
  { id: "04", content: "Hello World 4 " },
];

//In route v6, only use function to create Component, so we can use "useParam" to accept data.
export default function Detail() {
  //Use Params to get data:
  // const { id, title } = useParams();

  //Use location to get data
  const location = useLocation();
  const {
    state: { id, title },
  } = location;

  const findDetailsData = detailData.find((obj) => obj.id === id);

  return (
    <div>
      <ul>
        <li>ID: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {findDetailsData.content}</li>
      </ul>
    </div>
  );
}

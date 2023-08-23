import React from "react";
import { useParams } from "react-router-dom";

const detailData = [
  { id: "01", content: "Hello World 1" },
  { id: "02", content: "Hello World 2" },
  { id: "03", content: "Hello World 3" },
  { id: "04", content: "Hello World 4 " },
];

//In route v6, only use function to create Component, so we can use "useParam" to accept data.
export default function Detail() {
  const { id, title } = useParams();

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

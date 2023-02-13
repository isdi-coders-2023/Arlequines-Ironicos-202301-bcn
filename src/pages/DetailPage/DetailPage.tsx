import React from "react";
import { useParams } from "react-router-dom";
const DetailPage = (): JSX.Element => {
  const { id } = useParams();

  return <h1>DetailPage </h1>;
};

export default DetailPage;

import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Result() {
  return (
    <Card>
      Result <Link to="/">Start new question</Link>
    </Card>
  );
}

export default Result;

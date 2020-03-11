import React from "react";
import { Link } from "react-router-dom";

function Vote() {
  return (
    <div>
      Vote <Link to="/result">Results</Link>
    </div>
  );
}

export default Vote;

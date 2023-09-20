import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="text-start flex items-center gap-5">
        <span>
          <FaCheckCircle></FaCheckCircle>
        </span>
        {feature}
      </p>
    </div>
  );
};

export default Feature;

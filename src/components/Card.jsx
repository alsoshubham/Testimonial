import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
/* eslint-disable react/prop-types */
export const Card = ({ reviews }) => {
  return (
    <div>
      <div>
        <img src={reviews.image} />
      </div>
      <div>
        <p>{reviews.name}</p>
      </div>
      <div>
        <p>{reviews.job}</p>
      </div>
      <div>
        <FaQuoteLeft />
      </div>
      <div>{reviews.text}</div>
      <div>
        <FaQuoteRight />
      </div>
      <div>
        <button>+ </button>
        <button>-</button>
      </div>
      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

// <div
// style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20 }}>
// <div>
//   <h3>Shubham Shah</h3>
//   <h4>Frontend Developer</h4>
// </div>
// </div>
// <p>
// Shubham is an exceptional frontend developer. His attention to detail
// and dedication to creating seamless user experiences have significantly
// improved our product. He consistently delivers high-quality work and is
// a pleasure to work with.
// </p>
// <button>Surprise Me</button>

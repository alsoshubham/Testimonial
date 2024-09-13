import { Card } from "./Card";

// eslint-disable-next-line react/prop-types
export const Testimonials = ({reviews}) => {
  return (
    <div>
      <Card reviews={reviews[0]}/>
    </div>
  );
};
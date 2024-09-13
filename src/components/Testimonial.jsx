import {Card} from 'Testimonial'
import reviews from '../data';

export const Testimonials = () => {
  return (
    <div>
      <Card review = {reviews[0]}></Card>
    </div>
  );
};
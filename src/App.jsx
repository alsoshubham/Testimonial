import {Testimonial} from 'react'
import {reviews} from './data'

function App() {
  return (
    <div>
      <div>
        <h1>
          Our Testimonial
        </h1>
        <div></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;

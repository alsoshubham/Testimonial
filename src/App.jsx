import { Testimonials } from './components/Testimonial';
import { reviews } from './data';

function App() {
  return (
    <div>
      <div>
        <h1>
          Our Testimonial
        </h1>
        <div></div>
        <Testimonials reviews={reviews}/>

      </div>
    </div>
  );
};

export default App;

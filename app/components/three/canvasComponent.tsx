// Example usage in another component
import { Canvas } from 'react-three-fiber';
import ThreeDObject from './threeDObject';
// import Circle from './circlethree';

const App = () => {
  return (
    <>
    <div className=''>
      <ThreeDObject opacity={1} />
      {/* <Circle /> */}

    </div>
    </>
  );
};

export default App;

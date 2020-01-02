import React from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <button>
        <Link to='/Contact/main'>Main</Link>
      </button>
      <button>
        <Link to='/Contact/local'>Local</Link>
      </button>

      <div>
        <h3>Main Contact</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum
          id harum porro ullam consequatur, error, expedita dolorum corporis sed
          architecto vel cumque unde libero excepturi. Veritatis fugit aliquam
          ab.
        </p>
      </div>
      <div>
        <h3>Local Contact</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          laudantium qui a ex, pariatur veritatis rem eveniet deserunt
          aspernatur ducimus. Ullam non eius, saepe harum exercitationem iusto
          porro placeat voluptas.
        </p>
      </div>
    </>
  );
};

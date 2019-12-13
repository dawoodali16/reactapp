import React from 'react';
const List = ({ list, doneHandler, delHandler }) => {
  return (
    <div>
      <ul>
        <p>Tasks:</p>
        {list.map((v, i) => (
          <li
            style={{
              textDecoration: v.isCompleted ? 'line-through' : ''
            }}
            key={i}
          >
            {' '}
            {v.title}
            <i
              className="fas fa-check"
              onClick={() => {
                doneHandler(i);
              }}
            ></i>
            <i
              className="fas fa-trash-alt"
              onClick={() => {
                delHandler(i);
              }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;

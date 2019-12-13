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
            <button
              onClick={() => {
                doneHandler(i);
              }}
            >
              Done
            </button>
            <button
              onClick={() => {
                delHandler(i);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;

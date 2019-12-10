import React from 'react';

const List = ({ list, doneHandler, removeHandler }) => {
  return (
    <div>
      <ul>
        {list.map((v, i) => (
          <li style={{ backgroundColor: v.isCompleted ? 'green' : '' }} key={i}>
            {v.title}{' '}
            <button
              onClick={() => {
                doneHandler(i);
              }}
            >
              Done
            </button>{' '}
            <button
              onClick={() => {
                removeHandler(i);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;

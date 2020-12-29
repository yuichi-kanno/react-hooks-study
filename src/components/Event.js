import React from 'react';

const Event = ({ dispatch, event }) => {
  const id = event.id;

  // 削除
  const handleClickDeleteButton = () => {
    dispatch({
      type: 'DELETE_EVENT',
      id: id,
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type='button'
          className='btn btn-danger'
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
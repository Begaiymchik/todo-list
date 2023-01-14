import React from 'react';

const Todo = () => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            Что-то
            <div>
                <button type='button' className='btn btn-outline-warning'> <i className="fa-sharp fa-solid fa-star"> </i></button>
                <button type='button' className='btn btn-outline-success'> <i className="fa-solid fa-check"> </i></button>
                <button type='button' className='btn btn-outline-danger'><i className="fa-solid fa-trash-can"> </i></button>
            </div>
        </li>
    );
};

export default Todo;
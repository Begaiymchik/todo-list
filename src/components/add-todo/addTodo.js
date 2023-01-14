import React from 'react';

const AddTodo = () => {
    return (
        <div className='add-todo'>
            <input type="text" placeholder='What needs to be done' className='add-input'/>
            <button type='button' className='btn btn-outline-success'>Add Todo</button>
        </div>
    );
};

export default AddTodo;
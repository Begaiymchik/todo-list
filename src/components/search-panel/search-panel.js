import React from 'react';

const SearchPanel = () => {
    return (
        <div className='search-panel mb-3'>
            <input type="text" placeholder='search todo' className='search-input'/>
            <div className="btn-group">
                <button type='button' className='btn active btn-info'>All</button>
                <button type='button' className='btn btn-outline-info'>Active</button>
                <button type='button' className='btn btn-outline-info'>Done</button>
            </div>
        </div>
    );
};

export default SearchPanel;

// git remote add origin https://github.com/Begaiymchik/weather1.git
//     git branch -M main
// git push -u origin main
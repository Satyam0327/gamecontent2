import React, { forwardRef } from 'react';

const LastPageCover = forwardRef((_, ref) => {
    return (
        <div className="flip-book">
            <div className="page page-cover" ref={ref} data-density="hard">
                <div className="page-content">
                    <img
                        className="page-cover__image"
                        src="last_cover.jpg" 
                        width="471"
                        height="589"
                    />
                </div>
            </div>
        </div>
    );
});

export default LastPageCover;

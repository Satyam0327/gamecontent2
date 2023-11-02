import {forwardRef} from 'react';
import "./pagecover.css";
const PageCover = forwardRef((_, ref) => {
    return (
        <div className="flip-book">
            <div className={` book-cover-animation`} ref={ref} data-density="hard">
                <div className="page-content">
                    <div className="page-cover__image" width="471" height="589" />
                </div>
            </div>
        </div>
    );
});

export default PageCover;
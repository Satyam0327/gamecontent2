import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import pages from "../pageInfo";
import YouTubeMelody from "./YouTubeMelody";
import PageCover from "./PageCover";
import Page from "./Page";
import LastPageCover from "./lastpage";


export const App = () => {
  const book = useRef();
  const [page, setPage] = useState(0);
  const isBookClose = page === 0;

  const onPage = (e) => {
    setPage(e.data);
    if (e.data === pages.length - 1) {
      setPage(e.data);
      setTimeout(() => {
        setPage(0); 
      }, 2000); 
    }
  };

  return (
    <div className={`book-wrapper ${isBookClose ? 'close' : ''}`}>
      <HTMLFlipBook
        width={450}
        height={700}
        size="stretch"
        minWidth={288}
        maxWidth={433}
        minHeight={428}
        maxHeight={560}
        showCover={true}
        flipOnTouch={true}
        flipOnTouchZone={1}
        onFlip={onPage}
        className={`story-book ${isBookClose ? '' : 'active'}`}
        ref={book}
      >
        <PageCover />
        {pages.map(({ id, image, desc }) => (
          <Page key={id} number={id} desc={desc} img={<img src={image} alt="" />} />
        ))}
        <LastPageCover/>
      </HTMLFlipBook>
      <YouTubeMelody />
    </div>
  );
};

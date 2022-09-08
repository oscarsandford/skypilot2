import React from 'react';

type ScrollRowProps = {
  children: React.ReactNode;
};

function ScrollRow(props: ScrollRowProps) {

  const row = document.getElementById('portraits');
  let pos = { left:0, x:0 };
  let grabbed = false;
  if (row) {
    row.style.cursor = 'grab';
    row.scrollLeft = 0;
  }
  
  const flexRowMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (row) {
      row.style.cursor = 'grabbing';
      row.style.userSelect = 'none';
      pos = {
        left : row.scrollLeft,
        x: e.clientX,
      };
      grabbed = true;
    }
  };

  const flexRowMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (row && grabbed) {
      row.scrollLeft = pos.left - (e.clientX - pos.x);
    }
  };

  const flexRowMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (row) {
      row.style.cursor = 'grab';
      row.style.removeProperty('user-select');
      grabbed = false;
    }
  };

  return (
    <div className='flex-row' id='portraits' 
      onMouseDown={(e) => flexRowMouseDown(e)} 
      onMouseMove={(e) => flexRowMouseMove(e)} 
      onMouseUp={(e) => flexRowMouseUp(e)}
      onMouseLeave={(e) => flexRowMouseUp(e)}
    >
      {props.children}
    </div>
  );
};

export default ScrollRow;
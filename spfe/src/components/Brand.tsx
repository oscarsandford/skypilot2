import React from 'react';

interface BrandProps {
  name: string,
  icon: string,
  paragraphs: Array<string>,
  gallery: Array<string>,
  iidx: number,
}

function Brand({
  name, icon, paragraphs, gallery, iidx
} : BrandProps) : JSX.Element {
  return (
    <div className='container blank brand' id={name}>
      <div className='text'>
        <div className='title'>
          <img src={icon} alt=''/><h2>{name}</h2>
        </div> 
        {paragraphs.map((p) => (<p>{p}</p>))}
      </div>
      <div className='gallery'>
        <img src={gallery[iidx]} alt=''/>
      </div>
    </div>
  );
}

export default Brand;
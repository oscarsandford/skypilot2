import React from 'react';
import { Link } from 'react-router-dom';

interface ILBlockProps {
  img: string,
  link: string,
  title: string,
  text: string
}

function ImgLinkBlock({
  img, 
  link,
  title, 
  text
} : ILBlockProps): JSX.Element {
  return (
    <Link to={link} style={{backgroundImage: `url(${img})`, textDecoration: 'none'}} className='block'>
      <div className='text-wrapper'>
        <h2>{title}</h2>
        <div className='text'>{text}</div>
      </div>
    </Link>
  );
}

export default ImgLinkBlock;
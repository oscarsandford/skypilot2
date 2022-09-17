import React from 'react';

interface ProfileProps {
  pfp: string,
  name: string,
  position: string,
  description: string
};

function Profile({
  pfp, name, position, description
} : ProfileProps): JSX.Element {
  return (
    <div className='profile'>
      <img src={pfp} alt='profile' className='portrait'/>
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
import React from 'react';
import '../styles/BookClubs.css';

export default function BookClubs({ club, user, joinBookclub }) {
  const { imageUrl, bookclubName, membersCount, description } = club.bookclubInfo;

  const text = `${description.substring(0, 200)}...`;

  return (
    <div className='club-container'>
      <div className='club'>
        <div className='col-left'>
          {user ? <div className='join-modal'>
            <button onClick = {joinBookclub} value={bookclubName} type='button'>JOIN</button>
          </div> : null}
          <img src={imageUrl} alt="clubCover" />
        </div>
        <div className="col-right">
          <p>
            <b>{bookclubName}</b>
          </p>
          <p>{membersCount} Memebers</p>
          <p>
            <span>{text}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
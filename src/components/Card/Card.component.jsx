import React from 'react';
import './Card.styles.css';

function Card(props) {
  const { source, title, description, onClickHandler } = props;
  return (
    <button type="button" className="card-button" onClick={onClickHandler}>
      <article className="card-item">
        <figure className="i-frame">
          <img src={source} alt="Video preview" />
          <figcaption>{title}</figcaption>
          <p>{description}</p>
        </figure>
      </article>
    </button>
  );
}

export default Card;

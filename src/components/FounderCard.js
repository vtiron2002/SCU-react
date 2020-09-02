import React from 'react';

const FounderCard = ({ name, imgSrc, title, subtitle, description, link, linkDesc }) => {
  return (
    <section>
      <h3>{name}</h3>
      <div className="card bg-transparent">
        <div className="card-horizontal">
          <img className="card-img-top founders-img" src={imgSrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {subtitle ? <p className="card-text">Director of IT</p> : (null)}
          </div>
        </div>
      </div>
      <p>{description}</p>
      {link ? <a href={link}>{linkDesc}</a> : (null)}
    </section>
  )
}

export default FounderCard;
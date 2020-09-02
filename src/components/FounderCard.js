import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '50px'
  },
  cardHorizontal: {
    display: 'flex',
    flex: '0 0 auto',
    padding: '10px'
  }
});

const FounderCard = ({ name, imgSrc, title, subtitle, description, link, linkDesc }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h3>{name}</h3>
      <div className="card bg-transparent">
        <div className={classes.cardHorizontal}>
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
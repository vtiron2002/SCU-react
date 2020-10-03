import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import CommentFilledIcon from '../../../img/Icons/comment-filled.png';
import * as timeago from 'timeago.js';

const Post = styled.div`
  display: grid;
  grid-template-columns: 50px auto 12rem;
  gap: 2rem;
  box-shadow: 0px 10px 6px -9px grey;
  background: white;
  padding: 2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.1s ease;
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }

  img {
    width: 100%;
  }

  .pfp {
    img {
      border-radius: 500px;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h5.name {
      font-size: 1rem;
      font-weight: bold;

      span.time {
        margin-left: 1.5rem;
        font-weight: 300;
        opacity: 0.3;
      }
    }

    p.headline {
      margin-bottom: 0.5rem;
    }

    .tags {
      opacity: 0.3;

      .tag {
        margin-right: 0.5rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: gray;

      img {
        height: 1rem;
        width: auto;
        margin-right: 0.5rem;
      }
    }
  }

  .image {
    border-radius: 10px;
    max-height: 6.77rem;
    object-fit: cover;
  }
`;

const UsersPost = ({
  id,
  pfp,
  name,
  headline,
  tags,
  comments,
  time_posted,
  image,
}) => {
  const { push } = useHistory();

  const linkTo = `/member/community/post/${id}`;
  return (
    <Post onClick={() => push(linkTo)}>
      <div className='pfp'>
        <img src={pfp} alt='' />
      </div>
      <div className='center'>
        <h5 className='name'>
          {name} <span className='time'>{timeago.format(time_posted)}</span>{' '}
        </h5>
        <p className='headline'>{headline}</p>
        <div className='tags'>
          {tags.map((t, i) => (
            <span key={i} className='tag'>{`#${t}`}</span>
          ))}
        </div>
        <Link to={linkTo}>
          <img src={CommentFilledIcon} alt='' /> {comments.length} commment
          {comments.length > 1 || !comments.length ? 's' : ''}
        </Link>
      </div>
      <img className='image' src={image} alt='' />
    </Post>
  );
};

export default UsersPost;

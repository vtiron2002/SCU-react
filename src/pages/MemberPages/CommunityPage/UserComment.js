import React from 'react';
import styled from 'styled-components';

import * as timeago from 'timeago.js';
import CommentReplyIcon from '../../../img/Icons/comment-reply.png';

const UserComment = ({ comment }) => {
  const StyledComment = styled.div`
    display: grid;
    grid-template-columns: 50px auto 12rem;
    gap: 2rem;
    box-shadow: 0px 10px 6px -9px grey;
    background: white;
    padding: 2rem;
    border-radius: 50px;
    transition: 0.1s ease;
    margin-bottom: 2rem;

    img {
      width: 100%;
    }

    .left {
      img {
        border-radius: 500px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h5 {
        font-size: 1rem;
        font-weight: bold;

        span.time {
          margin-left: 1.5rem;
          font-weight: 300;
          opacity: 0.3;
        }
      }

      .reply {
        color: gray;
        cursor: pointer;

        img {
          height: 1.5rem;
          width: auto;
          margin-right: 0.5rem;
        }
      }
    }
  `;

  return (
    <StyledComment>
      <div className='left'>
        <img src={comment.pfp} alt='' />
      </div>
      <div className='right'>
        <h5>
          {comment.name}{' '}
          <span className='time'>{timeago.format(comment.time_commented)}</span>{' '}
        </h5>
        <p className='body'>{comment.body}</p>
        <div className='reply'>
          <img src={CommentReplyIcon} alt='' /> Reply
        </div>
      </div>
    </StyledComment>
  );
};

export default UserComment;

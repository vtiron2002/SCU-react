import React, { useEffect, useState } from 'react';
import Member from '../Member';
import StyledTop from './StyledTop';

import { StyledMain } from './CommunityPage';
import { useHistory, useParams } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import styled from 'styled-components';
import PlaceholderPosts from './PlaceholderPosts';
import * as timeago from 'timeago.js';

import CommentFilledIcon from '../../../img/Icons/comment-filled.png';
import Pagination from './Pagination';
import UserComment from './UserComment';

const CommunityPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top of page when page is loaded

    const foundPost = PlaceholderPosts.find((p) => p.id == id);
    setPost(foundPost);
  }, []);

  const { goBack } = useHistory();

  const StyledBox = styled.div`
    background: white;
    border-radius: 50px;
    padding: 2rem;
    box-shadow: 0px 10px 6px -9px grey;

    display: grid;
    grid-template-columns: 80px auto;

    .left {
      padding-right: 1.5rem;
      border-right: 1px solid #ccc;
      img {
        width: 100%;
      }
    }

    .right {
      padding-left: 1.5rem;
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 1em;

        span.time {
          margin-left: 1.5rem;
          font-weight: 300;
          opacity: 0.3;
        }
      }

      p {
        margin-bottom: 1em;
      }

      .tags {
        margin-bottom: 2em;

        .tag {
          margin-right: 0.5em;
          opacity: 0.3;
        }
      }

      p.body {
        margin-bottom: 3em;
        line-height: 1.7em;
      }

      > img {
        width: 100%;
        border-radius: 10px;
        margin-bottom: 2em;
      }

      .comments {
        display: flex;
        align-items: center;
        color: gray;

        img {
          height: 1.5rem;
          width: auto;
          margin-right: 0.5rem;
        }
      }
    }
  `;

  return (
    <Member>
      <StyledMain>
        <StyledTop goBack={goBack} style={{ cursor: 'pointer' }}>
          <BsChevronLeft /> Back
        </StyledTop>

        <StyledBox>
          <div className='left'>
            <img src={post?.pfp} alt='' />
          </div>

          <div className='right'>
            <strong>
              {post?.name}{' '}
              <span className='time'>{timeago.format(post?.time_posted)}</span>{' '}
            </strong>
            <p className='headline'>{post?.headline}</p>
            <div className='tags'>
              {post?.tags.map((t) => (
                <span className='tag'>{`#${t}`}</span>
              ))}
            </div>
            <p className='body'>{post?.body}</p>
            <img src={post?.image} alt='' />
            <div className='comments'>
              <img src={CommentFilledIcon} alt='' /> {post?.comments.length}{' '}
              commment
              {post?.comments.length > 1 || !post?.comments.length ? 's' : ''}
            </div>
          </div>
        </StyledBox>

        <Pagination pages={5} />

        {post?.comments.map((c, i) => (
          <UserComment key={i} comment={c} />
        ))}
      </StyledMain>
    </Member>
  );
};

export default CommunityPostPage;

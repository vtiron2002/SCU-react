import React from 'react';

import styled from 'styled-components';
import Member from './Member';
import SearchIcon from '../../img/Icons/search.png';
import PfpBlack from '../../img/Icons/profile-black.png';
import PaperClipActiveIcon from '../../img/Icons/paperclip-active.png';
import PhotoActiveIcon from '../../img/Icons/photo-active.png';
import HashtagActiveIcon from '../../img/Icons/hashtag-active.png';
import blmPic from '../../img/blm.jpg';
import { Link } from 'react-router-dom';
import CommentFilledIcon from '../../img/Icons/comment-filled.png';

const StyledMain = styled.main`
  padding: 0 40px;
  padding-bottom: 3rem;
  flex: 1;
  display: grid;
  gap: 3rem;
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;

  h2 {
    color: white;
    width: max-content;
    margin-right: 3rem;
  }

  form {
    display: flex;
    align-items: center;
    background: white;
    padding: 0.5em 1em;
    width: 40%;
    min-width: 380px;
    border-radius: 5000px;

    input {
      margin-left: 0.5rem;
      border: none;
      outline: none;
      flex: 1;

      &::placeholder {
        opacity: 0.3;
      }
    }
  }
`;

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

    input,
    textarea {
      padding: 0.5rem 1rem;
      border: 1px solid #ccc;
      border-radius: 20px;
      outline: none;
      margin-bottom: 0.8rem;

      &::placeholder {
        opacity: 0.3;
      }
    }

    textarea {
      resize: none;
    }

    .bottom {
      display: grid;
      grid-template-columns: repeat(3, 25px) auto;
      gap: 1rem;
      align-items: center;

      img {
        width: 100%;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
          opacity: 1;
        }
      }

      .button {
        display: flex;
        button {
          color: white;
          background: #68d1ff;
          border: none;
          border-radius: 50px;
          padding: 0.5em 1.5em;
          margin-left: auto;
        }
      }
    }
  }
`;

const Guidelines = styled.div`
  background: white;
  padding: 2rem;
  border: 3px solid #ffd600;
  border-radius: 50px;
  display: flex;
  flex-direction: column;

  h4 {
    margin-bottom: 2rem;
    font-weight: 300;
  }

  > div {
    display: flex;

    div {
      flex: 1;

      h5 {
        font-size: 1rem;
        margin: 0;
        font-weight: bold;
      }

      ul {
        padding-left: 1rem;
      }
      ul li {
        font-size: 0.8rem;
      }
    }

    .left {
      padding-right: 2rem;
      border-right: 1px solid #ccc;
    }

    .right {
      padding-left: 2rem;

      flex: 1;
    }
  }

  > h4 {
    text-align: center;
  }
`;

const Post = styled.div`
  display: grid;
  grid-template-columns: 50px auto 12rem;
  gap: 2rem;
  box-shadow: 0px 10px 6px -9px grey;
  background: white;
  padding: 2rem;
  border-radius: 50px;

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

    p.description {
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

const Pagination = styled.div`
  display: flex;
  margin-left: auto;

  div {
    span {
      opacity: 0.4;
      margin-left: 0.5rem;
      cursor: pointer;
    }

    span {
      &.selected {
        opacity: 1;
      }
    }
  }
`;

const CommunityPage = () => {
  return (
    <Member>
      <StyledMain>
        <StyledTop>
          <h2>Community Forum</h2>

          <form>
            <img src={SearchIcon} alt='' height='20' />
            <input
              type='text'
              placeholder='Search by title, key words, or hashtag'
            />
          </form>
        </StyledTop>

        <StyledBox>
          <div className='left'>
            <img src={PfpBlack} alt='' />
          </div>
          <form className='right'>
            <input type='text' placeholder='Subject' />
            <textarea type='text' placeholder='Write something' />
            <div className='bottom'>
              <img src={PaperClipActiveIcon} alt='' />
              <img src={PhotoActiveIcon} alt='' />
              <img src={HashtagActiveIcon} alt='' />

              <div className='button'>
                <button>Post</button>
              </div>
            </div>
          </form>
        </StyledBox>

        <Guidelines>
          <h4>Community Forum Guidelines</h4>

          <div>
            <div className='left'>
              <h5>This forum is for:</h5>
              <ul>
                <li>Sharing ideas and posting interesting topics.</li>
                <li>
                  Find partnerships and collaborate, offer suggestoins on new
                  and existing ventures, or even seek feedback on an idea.
                </li>
                <li>
                  Please be respectful, authentic, and open to helping each
                  other out!
                </li>
                <li>
                  SCU does not discriminate against race, religion, culture,
                  sexual orientation, gender or identity.
                </li>
              </ul>
            </div>
            <div className='right'>
              <h5>We do not permit:</h5>
              <ul>
                <li>
                  NO hate-speech, innapropriate words, sexual content, or
                  profanity. Any posts deemed innapropriate will be removed by
                  moderators.
                </li>
                <li>
                  NO political posts. We are a community that is meant to
                  empower the community, not divide. Although we may have our
                  differences, please be mindful that we should keep the
                  community vibrant and focus on uplifting eath other.
                </li>
              </ul>
            </div>
          </div>
        </Guidelines>

        <Pagination>
          <div>
            <span>{'<'}</span>
            <span className='selected'>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>{'>'}</span>
          </div>
        </Pagination>

        <Post>
          <div className='pfp'>
            <img src={PfpBlack} alt='' />
          </div>
          <div className='center'>
            <h5 className='name'>
              John Doe <span className='time'>1 hr ago</span>{' '}
            </h5>
            <p className='description'>
              New updates on the Black Lives Matter movement in Meriden!
            </p>
            <div className='tags'>
              <span className='tag'>#blm</span>
              <span className='tag'>#blacklivesmatter</span>
            </div>
            <Link>
              <img src={CommentFilledIcon} alt='' /> 13 commments
            </Link>
          </div>
          <img className='image' src={blmPic} alt='' />
        </Post>
        <Post>
          <div className='pfp'>
            <img src={PfpBlack} alt='' />
          </div>
          <div className='center'>
            <h5 className='name'>
              John Doe <span className='time'>1 hr ago</span>{' '}
            </h5>
            <p className='description'>
              New updates on the Black Lives Matter movement in Meriden!
            </p>
            <div className='tags'>
              <span className='tag'>#blm</span>
              <span className='tag'>#blacklivesmatter</span>
            </div>
            <Link>
              <img src={CommentFilledIcon} alt='' /> 13 commments
            </Link>
          </div>
          <img className='image' src={blmPic} alt='' />
        </Post>
        <Post>
          <div className='pfp'>
            <img src={PfpBlack} alt='' />
          </div>
          <div className='center'>
            <h5 className='name'>
              John Doe <span className='time'>1 hr ago</span>{' '}
            </h5>
            <p className='description'>
              New updates on the Black Lives Matter movement in Meriden!
            </p>
            <div className='tags'>
              <span className='tag'>#blm</span>
              <span className='tag'>#blacklivesmatter</span>
            </div>
            <Link>
              <img src={CommentFilledIcon} alt='' /> 13 commments
            </Link>
          </div>
          <img className='image' src={blmPic} alt='' />
        </Post>
      </StyledMain>
    </Member>
  );
};

export default CommunityPage;

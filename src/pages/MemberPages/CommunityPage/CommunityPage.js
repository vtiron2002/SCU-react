import React from 'react';

import styled from 'styled-components';
import Member from '../Member';
import PfpBlack from '../../../img/Icons/profile-black.png';
import PaperClipActiveIcon from '../../../img/Icons/paperclip-active.png';
import PhotoActiveIcon from '../../../img/Icons/photo-active.png';
import HashtagActiveIcon from '../../../img/Icons/hashtag-active.png';
import UsersPost from './UsersPost';
import StyledTop from './StyledTop';
import GuideLines from './GuideLines';
import PlaceholderPosts from './PlaceholderPosts';
import Pagination from './Pagination';

export const StyledMain = styled.main`
  padding: 0 40px;
  padding-bottom: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledBox = styled.div`
  background: white;
  border-radius: 50px;
  padding: 2rem;
  box-shadow: 0px 10px 6px -9px grey;
  margin-bottom: 3rem;

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

const CommunityPage = () => {
  return (
    <Member>
      <StyledMain>
        <StyledTop>Community Forum</StyledTop>

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

        <GuideLines />

        <Pagination pages={5} />

        {/* fetch posts and render them with this UsersPost component */}

        {PlaceholderPosts.map((p) => (
          <UsersPost
            key={p.id}
            id={p.id}
            name={p.name}
            headline={p.headline}
            tags={p.tags}
            time_posted={p.time_posted}
            pfp={PfpBlack}
            comments={p.comments}
            image={p.image}
          />
        ))}
      </StyledMain>
    </Member>
  );
};

export default CommunityPage;

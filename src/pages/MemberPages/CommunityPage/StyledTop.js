import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../../img/Icons/search.png';

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  h2 {
    color: white;
    width: max-content;
    margin: 0;
    margin-right: 3rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
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

const StyledTop = ({ children, goBack, style }) => {
  return (
    <Top>
      <h2 style={{ ...style }} onClick={() => goBack && goBack()}>
        {children}
      </h2>
      <form>
        <img src={SearchIcon} alt='' height='20' />
        <input
          type='text'
          placeholder='Search by title, key words, or hashtag'
        />
      </form>
    </Top>
  );
};

export default StyledTop;

import React, { useState } from 'react';

import styled from 'styled-components';

const Pagination = ({ pages }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const StyledPagination = styled.div`
    display: flex;
    margin: 1rem 0;
    margin-left: auto;

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
  `;
  return (
    <StyledPagination>
      <span>{'<'}</span>
      {new Array(pages).fill().map((_, i) => (
        <span className={selectedPage === i + 1 ? 'selected' : ''}>
          {i + 1}
        </span>
      ))}
      <span>{'>'}</span>
    </StyledPagination>
  );
};

export default Pagination;

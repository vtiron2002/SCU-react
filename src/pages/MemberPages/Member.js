import React from 'react'
import styled from 'styled-components';
import MemberAside from '../../components/MemberAside';

const imageOffset = '272px'
const blue = '#ABD5E6E0'
const gray = '#787578d6'

const StyledRoot = styled.div`
	padding-left: 40px;
	display: flex;
	align-items: start;
	flex: 1 1;
  background-image: linear-gradient(180deg,${gray} 82px,${blue} calc(${imageOffset} + 1px),white calc(${imageOffset} + 1px));
	background-attachment: fixed;
	padding-top: 100px;
`


const Member = ({ children }) => {
  return (
    <StyledRoot>
      <MemberAside />
      {children}
    </StyledRoot>
  )
}

export default Member

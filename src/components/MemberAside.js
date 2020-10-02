import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import AppsActiveIcon from '../img/Icons/apps-active.png';
import TrainingActiveIcon from '../img/Icons/training-active.png';
import CommunityActiveIcon from '../img/Icons/community-active.png';
import EventsActiveIcon from '../img/Icons/events-active.png';
import ProfileActiveIcon from '../img/Icons/profile-active.png';
import NotificationActiveIcon from '../img/Icons/notification-active.png';

import PfpBlack from '../img/Icons/profile-black.png';

const GridDiv = styled.div`
  padding: 40px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  .member-aside-item {
    filter: grayscale(100%);
    transition: 0.2s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &.active {
      filter: none;
    }
    img {
      width: 64%;
      margin: auto;
      display: block;
    }
    div {
      text-align: center;
    }
  }
`;
const StyledAside = styled.aside`
  background-color: white;
  box-shadow: 0px 0px 16px -8px grey;
  border-radius: 50px;
  overflow: hidden;
  flex: 0 0 300px;
  top: 0;
  // height: 600px;
`;

const StyledProfileDiv = styled.div`
  padding: 20px;
  background: white;
  img {
    width: 33%;
    margin: auto;
    display: block;
  }
  div {
    margin-top: 16px;
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 900;
  }
`;

const activities = [
  { title: 'Applications', src: AppsActiveIcon, id: 1 },
  { title: 'Training', src: TrainingActiveIcon, id: 2 },
  { title: 'Community', src: CommunityActiveIcon, id: 3 },
  { title: 'Events', src: EventsActiveIcon, id: 4 },
  { title: 'Profile', src: ProfileActiveIcon, id: 5 },
  { title: 'Notifications', src: NotificationActiveIcon, id: 6 },
];

const MemberAside = () => {
  return (
    <StyledAside>
      <StyledProfileDiv className='user-profile-info'>
        <img className='profile-img' src={PfpBlack} alt='' />
        <div>John Doe</div>
      </StyledProfileDiv>
      <GridDiv>
        {activities.map((activity) => (
          <NavLink
            key={activity.id}
            className='member-aside-item'
            to={`/member/${activity.title.toLowerCase()}`}
          >
            <img src={activity.src} alt='' />
            <div>{activity.title}</div>
          </NavLink>
        ))}
      </GridDiv>
    </StyledAside>
  );
};

export default MemberAside;

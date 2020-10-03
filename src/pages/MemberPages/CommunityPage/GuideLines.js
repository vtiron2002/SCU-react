import React from 'react';

import styled from 'styled-components';

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

const GuideLines = () => {
  return (
    <Guidelines>
      <h4>Community Forum Guidelines</h4>

      <div>
        <div className='left'>
          <h5>This forum is for:</h5>
          <ul>
            <li>Sharing ideas and posting interesting topics.</li>
            <li>
              Find partnerships and collaborate, offer suggestoins on new and
              existing ventures, or even seek feedback on an idea.
            </li>
            <li>
              Please be respectful, authentic, and open to helping each other
              out!
            </li>
            <li>
              SCU does not discriminate against race, religion, culture, sexual
              orientation, gender or identity.
            </li>
          </ul>
        </div>
        <div className='right'>
          <h5>We do not permit:</h5>
          <ul>
            <li>
              NO hate-speech, innapropriate words, sexual content, or profanity.
              Any posts deemed innapropriate will be removed by moderators.
            </li>
            <li>
              NO political posts. We are a community that is meant to empower
              the community, not divide. Although we may have our differences,
              please be mindful that we should keep the community vibrant and
              focus on uplifting eath other.
            </li>
          </ul>
        </div>
      </div>
    </Guidelines>
  );
};

export default GuideLines;

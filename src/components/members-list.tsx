import { graphql, useStaticQuery } from 'gatsby';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import FadeIn from './animations/fade-in';

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin: 3px;
`;

const MemberCount = styled.span`
  background: steelblue;
  color: white;
  padding: 3px 10px;
  border-radius: 15px;
`;

interface Member {
  readonly photo: {
    readonly thumb_link: string;
  };
}

const MembersList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetupMember {
        nodes {
          photo {
            thumb_link
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      {data.allMeetupMember.nodes.map((member, i) => {
        if (member.photo && member.photo.thumb_link) {
          return (
            <Fragment key={member.photo.thumb_link}>
              <FadeIn>
                <Avatar height="30" width="30" src={member.photo.thumb_link} />
              </FadeIn>
            </Fragment>
          );
        }
      })}
    </Wrapper>
  );
};

export default MembersList;

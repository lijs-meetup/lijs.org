import React from "react";
import styled from "styled-components";
import EventMap from "../event-map";
import { Button, Section } from "../common";

const EventName = styled.h1`
  color: gold;
`;

const Container = styled.div``;

const WhenWhereWrapper = styled.div`
  margin: 20px;
`;

const WhenWhere = styled.div`
  font-weight: bold;
  color: gold;
`;

interface NextEventProps {
  event: any;
}

const NextEvent: React.FC<NextEventProps> = ({ event }) => {
  return (
    <Section bg="#333" color="lightgray">
      <h2>Next Event</h2>

      <EventName>{event.name}</EventName>

      <div>{event.rsvps} are going.</div>

      <a href={event.link} target="_blank" rel="noopener noreferrer">
        <Button>RSVP Now!</Button>
      </a>
      <Container>
        <WhenWhereWrapper>
          <WhenWhere>When</WhenWhere>
          <div>
            <div>{event.date}</div>
            <div>{event.time}</div>
          </div>
        </WhenWhereWrapper>
        <WhenWhereWrapper>
          <WhenWhere>Where</WhenWhere>
          <div>
            <div>
              <b>{event.venue}</b>
            </div>
            <div>{event.address_street}</div>
            <div>{event.address_city_state}</div>
          </div>
        </WhenWhereWrapper>
      </Container>

      <br />
      <div>
        We meet on the last Wednesday of every month at LaunchPad in Huntington,
        NY.
      </div>
      <EventMap />
    </Section>
  );
};

export default NextEvent;
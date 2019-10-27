import styled from "styled-components";

export interface SectionTitleProps {
  color?: string;
}

const SectionTitle = styled.h2<SectionTitleProps>`
  color: ${({ color }) => color || "white"};
  font-size: 60px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.25rem;

  @media (${props => props.theme.sm}) {
    margin: 1.5rem 0;
  }
`;

export { SectionTitle };

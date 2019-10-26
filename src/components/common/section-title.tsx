import styled from "styled-components";

export interface SectionTitleProps {
  color?: string;
}

const SectionTitle = styled.h2<SectionTitleProps>`
  color: ${({ color }) => color || "#333"};
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.25rem;
`;

export { SectionTitle };
import styled from 'styled-components';

const Textarea = styled.textarea`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
  border: 1px solid lightgray;
  color: #333;
  padding: 6px 10px;
  margin: 5px;
  width: 100%;
  outline: none;
  min-height: 100px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Textarea;

import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-self: flex-end;
      padding: 15px 20px 15px 40px;

      &:hover {
        background: ${darken(0.08, "#F94D6A")};
      }
    }
    h1 {
      color: #fff;
      font-size: 32px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 20px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.4);

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    margin-top: 3px;
    color: #999;
  }
`;

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

    button.edit {
      cursor: pointer;
      text-align: right;
      margin: 5px 15px 0;
      height: 44px;
      background: #4dbaf9;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-self: flex-end;
      padding: 15px 20px 15px 60px;

      &:hover {
        background: ${darken(0.08, "#4DBAF9")};
      }
    }

    button.cancel {
      cursor: pointer;
      text-align: right;
      margin: 5px 15px 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      align-self: flex-end;
      padding: 15px 20px 15px 60px;

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

  p {
    color: #fff;
    size: 18px;
    margin: 30px 0;
  }
`;

export const Banner = styled.img`
  margin-top: 30px;
  width: 1100px;
  height: 300px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const Footer = styled.div`
  small {
    color: #ccc;
    size: 16px;
    margin: 50px 30px;
  }
`;

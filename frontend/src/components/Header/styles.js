import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;

    button {
      margin: 5px 0 0;
      width: 71;
      height: 44px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 15px 20px;

      &:hover {
        background: ${darken(0.08, "#D44059")};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin: 0 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;

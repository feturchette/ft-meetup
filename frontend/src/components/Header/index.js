import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "~/store/modules/auth/actions";

import logo from "~/assets/logo-header.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  function handleSignOut(data) {
    dispatch(signOut(data));
  }
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="GoBarber" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
          </Profile>
          <button onClick={handleSignOut}>Log Out</button>
        </aside>
      </Content>
    </Container>
  );
}

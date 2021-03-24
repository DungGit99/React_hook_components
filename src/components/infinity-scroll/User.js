import React from 'react';
import { Wrapper } from './User.styles';

const User = ({ user }) => (
  <Wrapper>
    {user.email}
  </Wrapper>
)

export default User;
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  padding: 20px;
  align-items: center;
  border-bottom: solid lightgrey;
`;

const Img = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const UserInfoContainer = styled.div`
  width: 100%;
`;

const UserInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding: 12px 0px 12px 40px;
  box-sizing: content-box;
  color: var(--third-color);
`;

const Username = styled.div`
  font-size: 28px;
  font-weight: 200;
`;

const FullName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: var(--main-color);
`;

export default function UserInfo({ user }) {
  if (!user) {
    return null;
  }
  return (
    <Container>
      <Img src={user.profile_image.large} alt={user.username} />

      <UserInfoContainer>
        <UserInfoRow>
          <Username>User: {user.username}</Username>
        </UserInfoRow>
        <UserInfoRow>
          <div>{user.total_collections} collections</div>
          <div>{user.total_photos} photos</div>
          <div>{user.total_likes} likes</div>
        </UserInfoRow>
        <UserInfoRow>
          <FullName>
            Full Name:
            <span style={{ color: 'var(--secondary-color)' }}>
              {' '}
              {user.name}
            </span>
          </FullName>
        </UserInfoRow>
      </UserInfoContainer>
    </Container>
  );
}

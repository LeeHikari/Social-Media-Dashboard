import styled from "styled-components";

export function Header({ totalFollowers }) {
  return (
    <HeaderDiv>
      <Title>Social Media Dashboard</Title>
      {/* Needs a comma */}
      <FollowerCount>Total Followers: {totalFollowers}</FollowerCount>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #f3f6f4;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const FollowerCount = styled.span`
  font-weight: bold;
  font-size: 14px;
  opacity: 0.5;
`;

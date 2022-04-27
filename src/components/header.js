import styled from "styled-components";

export function Header() {
  return (
    <HeaderDiv>
      <Title>Social Media Dashboard</Title>
      <FollowerCount>Total Followers: 23,004</FollowerCount>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`;

const Title = styled.h1`
  margin-bottom: 0px;
`;

const FollowerCount = styled.span`
  opacity: 0.5;
`;

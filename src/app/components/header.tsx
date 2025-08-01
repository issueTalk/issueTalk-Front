'use client';
import styled from 'styled-components';

import Link from 'next/link';

export default function Header() {
  return (
    <HeaderWrapper>
      <Left>
        <img src="/assets/icon.svg" alt="로고" width={128} height={32}/>
      </Left>
      <Center>
        <NavItem as={Link} href="/discussion">토론하기</NavItem>
        <NavItem as={Link} href="/today">오늘의 주제</NavItem>
      </Center>
      <Right>
        <NavItem as={Link} href="/login">로그인</NavItem>
        <NavItem as={Link} href="/signup">회원가입</NavItem>
      </Right>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  padding: 1.2rem 2rem;
  border-bottom: 1px solid #C2C2C2;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;

const NavItem = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

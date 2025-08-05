'use client';
import styled from 'styled-components';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {

  const [islogin,Setislogin] = useState(false);

  const [nickname,setnickname] = useState("");

  const router = useRouter();

useEffect(()=>{
  const token = localStorage.getItem('token');
  const Localnickname = localStorage.getItem('nickname');

  if (Localnickname && Localnickname.trim() !== "") {
    console.log("닉네임");
    setnickname(Localnickname);
    Setislogin(true);
  }
}, []);

function Logout(){
  console.log(nickname);
  localStorage.setItem("token", "");
  localStorage.setItem("nickname", "");
  setnickname("");
  Setislogin(false);
}

function Gohome(){
  router.push("/");
}
  return (
    <HeaderWrapper>
      <Left>
        <img src="/assets/icon.svg" alt="로고" width={128} height={32} onClick={()=>{Gohome()}}/>
      </Left>
      <Center>
        <NavItem as={Link} href="/discussion">토론하기</NavItem>
        <NavItem as={Link} href="/today">오늘의 주제</NavItem>
      </Center>
      <Right>
        {islogin ? (
          <Infoform>
            <Infoitem>{nickname}</Infoitem>
            <Infoitem onClick={() => Logout()}>로그아웃</Infoitem>
          </Infoform>
        ) : (
          <Infoform>
            <NavItem as={Link} href="/login">로그인</NavItem>
            <NavItem as={Link} href="/signup">회원가입</NavItem>
          </Infoform>
        )}
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

const Infoform = styled.div`
  display : flex;
  align-items : center;
  gap : 2vh;
`;
const Infoitem = styled.p`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

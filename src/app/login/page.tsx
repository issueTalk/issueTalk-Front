'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('nickname', data.nickname);

        alert(`${data.nickname}님 환영합니다!`);
      } else {
        alert(data.message || '로그인 실패');
      }
    } catch (err) {
      alert('오류 발생: 서버와 연결할 수 없습니다.');
    }
  };

  return (
    <Container>
      <Card>
        <CloseButton>
          <Image src="/assets/no.svg" alt="닫기" width={16} height={16} />
        </CloseButton>

        <Title>로그인</Title>

        <Form>
          <FormItem>
            <Label>이메일</Label>
            <Input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormItem>

          <FormItem>
            <Label>비밀번호</Label>
            <Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormItem>
        </Form>

        <Button onClick={handleLogin}>로그인</Button>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 55%;
  height: 60%;
  padding: 3rem 3.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormItem = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.4rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

const Button = styled.button`
  align-self: center; 
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid black;
  background: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f5f5f5;
  }
`;

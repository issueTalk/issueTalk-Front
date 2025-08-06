'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const router = useRouter();

const handleSignup = async () => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
      {
        userId: userId,
        password: password,
        nickname: nickname,
      },
      {
        withCredentials: true,
      }
    );
    console.log("[회원가입 성공]", response.data);
    // 성공 후 이동 로직도 여기에 추가 가능
  } catch (error) {
    console.error("[회원가입 실패]", error);
    // 에러 응답이 있으면 메시지 출력
    if (error) {
      alert(error|| "회원가입 실패");
    } else {
      alert("네트워크 에러");
    }
  }
};


  return (
    <Container>
      <Card>
        <CloseButton>
          <Image src="/assets/no.svg" alt="닫기" width={16} height={16} />
        </CloseButton>

        <Title>회원가입</Title>

        <Form>
          <FormItem>
            <Label>이메일</Label>
            <Input
              placeholder="이메일을 입력해주세요"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
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

          <FormItem>
            <Label>닉네임</Label>
            <Input
              type="text"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </FormItem>
        </Form>

        <Button onClick={handleSignup}>회원가입</Button>
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
  width: 100%;
  padding: 0.5rem 0;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  font-size: 1rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  margin-left: 1rem;
  padding: 0.4rem 1rem;
  border: 1px solid #999;
  background: none;
  border-radius: 100px;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

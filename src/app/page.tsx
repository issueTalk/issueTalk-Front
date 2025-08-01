'use client';

import styled from "styled-components";
const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 1.5rem;
`;

const SubText = styled.p`
  font-size: 0.875rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button<{ variant?: 'filled' | 'outline' }>`
  padding: 0.5rem 1.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  cursor: pointer;
  ${(props) =>
    props.variant === 'filled'
      ? `
    background-color: black;
    color: white;
    border: none;
  `
      : `
    background-color: transparent;
    color: black;
    border: 1px solid black;
  `}
`;

export default function HomePage() {
  return (
    <Container>
      <Main>
        <Title>
          AI와 함께하는 <br />건전한 토론
        </Title>
        <SubText>정치와 사회 이슈를 AI의 도움으로 더 똑똑하게 토론해요!</SubText>
        <ButtonGroup>
          <Button variant="outline">토론 시작하기</Button>
          <Button variant="filled">더 알아보기</Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
}
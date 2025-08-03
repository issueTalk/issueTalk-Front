'use client';

import Image from "next/image";
import styled from "styled-components";

export default function Today(){
    return(
        <Container>
           <TiltedCard /> 
           <TiltedCard /> 
           <TiltedCard /> 
        </Container>
    )
}
const Container =styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15%;
`;


function TiltedCard() {
  return (
    <Card>
      <TiltedImageWrapper>
        <Image src="/assets/today1.svg" alt="카드 이미지" fill />
      </TiltedImageWrapper>
      <Label>윤석열 탄핵</Label>
    </Card>
  );
}

const Card = styled.div`
  width: 18%;
  height: 800px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
`;

const TiltedImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skewY(-12deg); 
  transform-origin: top left;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  left: 30%;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  font-weight: bold;
`;

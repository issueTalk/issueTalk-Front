'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

interface RoomCardProps {
  title: string;
  hash: string;
  stat: any;
  type: string;
  onEnter: () => void;
}

function RoomCard({ title, hash, stat, type, onEnter }: RoomCardProps) {
  return (
    <Card>
      <CardTop>
        <CardTitle>
          {title} <CardHash>#{hash}</CardHash>
        </CardTitle>
        <CardStat>{stat}</CardStat>
        <CardType>{type}</CardType>
      </CardTop>
      <CardBottom>
        <EnterBtn onClick={onEnter}>참가하기</EnterBtn>
      </CardBottom>
    </Card>
  );
}




export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState("2");
  const [isPublic, setIsPublic] = useState(true);
  const [password, setPassword] = useState("");


  const [title,settitle] = useState("");


  const rooms = [
    { title: "윤석열 탄핵", hash: "윤석열 탄핵", stat: "3/4", type: "비공개방" },
    { title: "윤석열 탄핵", hash: "윤석열 탄핵", stat: "2/4", type: "공개방" },
  ];

  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chat/room/all`)
    .then(response => {
      console.log(response)
    })
  })

  function RoomCreate(){
  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/chat/room?topicId=${title}&maxTeamSize=${selectedPeople}`)
  .then(response => {
    console.log(response)
  })

  }


  return (
    <Container>
      <Inner>
        <TabWrap>
          <TabBtn onClick={() => setModalOpen(true)}>방생성</TabBtn>
        </TabWrap>
        <CardList>
          {rooms.map((room, idx) => (
            <RoomCard key={idx} {...room} onEnter={() => alert("참가")} />
          ))}
        </CardList>
      </Inner>

      {modalOpen && (
        <ModalBackdrop>
          <Modal>
            <CloseBtn onClick={() => setModalOpen(false)}>×</CloseBtn>
            <ModalContent>
              <Label>방제목</Label>
              <Input placeholder="방제목을 입력해주세요." value={title} onChange={e => settitle(e.target.value)}/>

              <Label>참여 인원수</Label>
              <ButtonGroup>
                {["2", "4", "6"].map((label) => (
                  <SelectBtn
                    key={label}
                    selected={selectedPeople === label}
                    onClick={() => setSelectedPeople(label)}
                  >
                    {label}
                  </SelectBtn>
                  
                ))}
              </ButtonGroup>

              <Label>공개 설정</Label>
              <ButtonGroup>
                <ToggleBtn selected={isPublic} onClick={() => setIsPublic(true)}>예</ToggleBtn>
                <ToggleBtn selected={!isPublic} onClick={() => setIsPublic(false)}>아니요</ToggleBtn>
              </ButtonGroup>
              {!isPublic && (
                <>
                    <Label>비밀번호</Label>
                    <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </>
              )}
              <Label>토론주제</Label>
              <Input placeholder="토론주제를 입력해주세요." />

              <SubmitBtn onClick={() => {RoomCreate()}}>방생성</SubmitBtn>
            </ModalContent>
          </Modal>
        </ModalBackdrop>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Inner = styled.div`
  padding: 50px 8vw;
`;

const TabWrap = styled.div`
  margin-bottom: 36px;
`;

const TabBtn = styled.button`
  background: #fff;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 6px 22px;
  font-size: 15px;
  cursor: pointer;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const Card = styled.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #2b1818;
  min-height: 172px;
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  background: #000;
  color: white;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardBottom = styled.div`
  background: #fff;
  padding: 16px 28px;
  display: flex;
  justify-content: flex-end;
`;

const CardTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const CardHash = styled.span`
  color: #ddd;
  font-size: 13px;
  margin-left: 6px;
`;

const CardStat = styled.div`
  font-size: 16px;
`;

const CardType = styled.div`
  font-size: 16px;
`;

const EnterBtn = styled.button`
  background: none;
  border: none;
  color: #221111;
  font-size: 16px;
  cursor: pointer;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const Modal = styled.div`
  width: 600px;
  background: white;
  border-radius: 12px;
  padding: 40px 36px;
  position: relative;
  box-shadow: 0 8px 40px rgba(0,0,0,0.2);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px; right: 16px;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #999;
  padding: 8px 0;
  font-size: 14px;
  outline: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
`;

const SelectBtn = styled.button`
  border: 1px solid ${({ selected }) => (selected ? "#000" : "#aaa")};
  border-radius: 24px;
  padding: 6px 18px;
  background: ${({ selected }) => (selected ? "#000" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  font-size: 14px;
  cursor: pointer;
`;

const ToggleBtn = styled.button`
  border: 1px solid ${({ selected }) => (selected ? "#000" : "#aaa")};
  border-radius: 18px;
  padding: 6px 18px;
  background: ${({ selected }) => (selected ? "#000" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  font-size: 14px;
  cursor: pointer;
`;

const SubmitBtn = styled.button`
  align-self: flex-end;
  margin-top: 18px;
  border: 1px solid #444;
  border-radius: 16px;
  padding: 6px 18px;
  font-size: 14px;
  background: white;
  cursor: pointer;
`;

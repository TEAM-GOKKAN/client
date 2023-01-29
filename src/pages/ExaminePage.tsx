import React from 'react';
import ModalFull from '../components/common/ModalFull';
import Examinecheck from '../components/Examine/Examinecheck';
import { useAtom } from 'jotai';
import { examineCheckAtom } from '../store/examineAtom';
import ExamineApprove from '../components/Examine/ExamineApprove';
import ExamineDeny from '../components/Examine/ExamineDeny';
import ExamineSubmitButton from '../components/Examine/ExamineSubmitButton';
import styled from 'styled-components';

const ExaminePage = () => {
  const [isApprove] = useAtom(examineCheckAtom);
  return (
    <ModalFull title="감정평가">
      <Container>
        <Examinecheck />
        {isApprove === 'COMPLETE' && <ExamineApprove />}
        {isApprove === 'RETURN' && <ExamineDeny />}
        <ExamineSubmitButton />
      </Container>
    </ModalFull>
  );
};

export default ExaminePage;

const Container = styled.div`
  position: fixed;
  width: 100%;
`;

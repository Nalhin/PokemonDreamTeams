import * as React from 'react';
import Loading from '../../../components/Loading/Loading';
import TeamTypeRadioGroup from '../../../components/TeamTypeRadioGroup/TeamTypeRadioGroup';
import Input from '../../../components/Input/Input';
import { Typography } from '@material-ui/core';
import TeamRoster from '../../../components/TeamRoster/TeamRoster';
import Button from '../../../components/Button/Button';
import { NewTeam } from '../../../interfaces/newTeam';
import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { PADDING } from '../../../styles/padding';

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(Paper)`
  width: 80%;
  max-width: 450px;
  padding: ${PADDING.LARGE};
`;

const StyledLoading = styled(Loading)`
  display: flex;
  flex-direction: column;
`;

interface TeamModalProps {
  teamState: NewTeam;
  setType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTeamChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  closeModal: () => void;
  openPickPokemonModal: () => void;
  handleConfirm: () => void;
  testId: string;
}

const TeamModal: React.FC<TeamModalProps> = ({
  handleTeamChange,
  setType,
  teamState,
  handleConfirm,
  isLoading,
  closeModal,
  openPickPokemonModal,
  testId,
}) => {
  const { description, type, name, roster } = teamState;
  return (
    <StyledModal open onClose={closeModal} data-testid={testId}>
      <StyledContainer data-testid="teams">
        <StyledLoading isLoading={isLoading} isRelative>
          <TeamTypeRadioGroup value={type} onChange={setType} />
          <Input
            onChange={handleTeamChange}
            value={name}
            name="name"
            label="Team name"
          />
          <Input
            onChange={handleTeamChange}
            value={description}
            name="description"
            label="Team description"
          />
          <Typography variant="subtitle1" component="h2">
            Roster
          </Typography>
          <TeamRoster roster={roster} />
          <Button onClick={openPickPokemonModal}>Change Roster</Button>
          <Button onClick={handleConfirm}>Save</Button>
        </StyledLoading>
      </StyledContainer>
    </StyledModal>
  );
};

export default TeamModal;

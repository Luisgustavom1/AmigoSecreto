import React, { useEffect } from 'react';
import { useParticipantContext } from '../../Contexts/ParticipantContext';
import Participants from '../Participants';

import { Container, Content } from './styles';

const ParticipantesContainer: React.FC = () => {
  const { participants, setParticipants } = useParticipantContext();

  useEffect(() => {
    fetch('http://localhost:3333')
      .then(async res => {
        const data = await res.json();
        setParticipants(data.participants);
      })
  }, [])

  return (
    <Container>
      <h1>Ver Participantes <i className="fas fa-chevron-down"></i></h1>

      <Content>
        {participants.map(participant => (
          <Participants
            key={participant._id} 
            name={participant.name}
            email={participant.email}
            id={participant._id}
          />
        ))}
      </Content>
    </Container>    
  );
}

export default ParticipantesContainer;
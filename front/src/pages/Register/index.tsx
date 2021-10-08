import React from 'react';

import { useParticipantContext } from '../../Contexts/ParticipantContext';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import ParticipantesContainer from '../../components/ParticipantsContainer';

import logo from '../../assets/img/logo.png';
import { Container, SectionContainer } from './styles';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const history = useHistory();
  const { showModal } = useParticipantContext();
  
  const handleClick = () => {
    fetch('http://localhost:3333/sort')
      .then(async res => {
        const data = await res.json();

        alert(data.message);

        const location = {
          pathname: '/',
          state: { fromDashboard: true }
        };

        history.push(location);
      })
  }; 

  return (
    <Container>
      <img 
        className='logo'
        src={logo}
        alt='Logo da eCondos'
      />

      <SectionContainer>
        <Form />
        <ParticipantesContainer />
      </SectionContainer>

      <Button onClick={handleClick}>
        Sortear
      </Button>
      {showModal && <Modal />}
    </Container>
  )
}

export default Register;
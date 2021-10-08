import React, { SyntheticEvent } from 'react';
import { toast } from 'react-toastify';

import { useHistory, useLocation } from 'react-router';
import { useParticipantContext } from '../../Contexts/ParticipantContext';
import { useQuery } from '../../hooks/useQuery';
import TextField from '../TextField';

import { Container, Content, NewButton } from './styles';

const Modal: React.FC = () => {
  const query = useQuery();
  const history = useHistory();
  const { setShowModal, participants, setParticipants } = useParticipantContext();

  const id = query.get('id');

  const participantsUpdate = participants;
  const participant = participantsUpdate.find(participant => participant._id === id);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
    };

    const name = target.name.value;
    const email = target.email.value;

    if(!name || !email) {
      alert('Preencha todos os campos');
    } else {
      fetch(`http://localhost:3333/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email
        }),
      }).then(async res => {
        const data = await res.json();

        if (data.success) {
          toast.success('Participante Editado');

          const location = {
            pathname: '/register',
            state: { fromDashboard: true }
          };

          if(participant) {
            participant.name = name;
            participant.email = email;

            setParticipants(participantsUpdate);
          }

          history.push(location);
          setShowModal(false);
        } else {
          toast.error(data.message) 
        }        
      }).catch(err => console.log(err))
    }
  }

  return (
    <Container>
      <Content onSubmit={(e) => handleSubmit(e)}>
        <header>
          <i 
            className="fas fa-times"
            onClick={() => setShowModal(false)}
          />
        </header>
        <main>
          <h1>
            Editar - Luis Gustavo
          </h1>
          <TextField 
            label='Nome'
            name='name'
            id='name'
            placeholder='Nome do participante'
            defaultValue={participant?.name}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.3333 17V15.3333C16.3333 14.4493 15.9821 13.6014 15.357 12.9763C14.7319 12.3512 13.8841 12 13 12H6.33333C5.44927 12 4.60143 12.3512 3.97631 12.9763C3.35119 13.6014 3 14.4493 3 15.3333V17" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.66658 8.66667C11.5075 8.66667 12.9999 7.17428 12.9999 5.33333C12.9999 3.49238 11.5075 2 9.66658 2C7.82563 2 6.33325 3.49238 6.33325 5.33333C6.33325 7.17428 7.82563 8.66667 9.66658 8.66667Z" stroke="url(#paint1_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
              <linearGradient id="paint0_linear" x1="18.9588" y1="4.43616" x2="17.4559" y2="18.4475" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7A7A7A"/>
              <stop offset="0.515625" stop-color="#7A7A7A"/>
              <stop offset="1" stop-color="#7A7A7A"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="14.3127" y1="-8.08512" x2="9.31628" y2="9.38245" gradientUnits="userSpaceOnUse">
              <stop stop-color="#7A7A7A"/>
              <stop offset="0.515625" stop-color="#7A7A7A"/>
              <stop offset="0.9999" stop-color="#757C85"/>
              <stop offset="1" stop-color="#7A7A7A"/>
              </linearGradient>
              </defs>
            </svg>
          </TextField>
          <TextField 
            label='E-mail'
            name='email'
            id='email'
            placeholder='Example@gmail.com'
            defaultValue={participant?.email}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#7A7A7A"/>
            </svg>
          </TextField>
          <NewButton type='submit'>Editar</NewButton>
        </main>
      </Content>
    </Container>
  );
}

export default Modal;
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useParticipantContext } from '../../Contexts/ParticipantContext';

import { Container } from './styles';

interface ParticipantsProps {
  name: string,
  email: string,
  id: string
}

const Participants = ({ name, email, id }: ParticipantsProps) => {
  const { setShowModal, participants, setParticipants } = useParticipantContext();

  const deleteParticipant = (id: string) => {
    fetch('http://localhost:3333/', {
      method: 'DELETE',
      headers: {
        id
      }
    })
    .then(async res => {
      const data = await res.json();

      data.success ? toast.success(data.message) : toast.error(data.message)

      const participantsUpdate = participants.filter(participant => participant._id !== id);
      setParticipants(participantsUpdate);
    })
    .catch(err => console.log(err));
  };

  return (
    <Container>
      {name} - {email} 
      <div>
        <svg onClick={() => deleteParticipant(id)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.99999 15.8333C4.99999 16.75 5.74999 17.5 6.66666 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99999V15.8333ZM6.66666 7.5H13.3333V15.8333H6.66666V7.5ZM12.9167 3.33333L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333V3.33333H12.9167Z" fill="#343A40"/>
        </svg>
        <Link to={`/register?id=${id}`}>
          <svg onClick={() => setShowModal(true)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 13.8771V17.0021H5.125L14.3417 7.78542L11.2167 4.66042L2 13.8771ZM16.7583 5.36875C17.0833 5.04375 17.0833 4.51875 16.7583 4.19375L14.8083 2.24375C14.4833 1.91875 13.9583 1.91875 13.6333 2.24375L12.1083 3.76875L15.2333 6.89375L16.7583 5.36875Z" fill="#343A40"/>
          </svg>
        </Link>
      </div>
    </Container>
  );
}

export default Participants;
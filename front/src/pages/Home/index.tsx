import { useHistory } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import Button from '../../components/Button';

import { Container, NewButtonOutline } from './styles';

const Home: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('register');
  };

  const newSecretFriend = () => {
    fetch('http://localhost:3333/all', {
      method: 'DELETE'
    })

    history.push('register');
  }

  return (
    <Container>
      <img 
        className='logo'
        src={logo}
        alt='Logo da eCondos'
      />
      <h1>
        Amigo Secreto da eCondos
      </h1>
      <Button
        icon={
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.7895 8.33333L38.6842 20L25.7895 31.6667" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M38.6842 20H5.52631" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
        onClick={() => handleClick()}
      >
        Participar 
      </Button>
      <NewButtonOutline
        onClick={() => newSecretFriend()}
      >
        Novo Amigo Secreto
      </NewButtonOutline>
    </Container>
  );
}

export default Home;

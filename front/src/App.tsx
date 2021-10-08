import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { ParticipantProvider } from './Contexts/ParticipantContext';
import Routes from './Routes/routes';

import { GlobalStyle } from './styles/globalStyle';
import { theme } from "./styles/theme";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ParticipantProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
          <GlobalStyle />
          <Routes />
      </ThemeProvider>
    </ParticipantProvider>
  );
}

export default App;

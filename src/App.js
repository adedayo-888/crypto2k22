import { ThemeProvider, useTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { inputGlobalStyles } from './globalStyles';
import Header from './components/Header';
import Homepage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
const styles = {
  App: {
    background: '#261132',
    minHeight: '100vh',
  },
};
function App() {
  const theme = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {inputGlobalStyles}
        <Box sx={styles.App}>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            {/* <Route path='/coins/:id' element={<CoinPage/>}/> */}
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

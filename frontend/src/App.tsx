
import { Header } from './components/Header';
import './index.css'
import { AboutUsPage } from './pages/AboutUsPage';
import { HomePage } from './pages/HomePage';

export const App = () => {

  return (
    <>
      <Header/>
      <HomePage/>
      <AboutUsPage/>
    </>
  );
};
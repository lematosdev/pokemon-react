import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardDetails } from '../CardDetails';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

type Props = {
  children: ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route
          path='cards/:cardId'
          element={<CardDetails />}
        />
      </Routes>
      <Footer />
    </>
  );
};

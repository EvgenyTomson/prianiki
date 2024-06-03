import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import AuthForm from './components/AuthForm';
import DataTable from './components/DataTable';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <>
      <Header />
      {token ? <DataTable /> : <AuthForm />}
      <Footer />
    </>
  );
};

export default App;

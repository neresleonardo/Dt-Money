import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {


  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleToOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleToCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpwnNewTransactionModal={handleToOpenNewTransactionModal} />

      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


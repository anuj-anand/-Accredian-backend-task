import React, { useState } from 'react';
import Modal from './components/Modal';
import ReferralForm from './components/ReferralForm';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Refer & Earn</h1>
        <button onClick={handleOpenModal} className="refer-now-btn">Refer Now</button>
      </header>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ReferralForm />
      </Modal>
    </div>
  );
}

export default App;

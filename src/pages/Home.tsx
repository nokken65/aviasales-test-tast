import React from 'react';

import CountTransfersForm from '@/components/forms/CountTransfersForm';
import SortForm from '@/components/forms/SortForm';
import LoaderLine from '@/components/LoaderLine';
import TicketContainer from '@/components/TicketContainer';
import { useAppSelector } from '@/hooks/redux';
import { selectPollingTickets } from '@/store/ticketsSlice';
import styles from '@/styles/Home.module.scss';

const Home: React.FC = () => {
  const polling = useAppSelector(selectPollingTickets);

  return (
    <>
      <div>
        <CountTransfersForm />
      </div>
      <div className={styles.container}>
        <SortForm />
        {polling && <LoaderLine />}
        <TicketContainer />
      </div>
    </>
  );
};

export default Home;

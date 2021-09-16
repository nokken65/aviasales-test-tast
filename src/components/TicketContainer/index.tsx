import React, { useEffect, useState } from 'react';

import TicketCard from '@/components/TicketCard';
import { STATUS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useSearchId from '@/hooks/useSearchId';
import {
  selectHandledTickets,
  updateTickets,
} from '@/store/handledTicketsSlice';
import {
  fetchTickets,
  selectPollingTickets,
  selectStatusTickets,
  selectTickets,
} from '@/store/ticketsSlice';

import Button from '../Button';
import styles from './styles.module.scss';

const TicketContainer: React.FC = () => {
  const [countTickets, setCountTickets] = useState(5);
  const polling = useAppSelector(selectPollingTickets);
  const status = useAppSelector(selectStatusTickets);
  const tickets = useAppSelector(selectHandledTickets);
  const defaultTickets = useAppSelector(selectTickets);
  const searchId = useSearchId();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateTickets(defaultTickets));
  }, [defaultTickets]);

  useEffect(() => {
    if (searchId && polling && status !== STATUS.Loading) {
      const t = setTimeout(() => {
        dispatch(
          fetchTickets(
            `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
          )
        );
      }, 100);
      return () => clearTimeout(t);
    }
  }, [searchId, status]);

  const handleCountTickets = () => {
    if (countTickets + 5 > tickets.length) {
      setCountTickets(tickets.length);
    } else {
      setCountTickets(countTickets + 5);
    }
  };

  return (
    <>
      {tickets &&
        tickets
          .slice(0, countTickets)
          .map((ticket, index) => <TicketCard key={index} ticket={ticket} />)}
      <Button onClick={handleCountTickets} classes={[styles.showMore]}>
        Показать еще 5 билетов!
      </Button>
    </>
  );
};

export default TicketContainer;

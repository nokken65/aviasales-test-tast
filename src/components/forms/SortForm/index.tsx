import React from 'react';

import Button from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  changeSort,
  selectSortOptions,
  updateTickets,
} from '@/store/handledTicketsSlice';
import { selectTickets } from '@/store/ticketsSlice';

import styles from './styles.module.scss';

const OPTIONS: string[] = ['Самый дешевый', 'Самый быстрый', 'Оптимальный'];

const SortForm: React.FC = () => {
  const tickets = useAppSelector(selectTickets);
  const sortOptions = useAppSelector(selectSortOptions);
  const dispatch = useAppDispatch();

  const handleClick = (option: number) => {
    dispatch(changeSort(option));
    dispatch(updateTickets(tickets));
  };

  return (
    <form className={styles.wrapper}>
      {OPTIONS.map((option, index) => (
        <Button
          key={option}
          classes={[
            styles.button,
            index === sortOptions ? styles.active : styles.inactive,
          ]}
          onClick={() => handleClick(index)}
        >
          {option}
        </Button>
      ))}
    </form>
  );
};

export default SortForm;

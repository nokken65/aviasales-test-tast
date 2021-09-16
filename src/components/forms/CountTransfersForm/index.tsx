import React from 'react';

import Card from '@/components/Card';
import { TRANSFER_OPTIONS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  addTransfers,
  removeTransfers,
  selectTransferOptions,
  updateTickets,
} from '@/store/handledTicketsSlice';
import { selectTickets } from '@/store/ticketsSlice';

import styles from './styles.module.scss';

const OPTIONS: string[] = [
  'Все',
  'Без пересадок',
  '1 пересадка',
  '2 пересадки',
  '3 пересадки',
];

const CountTransfersForm: React.FC = () => {
  const tickets = useAppSelector(selectTickets);
  const transfers = useAppSelector(selectTransferOptions);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent, option: TRANSFER_OPTIONS) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      dispatch(addTransfers(option));
    } else {
      dispatch(removeTransfers(option));
    }
    dispatch(updateTickets(tickets));
  };

  return (
    <Card>
      <form className={styles.wrapper}>
        <label className={styles.title}>Количество пересадок</label>
        {OPTIONS.map((option, index) => (
          <div className={styles.option} key={option}>
            <input
              type="checkbox"
              name={option}
              checked={transfers.includes(index - 1)}
              id={`${OPTIONS[index]}_${TRANSFER_OPTIONS[index]}`}
              onChange={(event) => handleChange(event, index - 1)}
            />
            <label htmlFor={`${OPTIONS[index]}_${TRANSFER_OPTIONS[index]}`}>
              {option}
            </label>
          </div>
        ))}
      </form>
    </Card>
  );
};

export default CountTransfersForm;

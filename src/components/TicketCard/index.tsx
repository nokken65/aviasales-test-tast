import React from 'react';

import ITicket from '@/models/ITicket';
import currencyFormat from '@/utils/currencyFormat';

import Card from '../Card';
import TicketSegment from '../TicketSegment';
import styles from './styles.module.scss';

interface IProps {
  ticket: ITicket;
}

const TicketCard: React.FC<IProps> = ({ ticket }) => {
  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.row} style={{ marginBottom: '20px' }}>
          <p className={styles.price}>{currencyFormat(ticket.price)} P</p>
          <img
            src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            alt="avia company"
            width={99}
            height={36}
          />
        </div>
        {ticket.segments.map((segment, index) => (
          <div key={index} className={styles.row}>
            <TicketSegment segment={segment} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TicketCard;

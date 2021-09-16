import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SORT_OPTIONS, TRANSFER_OPTIONS } from '@/constants';
import ITicket from '@/models/ITicket';
import { RootState } from '@/store';
import filterTickets from '@/utils/filterTickets';
import sortTickets from '@/utils/sortTickets';

type stateType = {
  tickets: ITicket[];
  transfers: number[];
  sort: SORT_OPTIONS;
};

const initialState: stateType = {
  tickets: [],
  transfers: [-1],
  sort: SORT_OPTIONS.Price,
};

const handledTicketsSlice = createSlice({
  name: 'handledTickets',
  initialState,
  reducers: {
    addTransfers: (state, action: PayloadAction<TRANSFER_OPTIONS>) => {
      if (action.payload === TRANSFER_OPTIONS.All) {
        state.transfers = [TRANSFER_OPTIONS.All];
      } else {
        if (state.transfers.includes(TRANSFER_OPTIONS.All)) {
          state.transfers = [action.payload];
        } else if (
          state.transfers.length === 3 &&
          !state.transfers.includes(action.payload)
        ) {
          state.transfers = [TRANSFER_OPTIONS.All];
        } else {
          state.transfers = [...state.transfers, action.payload];
        }
      }
    },
    removeTransfers: (state, action: PayloadAction<TRANSFER_OPTIONS>) => {
      if (action.payload === TRANSFER_OPTIONS.All) {
        state.transfers = [TRANSFER_OPTIONS.All];
      } else {
        if (
          state.transfers.includes(action.payload) &&
          state.transfers.length !== 1
        ) {
          state.transfers = state.transfers.filter(
            (opt) => opt !== action.payload
          );
        } else {
          state.transfers = [TRANSFER_OPTIONS.All];
        }
      }
    },
    changeSort: (state, action: PayloadAction<SORT_OPTIONS>) => {
      state.sort = action.payload;
    },
    updateTickets: (state, action: PayloadAction<ITicket[]>) => {
      if (state.tickets.length !== 0) {
        state.tickets = sortTickets(
          filterTickets(action.payload, state.transfers),
          state.sort
        );
      } else {
        state.tickets = action.payload;
      }
    },
  },
});

export const selectHandledTickets = (state: RootState): ITicket[] =>
  state.handledTickets.tickets;
export const selectTransferOptions = (state: RootState): TRANSFER_OPTIONS[] =>
  state.handledTickets.transfers;
export const selectSortOptions = (state: RootState): SORT_OPTIONS =>
  state.handledTickets.sort;
export const { changeSort, addTransfers, removeTransfers, updateTickets } =
  handledTicketsSlice.actions;
export default handledTicketsSlice.reducer;

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { STATUS } from '@/constants';
import ITicket from '@/models/ITicket';
import { RootState } from '@/store';

type stateType = {
  tickets: ITicket[];
  status: STATUS;
  polling: boolean;
  errors: string[];
};

const initialState: stateType = {
  tickets: [],
  status: STATUS.Idle,
  polling: true,
  errors: [],
};

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (url: string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      return new Promise(error);
    }
  }
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets: (state, action: PayloadAction<ITicket[] | ITicket>) => {
      state.tickets.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickets.pending, (state) => {
      state.status = STATUS.Loading;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      if (action.payload.stop) {
        state.status = STATUS.Idle;
        state.polling = false;
      } else {
        state.status = STATUS.Succeeded;
        state.tickets = [...state.tickets, ...action.payload.tickets];
      }
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      state.status = STATUS.Failed;
      state.errors = [...state.errors, action.error.message || 'Error'];
    });
  },
});

export const selectTickets = (state: RootState): ITicket[] =>
  state.tickets.tickets;
export const selectStatusTickets = (state: RootState): STATUS =>
  state.tickets.status;
export const selectPollingTickets = (state: RootState): boolean =>
  state.tickets.polling;
export const { addTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;

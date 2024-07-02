import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { initialState } from './initialState';
import { delPhones, getPhones, newPhones } from './helpers';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const arrThunk = [fetchContacts, addContact, deleteContact];
const arrTypeThunk = type => arrThunk.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

// createSlice
const phonesSlice = createSlice({
  name: 'phones',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, getPhones)
      .addCase(addContact.fulfilled, newPhones)
      .addCase(deleteContact.fulfilled, delPhones)
      .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrTypeThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), handleRejected);
  },
});

export const phonesReducer = phonesSlice.reducer;
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  addContactFulfilledReducer,
  deleteContactFulfilledReducer,
  fetchContactsFulfilledReducer,
  handleFulfilled,
  handlePending,
  handleRejected,
  logOutFulfilledReducer,
} from './contactsSliceReducers';
import { logOut } from 'redux/auth/operations';
import { getActions } from 'helpers/functions';

const contactsInitialState = { items: [], isLoading: false, error: null };
const extraActions = [fetchContacts, addContact, deleteContact];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addMatcher(
        isAnyOf(...getActions(extraActions, 'pending')),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActions(extraActions, 'fulfilled')),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...getActions(extraActions, 'rejected')),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
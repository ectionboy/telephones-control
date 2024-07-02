import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addNewContact, delContact, getContacts } from 'api/contacts';
import db from "../../db/data.json";
// import axios from 'axios';

// axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'phones/fetchPhones', () => db.phones //getContacts()
);
export const addContact = createAsyncThunk(
  'phones/addPhones', async (newContact) => {
		return // await addNewContact(newContact)
	}
);
export const deleteContact = createAsyncThunk(
  'phones/deletePhones',async (contactId) => {
		return // await delContact(contactId)
        }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContacts,
  deleteContacts,
  editContacts,
} from 'components/utils/contactsApi';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchEditContacts = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const result = await editContacts(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

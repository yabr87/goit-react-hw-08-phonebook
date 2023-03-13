import instance from './ConnectionsApi';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  console.log(data);
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

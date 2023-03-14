import instance from './ConnectionsApi';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const editContacts = async data => {
  const editedContact = {
    name: data.name,
    number: data.number,
  };

  const { data: result } = await instance.patch(
    `/contacts/${data.id}`,
    editedContact
  );
  return result;
};

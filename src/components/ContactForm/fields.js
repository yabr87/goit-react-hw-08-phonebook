const fields = {
  name: {
    label: 'Name',
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
  },
  number: {
    label: 'Number',
    type: 'tel',
    name: 'number',
    title: 'The phone number must be ten digits. e.g. 0970066415',
    minLength: '10',
    maxLength: '10',
    required: true,
  },
};

export default fields;

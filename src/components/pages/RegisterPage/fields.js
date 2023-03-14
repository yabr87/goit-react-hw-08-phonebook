const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
    placeholder: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
    placeholder: 'User email',
  },
  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
    placeholder: 'User password',
    minLength: 7,
  },

  //   password: {
  //     type: 'password',
  //     name: 'password',
  //     required: true,
  //     label: 'User password',
  //     placeholder: 'User password',
  //   },
};

export default fields;
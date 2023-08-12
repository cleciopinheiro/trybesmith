const validPassword = 'chang3m3';
const hashPassword = '$2a$12$cz1VDt6MEbvl7sn6Lju2buiVLyp2rU3m2zs8x0PosEhSKeDMFN5n.';

const nonExistingUser = {
  id: 2,
  username: '',
  password: validPassword
};

const nonExistingPassword = {
  id: 2,
  username: 'user',
  password: ''
};

const userInvalid = {
  id: 2,
  username: 'Troll',
  password: validPassword
};

const userExisting = {
  id: 1,
  username: 'Arya',
  vocation: 'Knight',
  level: 99,
  password: hashPassword
};

const userValid = {
  username: 'Arya',
  password: validPassword
};

export {
  nonExistingUser,
  nonExistingPassword,
  userInvalid,
  userExisting,
  userValid
};
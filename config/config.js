export default {
  database: 'books',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: `${process.env.NODE_ENV}_books.sqlite`,
    operatorsAliases: false,
    freezeTableName: true,
    define: {
      underscored: true,
    },
  },
};

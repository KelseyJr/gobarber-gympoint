require('../bootstrap');

module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: './__tests__/database.sqlite',
  define: {
    timestamps: true, // created_at e updated_at
    underscored: true, // Model=UserGroup - table=user_groups (tabela)
    underscoredAll: true, // Mesma coisa, mas para colunas e relacionamentos
  },
};

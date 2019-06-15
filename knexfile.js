module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'goodquotestest_DB',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'testdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'nodeUser',
      password: '',
      database: 'goodQuotes_DB'
    }
  }
}

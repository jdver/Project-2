module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'goodQuotes_DB',
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
      host: 'erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'exyuw99kxg5oro1n',
      password: 'mgvqltdhspxpx2x5',
      database: 'nm46ap8es9ktcn2r'
    }
  }
}

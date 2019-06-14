// *********************************************************************************
// Example.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection.js')

/**
 * Queries the Example database
 *
 * @class Example
 */
class Example {
  constructor (table = 'movies') {
    this.table = table
  }

  /**
   *
   * Find all Examples in the table
   * @returns Promise
   * @memberof Example
   */
  findAll () {
    return knex.select()
      .table(this.table)
  }

  // /**
  //  *
  //  * Find one Example in the table by id
  //  * @returns Promise
  //  * @memberof Example
  //  */
  // findOne () {
  //   return knex(this.table).returning('id')
  // }

  /**
 * create a new record
 *
 * @param {Object} values The values to insert in the form of {column: value}
 * @returns Promise
 * @memberof Example
 */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Example
   */
  destroy (where) {
    return knex(this.table)
      .where(where)
      .del()
  }
}

module.exports = new Example()

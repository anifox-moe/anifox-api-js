const axios = require('axios')
const uri = require('../uri.json').uri

/**
 *
 * @param {number|string} id - The ID of the anime you are trying to get
 */
const get = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === 'undefined') {
      reject(new Error('[Foxify]: No ID provided'))
    }

    axios.get(`${uri}/anime/${id}`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return all anime from Anifox
 */
const getAll = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${uri}/anime`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return the currently airing anime
 */
const getAiring = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${uri}/anime/season/airing`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

module.exports = {
  get,
  getAiring,
  getAll
}

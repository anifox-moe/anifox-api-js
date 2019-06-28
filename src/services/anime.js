const axios = require('axios')

/**
 *
 * @param {number|string} id - The ID of the anime you are trying to get
 */
const get = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === 'undefined') {
      reject(new Error('[Foxify]: No ID provided'))
    }

    axios.get(`${process.env.URI}/anime/${id}`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return all anime from Anifox
 */
const getAll = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.URI}/anime`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Return the currently airing anime
 */
const getAiring = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${process.env.URI}/anime/season/airing`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

module.exports = {
  get,
  getAiring,
  getAll
}

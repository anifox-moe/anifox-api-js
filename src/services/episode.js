const axios = require('axios')
const uri = require('../uri.json').uri

/**
 * Allows you to get episode information about a show
 * @param {number} id - ID of the show you are searching for
 * @param {string|number} episodeNumber - Episode number that you want to get
 */
const get = (id, episodeNumber) => {
  return new Promise((resolve, reject) => {
    if (typeof episodeNumber === 'undefined') {
      axios.get(`${uri}/episode/${id}`)
        .then(response => resolve(response.data))
        .catch(e => reject(e))
    } else {
      axios.get(`${uri}/episode/${id}/${episodeNumber}`)
        .then(response => resolve(response.data))
        .catch(e => reject(e))
    }
  })
}

module.exports = {
  get
}

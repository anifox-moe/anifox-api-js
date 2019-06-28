const axios = require('axios')

/**
 * Allows you to get episode information about a show
 * @param {number} id - ID of the show you are searching for
 * @param {string|number} episodeNumber - Episode number that you want to get
 */
const get = (id, episodeNumber) => {
  return new Promise((resolve, reject) => {
    if (typeof episodeNumber === 'undefined') {
      axios.get(`${process.env.URI}/episode/${id}`)
        .then(response => resolve(response.data))
        .catch(e => reject(e))
    } else {
      axios.get(`${process.env.URI}/episode/${id}/${episodeNumber}`)
        .then(response => resolve(response.data))
        .catch(e => reject(e))
    }
  })
}

module.exports = {
  get
}

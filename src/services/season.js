const axios = require('axios')
const uri = require('../uri.json').uri

/**
 * Get data from a season
 * @param {number|string} year - The year of the season you want to look up
 * @param {string} season - Can either be "winter", "spring", "summer", "fall"
 * @param {string=} type - The type of show you want to filter by "TV", "TVNew", "TVCon", "ONAs", "OVAs", "Specials" or "Movies".
 */
const get = (year, season, type) => {
  return new Promise((resolve, reject) => {
    if (typeof type === 'undefined') {
      axios.get(`${uri}/season/${year}/${season}`)
        .then(response => resolve(response.data))
        .catch(e => reject(e))
    }

    // For season by type
    axios.get(`${uri}/season/${year}/${season}/${type}`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

/**
 * Returns the current seasonal object
 */
const getCurrent = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${uri}/season/current`)
      .then(response => resolve(response.data))
      .catch(e => reject(e))
  })
}

module.exports = {
  get,
  getCurrent
}

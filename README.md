<h1 align="center">FoxifyJS</h1>

<p align="center">
  A simple JS Wrapper for the Anifox API
</p>

<p align="center">
  <a href="https://standardjs.com/" target="_blank">
    <img src="https://cdn.rawgit.com/feross/standard/master/badge.svg" />
  </a>
</p>
Foxify is a Node wrapper for the api powering
[Anifox](https://github.com/nathanial292/anifox-api)

Any contribution is welcomed.
Table of contents:
* [Installation](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#installation)
* [Usage](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#usage)
* [Methods](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#methods)
- * [anime.get()](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#animeget)
- * [anime.getAll()](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#animegetall)
- * [season.getSeason()](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#seasongetseason)
- * [episode.get()](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#episodeget)

## Installation
```npm install --save foxifyjs```

## Usage
```js
const foxify = require('foxifyjs')
```

## Methods

## anime
### anime.get()
Get information about a particular anime

| Parameter | Type | Description |
| --- | --- | --- |
| id | int | id of anime to get |
```js
const foxify = require('foxifyjs')
const { anime } = foxify

const id = 20
anime.get(id)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, with a single [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model)

### anime.getAll()
Get information about all anime, (optionally filtered by a type)

| Parameter | Optional | Type | Description |
| --- | --- |--- | --- |
| type | Yes | string | The type, must be either `TV`, `ONAs`, `OVAs`, `Specials` or `Movies` |
| limit | Yes | integer | Limits the amount of search results returned |
```js
const foxify = require('foxifyjs')
const { anime } = foxify

anime.getAll()
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, containing all the [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) from Anifox

### anime.getAiring()
Get the current airing anime
```js
const foxify = require('foxifyjs')
const { anime } = foxify

anime.getAiring()
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, containing all the [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) that are currently airing

### anime.search()
Get anime by a search query

| Parameter | Type | Description |
| --- | --- | --- |
| query | string | string of an anime to search for |
```js
const foxify = require('foxifyjs')
const { anime } = foxify

anime.search('Naruto')
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, containing all the [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) that match the query

## season
### season.get()
Get a list of anime for a given season, type is optional and can be ommitted but will return every anime for that season (not filtered by Ovas, Movies etc)

| Parameter | Optional | Type | Description |
| --- | --- |--- | --- |
| year | No | number | The year |
| season | No | string | The season, must be either `spring`, `summer`, `fall` or `winter` |
| type | Yes | string | The type, must be either `TV`, `ONAs`, `OVAs`, `Specials` or `Movies` |
```js
const foxify = require('foxifyjs')
const { season } = foxify

const season = 'winter'
const year = '2016'
const type = 'TV'

season.get(season, year, type)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, containing all the [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) the given season

### season.getCurrent()
Get a list of anime for the current season

```js
const foxify = require('foxifyjs')
const { season } = foxify

season.getCurrent()
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property(object) indexed by malID, containing all the [Anime model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) the current season

## episode
### episode.get()
Get a list of episode(s) for a given anime, if no episodeNumber is provided, will return all episodes

| Parameter | Optional | Type | Description |
| --- | --- |--- | --- |
| id | No |int | id of anime to get |
| episodeNumber | Yes | string | episode number to search for 
```js
const foxify = require('foxifyjs')
const { episode } = foxify

const id = 20
const episodeNumber = '125'

episode.get(id, episodeNumber)
  .then(data => console.log(data))
  .catch(err => console.log(err))
```
Returns an object with a data property array containing a list of [Episode model](https://github.com/nathanial292/FoxifyJS/blob/master/README.md#anime-model) for the provided anime

## Data models

### Anime data model
> Licensor/Producer/fromType/Genres/Synopsis may not always exist

| Property | Type | Description |
| --- | --- | --- |
| malID | int | id for the anime |
| title | string | title of the anime |
| type | string | type of anime (TV, OVA etc) |
| picture | url | 167x242 image for the anime |
| synopsis | string | description about the anime |
| licensor | string | licensor for the anime |
| link | string | link to the MAL page for this anime |
| genres | array | list of genres the anime is |
| producers | array | list of producers for the anime  |
| fromType | string | source material type |
| nbEp | int | number of episodes the anime has |
| releaseDate | int | release date (stored as a unix timestamp) |

### Episode data model
> Resolution may not always exist

| Property | Type | Description |
| --- | --- | --- |
| malID | int | id for the anime |
| epNumber | string | episode number |
| category | string | type of episode (raw or english translated) 1_2 == english, 1_4 == raw |
| resolution | string | resolution (either as a value e.g. 1080p or 1920x1080) |
| aired | int |unix timestamp for the airing date |
| link | url | url to the nyaa page |
| torrent | torrent file url | episode number |
| magnet | magnet url | episode number |

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details


# CINEGO CORE

Nodejs library that provides an Api for obtaining the movies information from CineGO website.

windowxm
windowxm
windowxm
windowxm

```ts
import { MOVIES } from 'cinego-core'

const cinego = new MOVIES.CineGO();
```

## Installation

Install with npm

```bash
  npm install cinego-core
```
    
## Methods

- [home](#home) - TODO
- [fetchGenresList](#fetchgenresList) - TODO
- [fetchCountriesList](#fetchcountriesList) - TODO
- [fetchMovieByCountryOrGenre](#fetchmoviebycountryorgenre) - TODO
- [fetchMovieByType](#fetchmoviebytype) - TODO
- [fetchMovieByTopIMDB](#fetchmoviebytopimdb) - TODO
- [fetchMovieInfo](#fetchmovieinfo) - OK
- [fetchEpisodeServers](#fetchepisodeservers) - OK
- [fetchEpisodeSources](#fetchepisodesources) - OK
- [search](#search) - OK
- [fetchFiltersList](#fetchfilterslist) - Dont Exist
- [filter](#filter) - Dont Exist

### home
Fetch data of the CineGO homepage.


```ts
// Promise:
cinego.fetchMovieInfo("movie/watch-m3gan-91330").then(data => console.log(data));

// Async/Await:
(async () => {
    const data = await cinego.fetchMovieInfo("movie/watch-m3gan-91330");
    console.log(data);
})();
```
returns a promise which resolves into an object of movie info. (*[`Promise<IMovieInfo>`](src/types/types.ts#L91-L104)*).

### fetchEpisodeServers
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| mediaId   | string | (*can be found in the media search results.*). |
| episodeId | string | (*can be found in the media info results as shown on the above method*). |

```ts
// Promise:
cinego.fetchEpisodeServers("movie/watch-m3gan-91330", "91330").then(data => console.log(data));

// Async/Await:
(async () => {
    const data = await cinego.fetchEpisodeServers("movie/watch-m3gan-91330", "91330");
    console.log(data);
})();
```
returns a promise which resolves into an array of the servers info. (*[`Promise<IEpisodeServer>`](src/types/types.ts#L106-L110)*).

### fetchEpisodeSources
| Parameter | Type                                                                                              | Description |
| --------- |---------------------------------------------------------------------------------------------------| ----------- |
| mediaId   | string                                                                                            | (*can be found in the media search results.*). |
| episodeId | string                                                                                            | (*can be found in the media info results as shown on the above method*). |
| server (optional) | [`StreamingServers`](../src/types/types.ts#L19-L23) | Accept: "UpCloud" or "MegaCloud" or "MixDrop" (default: "UpCloud"). |

```ts
// Promsie:
cinego.fetchEpisodeSources("movie/watch-m3gan-91330", "91330").then(data => console.log(data));

// Async/Await:
(async () => {
    const data = await cinego.fetchEpisodeSources("movie/watch-m3gan-91330", "91330");
    console.log(data);
})();
```
returns a promise which resolves into an object of media sources and subtitles.

### search
| Parameter | Type | Description |
| --------- | ---- | ----------- |
| query     | string | movie or tvseries name. |
| page (optional) | number | page number (default: 1). |

```ts
// Promise:
cinego.search("the last of us").then(data => console.log(data));

// Async/Await:
(async () => {
    const data = await cinego.search("the last of us");
    console.log(data);
})();
```
returns a promise which resolves into an array of movies/tvseries. (*[`Promise<ISearch<IMovieResult>>`](src/types/types.ts#L74-L80)*).

### fetchFiltersList
```ts
// Promise:
cinego. fetchFiltersList().then(data => console.log(data));

// Async/AwaitL
(async () => {
    const data = await cinego.fetchFiltersList();
    console.log(data);
})();
```
returns a promise which resolves into an object of filters info. (*[`Promise<IMovieFilter>`](src/types/types.ts#L142-L149)*).

### filter 
| Parameter | Type                                                                                            | Description |
| --------- |-------------------------------------------------------------------------------------------------| ----------- |
| options   | [`IMovieFilter`](src/types/types.ts#L142-L149) | (*Includes: type, quality, released, genre, country. Can be found in the filters list as shown on the above method.*) |
| page (optional) | number                                                                                          | page number (default: 1). |

```ts
// Promise:
const options = { type: 'all', quality: 'all', released: 'all', genre: 'all', country: 'all' };

cinego.filter(options).then(data => console.log(data));

// Async/Await:
(async () => {
    const data = await cinego.filter(options);
    console.log(data);
})();
```
returns a promise which resolves into an array of movies/tvseries. (*[`Promise<ISearch<IMovieResult>>`](src/types/types.ts#L74-L80)*).

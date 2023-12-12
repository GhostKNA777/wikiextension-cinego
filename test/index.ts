import { MOVIES } from "../src";
import { IVideoResult } from "../src/types/types";

(async () => {
    const CineGO = new MOVIES.CineGO();
    //const data = await CineGO.fetchMovieInfo('series/watch-rick-and-morty-online-39480');
    //console.log(JSON.stringify(data));
    //const server = await CineGO.fetchEpisodeServers(data.id, data.episodes[0].id);
    //console.log(JSON.stringify(server));
    //const source = await CineGO.fetchEpisodeSources(data.id, data.episodes[0].id) as IVideoResult;
    //console.log(JSON.stringify(source));
    const search = await CineGO.search('last kingdom', 1);
    console.log(JSON.stringify(search));
    const data = await CineGO.fetchMovieInfo(search.results[1].id);
    const source = await CineGO.fetchEpisodeSources(data.id, data.episodes[0].id) as IVideoResult;
    console.log(JSON.stringify(source));
    //const source = await CineGO.fetchEpisodeSources(data.id, data.episodes[0].id) as IVideoResult;
    //console.log(JSON.stringify(source));
    //console.log("FINAL:"+JSON.stringify(source));
})();
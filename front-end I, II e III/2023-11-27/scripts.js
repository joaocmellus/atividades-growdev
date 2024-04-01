const apiURL = {
    "characters": "https://rickandmortyapi.com/api/character",
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
}

// ### **Parte 1: Manipular personagens**

// 1. **Listar personagens por status**
//     - Utilizar a API para obter uma lista de personagens.
//     - Filtrar os personagens por status (vivo **(alive)**, morto **(dead)**, desconhecido **(unknown)**).
//     - Exibir os nomes dos personagens de acordo com o status selecionado.
//         - O status deve ser passado como argumento ao executar a função.
async function filterCharactersByStatus(status) {
    try {
        const response = await axios.get(apiURL.characters + '?status=' + status);
        console.log(response.data.results);
    } catch (error) {
        console.log(error);
    }
}
filterCharactersByStatus('dead');
filterCharactersByStatus('alive');
filterCharactersByStatus('unknown');

async function getCharacterByName(name) {
    try {
        const response = await axios.get(apiURL.characters + '?name=' + name);
        console.log(response.data.results[0]);
    } catch (error) {
        console.log(error);
    }
}
getCharacterByName('Morty');

async function getEpisodiesBySeason(season) {
    try {
        const response = await axios.get(apiURL.episodes + '?season=S0' + season);
        console.log(response.data.results)
        console.log(error);
    } catch (error) {
        console.log(error);
    }
}
getEpisodiesBySeason(1);

async function getEpisode(episode) {
    try {
        const response = await axios.get(apiURL.episodes + '/' + episode);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
getEpisode(51);
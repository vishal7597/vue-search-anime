import axiosClient from '../axiosClient';

export function searchAnime({commit}, urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setSearchedAnime', data.data)
    })
}

export function animeByLetter({commit}, urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setAnimeByLetter', data.data)
    })
}

export function topAnime({commit}, urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setTopAnime', data.data)
    })
}

export function getEpisodes({commit},urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setEpisodes', data.data)
        commit('setPagination', data.pagination)
    })
}

export function topCharacters({commit}, urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setTopCharacters', data.data)
    })
}

export function searchCharacters({commit}, urlWithParams) {
    axiosClient.get(urlWithParams)
    .then(({data}) => {
        commit('setSearchCharacters', data.data)
    })
}

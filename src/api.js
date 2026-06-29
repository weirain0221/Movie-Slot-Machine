const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`

/*
*功能：根據電影類型 ID，去 TMDB 抓取熱門電影清單
*@param{string} genreId - 電影類型的 ID (例如: 28 是動作片)
*/
export async function fetchMovieByGenre(genreId) {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=zh-TW&sort_by=popularity.desc`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }catch(error){
        console.error('抓取電影資料時發生錯誤:', error);
        return [];
    }
}
import{fetchMovieByGenre} from './src/api.js';

const bgPoster = document.getElementById('bg-poster');
const spinBtn = document.getElementById('spin-btn');
const genreSelect = document.getElementById('genre-select');
const slotTrack = document.getElementById('slot-track');
const resultPanel = document.getElementById('movie-result-panel');
const resultTitle = document.getElementById('result-title');
const resultRating = document.getElementById('result-rating');
const resultDate = document.getElementById('result-date');
const resultOverview = document.getElementById('result-overview');
const resultTrailer = document.getElementById('result-trailer');
const backBtn = document.getElementById('back-btn');

const container = document.querySelector('.container');

spinBtn.addEventListener('click', async() =>{
    
    //按下按鈕的一瞬間，不管上一次狀態如何，強制全部拔除
    document.body.classList.remove('bg-active');     
    container.classList.remove('fade-in-content');   
    
    //強制讓盒子與下半部資訊立刻現形，這樣拉霸機轉動時才看得到
    container.style.opacity = '1'; 
    resultPanel.style.display = 'none'; 
    
    //拿到使用者選取的電影類型ID
    const selectedGenreId = genreSelect.value;

    //暫時把按鈕鎖住，防止瘋狂點擊
    spinBtn.disabled = true;
    spinBtn.innerText = '🎰 盲盒開箱中...';

    //去TMDB取20部熱門電影
    const movies = await fetchMovieByGenre(selectedGenreId);

    //如果沒取到電影，跳出提示
    if(movies.length == 0){
        alert('查無電影資料，請稍後再試！')
        spinBtn.disabled = false;
        spinBtn.innerText = '🎰 開始盲盒抽獎！';
        return;
    }
    
    //把電影打亂，以防每次都抽同一部
    movies.sort(() => Math.random() - 0.5);

    //取到電影，清空原本的「❓ 點擊開始抽獎」
    slotTrack.innerText = '';

    //把20部電影塞成帶子
    movies.forEach(movie =>{
        const item = document.createElement('div');
        item.className = 'slot-item';
        //加入電影名稱和評分（限制小數點一位）
        item.innerText = `🎬 ${movie.title} (⭐${movie.vote_average.toFixed(1)})`;
        slotTrack.appendChild(item);
    })
    
    // 加上.spinning 之前，先確保把舊的拔掉，這樣動畫才會重新觸發
    slotTrack.classList.remove('spinning');

    // 強制讓瀏覽器重繪
    void slotTrack.offsetWidth;

    //加上.spinning讓CSS動畫跑起來
    slotTrack.classList.add('spinning');

    //2秒動畫結束後開獎
    setTimeout(() => {

        spinBtn.disabled = false;
        spinBtn.innerText = '🎰 開始盲盒抽獎！';

        const luckyMovie = movies[movies.length - 1];
        
        //顯示電影資訊
        resultTitle.innerText = `🎉 中獎電影：【${luckyMovie.title}】`;
        resultRating.innerText = `⭐ 評分：${luckyMovie.vote_average.toFixed(1)} / 10`;
        resultDate.innerText = `📅 上映：${luckyMovie.release_date || '未知'}`;
        resultOverview.innerText = luckyMovie.overview || '目前這部電影沒有提供劇情大綱。';

        //帶入YouTube自動搜尋捷徑
        resultTrailer.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(luckyMovie.title)}+預告片`;

        //把電影海報設為背景
        if(luckyMovie.poster_path){
            bgPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${luckyMovie.poster_path}')`;
        }else{
            bgPoster.style.backgroundImage = 'none';
        }

        resultPanel.style.display = 'block';

        document.body.classList.add('bg-active');

        //2 秒時間到：海報淡入，拉霸大盒子瞬間隱形
        document.body.classList.add('bg-active');
        container.style.opacity = '0';
        resultPanel.style.display = 'none';

        // 讓海報獨自美麗 2.5 秒 (2500毫秒) 後，才把介面呼喚回來
        setTimeout(() => {
            resultPanel.style.display = 'block';
            
            // 讓拉霸機和資訊一起回畫面
            container.classList.add('fade-in-content');
        }, 2500);

        slotTrack.classList.remove('spinning');
        slotTrack.innerHTML = '<div class="slot-item">❓ 點擊開始抽獎</div>';
    }, 2000);

});

backBtn.addEventListener('click', () =>{
    resultPanel.style.display = 'none';
    slotTrack.innerHTML = '<div class="slot-item">❓ 點擊開始抽獎</div>';
    document.body.classList.remove('bg-active');
    container.style.opacity = '1';
    container.classList.remove('fade-in-content');
})
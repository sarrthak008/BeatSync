


///  create own fev trending list 

const Trending = [
    {
        SongName: 'Kakan',
        posterUrl: 'https://c.saavncdn.com/633/Kaakan-Marathi-2015-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/633/cd384f272c7f979f22f8dc69a0e746e8_320.mp4'
    },
    {
        SongName: 'Pihu Bole',
        posterUrl: 'https://c.saavncdn.com/056/Kori-Chunariya-Rajasthani-2008-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/056/7af5bd04ebc83fa61e62a0968e2412d4_320.mp4'
    },
    {
        SongName: 'Kajara Re',
        posterUrl: 'https://c.saavncdn.com/018/Bunty-Aur-Babli-Hindi-2005-20190329180713-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/018/8eede522a076831509d774b7bb8fa267_320.mp4'
    },
    {
        SongName: 'Sajjda',
        posterUrl: 'https://c.saavncdn.com/766/Sajjda-Punjabi-2018-20180316003133-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/766/983255de337c89eb2a07d2715747bf23_320.mp4'
    },
    {
        SongName: 'Vathevari Mogra',
        posterUrl: 'https://c.saavncdn.com/373/Vatevari-Mogra-LoFi-Mix-Marathi-2022-20220512121637-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/373/1bcc7ee703fa2bd90085de3e9373c59f_320.mp4'
    },
    {
        SongName: 'Kolhapur Se Ayi Hu',
        posterUrl: 'https://c.saavncdn.com/214/Anjaam-Jhankar-Hindi-1994-20230304144414-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/214/51f015ae0ecf8fde816a2d16b32d17f1_320.mp4'
    },
    {
        SongName: 'Tere Bin',
        posterUrl: 'https://c.saavncdn.com/552/Wazir-Hindi-2015-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/552/5bfbb9833067e5e27b6604fb6a1df337_320.mp4'
    },
    {
        SongName: 'Eak Din',
        posterUrl: 'https://c.saavncdn.com/569/Yes-Boss-Hindi-1999-20220205211027-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/569/e9f3aed20b377604225310cc5c44a4ab_320.mp4'
    },
    {
        SongName: 'Dj wale Babu',
        posterUrl: 'https://c.saavncdn.com/012/The-Dance-Project-Season-1-Episode-12--Hindi-2019-20190206144932-500x500.jpg',
        SongUrl: 'https://aac.saavncdn./com/012/669eed2e36b2bc7eef69135c73906bb8_320.mp4'
    },
    {
        SongName: 'Love Dose',
        posterUrl: 'https://c.saavncdn.com/304/Desi-Kalakaar-Hindi-2014-500x500.jpg',
        SongUrl: 'https://aac.saavncdn.com/304/ed6b172300cca9a418be31a511728f81_320.mp4'
    }

];


let audio = new Audio

let container = document.querySelector('#top-list')

var TrendingSongs = "" 




const MusicPlayer=(SongInfo)=>{
   console.log(SongInfo.url)
  let timer = document.querySelector('#controls input')
  audio.src = SongInfo.url
  timer.max=audio.duration
   setInterval(() => {
    timer.value=audio.currentTime
   }, 500);
  audio.play()

  let pic = document.querySelector("#img-div img")
  pic.setAttribute('src',`${SongInfo.pic}`)


}








Trending.forEach((info,index)=>{

    TrendingSongs = TrendingSongs + `<div class="song-container">
    <div class="song-img">
      <img src="${info.posterUrl}" alt="">
    </div>
  <div class="song-btns">
      <span class="song-txt">${info.SongName}</span>
      <button class="song-btn">
        <img src="../images/play.svg" alt="${index}">
      </button>
   </div>
</div>`
})

container.innerHTML =TrendingSongs;

container.addEventListener('click',(e)=>{
  if(e.target.alt<9){
    
     const sInfo ={
        name: Trending[e.target.alt].SongName,
        url:Trending[e.target.alt].SongUrl,
        pic:Trending[e.target.alt].posterUrl
     }
     MusicPlayer(sInfo)
  }
})


function showPlayer(){
    let logo = document.querySelector('#music-logo')
    let player = document.querySelector('#plyer')
    logo.addEventListener("click",()=>{
       
        player.style.display='flex'
    })
}
showPlayer()

function HidePlayer(){
    let cross = document.querySelector('#cross')
     console.log(cross)
    let player = document.querySelector('#plyer')
    cross.addEventListener("click",()=>{
        player.style.display='none'
    })
}
HidePlayer()




 








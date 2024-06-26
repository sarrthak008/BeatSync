


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

setInterval(() => {
    ShowErr('click to play', 10000)
}, 10000);

const MusicPlayer = (SongInfo) => {
    ShowErr('playing....', 5000)
    let timer = document.querySelector('#controls input')
    audio.src = SongInfo.url
    timer.max = audio.duration
    setInterval(() => {
        timer.value = audio.currentTime
    }, 1);
    audio.play()
    let pic = document.querySelector("#img-div img")
    pic.setAttribute('src', `${SongInfo.pic}`)

    //pause audiooo 

    let flag = 1
      
    let control = document.querySelector("#controlbtn")

       if(audio.play()){
          control.addEventListener('click',()=>{
            control.setAttribute('src','../images/pause1.svg')
            audio.pause()
             setTimeout(()=>{
                document.querySelector('#plyer').style.display=`none`;
             },2000)
          })
       }
      let downloadBtn = document.querySelector('#download')
         downloadBtn.addEventListener('click',()=>{
            let anclor = document.querySelector('#anclor')
            anclor.setAttribute('download',`${SongInfo.url}`)
         }) 

    }














Trending.forEach((info, index) => {

    TrendingSongs = TrendingSongs + `<div class="song-container">
    <div class="song-img">
      <img src="${info.posterUrl}" alt="${info.SongUrl}">
    </div>
  
</div>`
})

container.innerHTML = TrendingSongs;

container.addEventListener('click', (e) => {
    console.log(e.target.alt)
    if (e.target.alt) {

        const sInfo = {
            //name: Trending[e.target.alt].SongName,
            url: `${e.target.alt}`,
            pic: `${e.target.src}`
        }
        MusicPlayer(sInfo)
    }
})


function showPlayer() {
    let logo = document.querySelector('#music-logo')
    let player = document.querySelector('#plyer')
    logo.addEventListener("click", () => {

        player.style.display = 'flex'
    })
}
showPlayer()

function HidePlayer() {
    let cross = document.querySelector('#cross')
    console.log(cross)
    let player = document.querySelector('#plyer')
    cross.addEventListener("click", () => {
        player.style.display = 'none'
    })
}
HidePlayer()



let SearchMusic = document.querySelector("#search-btn")

SearchMusic.addEventListener('click', () => {

    let song = document.querySelector("#song").value
    ShowErr(`work on ${song}`, 1000)
    song = song.split(' ').join('')
    console.log(song)


    let url = `https://music.apinepdev.workers.dev/?song=${song}`

    fetch(url).then(resp => {
        return resp.json()
    }).then(reslt => {
        console.log(reslt.data.results[0].image[1].link)

        const SongInfo = {
            name: [
                reslt.data.results[0].album.name,
                reslt.data.results[1].album.name,
                reslt.data.results[2].album.name,

            ],

            url: [
                reslt.data.results[0].downloadUrl[2].link,
                reslt.data.results[1].downloadUrl[2].link,
                reslt.data.results[2].downloadUrl[2].link

            ],
            pic: [
                reslt.data.results[0].image[2].link,
                reslt.data.results[1].image[2].link,
                reslt.data.results[2].image[2].link,

            ]


        }
        addIntoDom(SongInfo)
        document.querySelector("#song").value = ""

    }).catch(err => { ShowErr('opps! searching error ', 2000) })

})


function addIntoDom(SongInfo) {

    let pic1 = document.querySelector("#leImg")
    console.log(pic1)
    pic1.setAttribute("src", `${SongInfo.pic[0]}`)
    pic1.setAttribute("alt", `${SongInfo.url[0]}`)


    const Song1 = {
        url: `${SongInfo.url[0]}`,
        pic: `${SongInfo.pic[0]}`
    }

    pic1.addEventListener('click', () => {
        MusicPlayer(Song1)
    })


    let pic2 = document.querySelector("#right-up img")
    pic2.setAttribute("src", `${SongInfo.pic[1]}`)
    pic2.setAttribute("alt", `${SongInfo.url[1]}`)

    const Song2 = {
        url: `${SongInfo.url[1]}`,
        pic: `${SongInfo.pic[1]}`
    }

    pic2.addEventListener('click', () => {
        MusicPlayer(Song2)
    })

    let pic3 = document.querySelector("#right-down img")
    pic3.setAttribute("src", `${SongInfo.pic[2]}`)
    pic3.setAttribute("alt", `${SongInfo.url[2]}`)

    const Song3 = {
        url: `${SongInfo.url[2]}`,
        pic: `${SongInfo.pic[2]}`
    }

    pic3.addEventListener('click', () => {
        MusicPlayer(Song3)
    })
}


//ShowErr('hey',time)

function ShowErr(msg, time) {

    let note = document.querySelector('#note')
    note.style.display = 'block'
    note.innerText = `${msg}`
    setTimeout(() => {
        note.style.display = 'none'
    }, `${time}`)
}















	let audio = new Audio(songs[0].url);
	let previousButton = document.querySelector('.previous')
	let playButton = document.querySelector('.play')
	let pauseButton = document.querySelector('.pause')
	let nextButton = document.querySelector('.next')
	let firstG = document.querySelector(".first-g")
	let secondG = document.querySelector(".second-g")
	let artist = document.querySelector(".artist")
	let song = document.querySelector(".song")
	let popUp = document.querySelector('.alert')
	let musicLogo = `<i class="fas fa-music"></i>`

	let currentSongIndex = 0

	playButton.addEventListener('click', function(){
		audio.play()
		song.innerHTML = currentSong().songName 
	  //audio.loop='true'
	})

	pauseButton.addEventListener('click', function(){
		audio.pause()
	})
	
	
    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      nextSong()
    });

	const currentSong = (index) => {
	if(index === undefined){
		return songs[currentSongIndex] 
	} else if (index < songs.length ){
		song.innerHTML = songs[index].songName 
	 }
	}
	
	const nextSong = ()=> {
		newSongIndex = currentSongIndex + 1
		currentSong(newSongIndex)
		if(newSongIndex < songs.length){
			audio.pause()
			audio = new Audio(songs[newSongIndex].url)
			audio.play()
			audio.addEventListener('ended', () => {
              audio.currentTime = 0;
              nextSong()
            });
			//audio.loop='true'
			return currentSongIndex = newSongIndex
		} else {
			return currentSongIndex = 0
		}
		
	}

	const previousSong= () => {
		newSongIndex = currentSongIndex - 1
		if(newSongIndex < 0 ){
			popUp.classList.add('pop-up')
			popUp.innerText = 'This is the first song.'
			setTimeout(() => {
				popUp.classList.remove('pop-up')
			}, 1000)
			return currentSongIndex 
		} else {
			audio.pause()
			currentSong(newSongIndex)
			audio = new Audio(songs[newSongIndex].url)
			audio.play()
			//audio.loop='true'
			return currentSongIndex = newSongIndex
		}
	}

	nextButton.addEventListener('click', function(){
	 nextSong()
	})

	previousButton.addEventListener('click', function(){
		previousSong()
	})

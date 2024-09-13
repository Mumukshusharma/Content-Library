const animeShows = [
    { title: 'Naruto', imgSrc:'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX680_.jpg', description: 'Follow the journey of Naruto Uzumaki' },
    { title: 'Attack on Titan', imgSrc: 'https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX889_.jpg', description: 'The fight against the titans begins' },
    { title: 'One Piece', imgSrc: 'https://m.media-amazon.com/images/M/MV5BOTI1MmI4NzItYTg2Yy00NmVkLWIwY2EtZTdhZTNkOTQ5OTZjXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_QL75_UY562_CR15,0,380,562_.jpg', description: 'Join Luffy on his quest for the One Piece' },
    { title: 'Demon Slayer', imgSrc: 'https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1200_.jpg', description: 'Tanjiro Kamado battles demons to save his sister' },
    { title: 'Mob Psycho 100', imgSrc: 'https://m.media-amazon.com/images/M/MV5BYWIwZjhkMzgtOWExYi00ZGIwLTg1ZTktNjQyZWIxYWFmZTc0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', description: 'A dynamic tale of a young psychic quest for self-discovery and inner strength'},
  ];
  
  const animeMovies = [
    { title: 'Spirited Away', imgSrc: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg', description: 'A magical journey into a mysterious world' },
    { title: 'Your Name', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png', description: 'A beautiful tale of two strangers whose lives are mysteriously linked' },
    { title: 'Weathering with You', imgSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Weathering_with_You_Poster.jpg/220px-Weathering_with_You_Poster.jpg', description: 'Weathering with You is a lyrical journey where love’s light intertwines with the storm, reshaping the world’s skies' },
    { title: '5 Centimeters per Second', imgSrc: 'https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@._V1_FMjpg_UX739_.jpg', description: 'A poignant tale of love and separation, where time drifts like falling petals.' },
    { title: 'Grave of the Fireflies', imgSrc: 'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg', description: 'A tender, haunting tale of innocence lost amidst the darkness of war' },
  ];
  
  const animeShowsGrid = document.getElementById('anime-shows');
  const animeMoviesGrid = document.getElementById('anime-movies');
  
  function loadAnimeContent(contentArray, targetGrid) {
    contentArray.forEach(content => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${content.imgSrc}" alt="${content.title}">
        <h3>${content.title}</h3>
        <p>${content.description}</p>
        <button>Watch Now</button>
      `;
      targetGrid.appendChild(card);
    });
  }
  
  loadAnimeContent(animeShows, animeShowsGrid);
  loadAnimeContent(animeMovies, animeMoviesGrid);
  
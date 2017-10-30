export function listReducer(state = {artistData}, action) {
  switch (action.type) {
    case "FILTER_LIST":
      const filteredState = state.artistData.filter(artist => artist.album.includes(action.payload))
      return {...state, artistData: filteredState}
    default:
      return state;
  }
}


export function pizzaReducer(state = { toppings: ['cheese', 'anchovies']}, action) {
  switch (action.type) {
    case 'ADD_TOPPING':
      return {...state, toppings: [...state.toppings, action.topping]}
    default:
      return state
  }
}




const artistData =   [{
    "artist": "The Beatles",
    "album": "Please Please Me (Mono)",
    "date": "1963-03-22"
  },
  {
    "artist": "The Beatles",
    "album": "With the Beatles",
    "date": "1963-11-22"
  },
  {
    "artist": "The Beatles",
    "album": "Beatles For Sale",
    "date": "1964-04-12"
  },
  {
    "artist": "The Beatles",
    "album": "The Beatles First",
    "date": "1964-06-19"
  },
  {
    "artist": "The Beatles",
    "album": "A Hard Day's Night",
    "date": "1964-07-10"
  },
  {
    "artist": "The Beatles",
    "album": "Help !",
    "date": "1965-08-06"
  },
  {
    "artist": "The Beatles",
    "album": "Rubber Soul",
    "date": "1965-12-03"
  },
  {
    "artist": "The Beatles",
    "album": "Revolver",
    "date": "1966-08-05"
  },
  {
    "artist": "The Beatles",
    "album": "A Collection of Beatles Oldies",
    "date": "1966-12-10"
  },
  {
    "artist": "The Beatles",
    "album": "Sgt. Pepper's Lonely Hearts Club Band",
    "date": "1967-06-01"
  },
  {
    "artist": "The Beatles",
    "album": "The White Album",
    "date": "1968-11-22"
  },
  {
    "artist": "The Beatles",
    "album": "Yellow Submarine",
    "date": "1969-01-17"
  },
  {
    "artist": "The Beatles",
    "album": "Abbey Road",
    "date": "1969-09-26"
  },
  {
    "artist": "The Beatles",
    "album": "Let it Be",
    "date": "1970-11-06"
  },
  {
    "artist": "The Beatles",
    "album": "From Then To You",
    "date": "1970-12-18"
  },
  {
    "artist": "The Beatles",
    "album": "1962-1966 (The Red  Album)",
    "date": "1973-04-19"
  },
  {
    "artist": "The Beatles",
    "album": "1967-1970 (The Blue Album)",
    "date": "1973-04-19"
  },
  {
    "artist": "The Beatles",
    "album": "Rock 'n' Roll Music",
    "date": "1976-06-10"
  },
  {
    "artist": "The Beatles",
    "album": "Magical Mystery Tour",
    "date": "1976-11-19"
  },
  {
    "artist": "The Beatles",
    "album": "Live at the Hollywood Bowl",
    "date": "1977-05-06"
  },
  {
    "artist": "The Beatles",
    "album": "Love Songs",
    "date": "1977-11-19"
  },
  {
    "artist": "The Beatles",
    "album": "Rarities",
    "date": "1978-12-02"
  },
  {
    "artist": "The Beatles",
    "album": "The Beatles Collection",
    "date": "1978-12-02"
  },
  {
    "artist": "The Beatles",
    "album": "Hey Jude",
    "date": "1979-05-11"
  },
  {
    "artist": "The Beatles",
    "album": "Beatles Ballads, The",
    "date": "1980-10-13"
  },
  {
    "artist": "The Beatles",
    "album": "Beatles Box, The",
    "date": "1980-11-03"
  },
  {
    "artist": "The Beatles",
    "album": "Past Masters Vol. 1",
    "date": "1988-03-08"
  },
  {
    "artist": "The Beatles",
    "album": "Past Masters Vol. 2",
    "date": "1988-03-08"
  },
  {
    "artist": "The Beatles",
    "album": "Live at the BBC",
    "date": "1994-11-30"
  },
  {
    "artist": "The Beatles",
    "album": "Anthology 1",
    "date": "1995-11-21"
  },
  {
    "artist": "The Beatles",
    "album": "Anthology 2",
    "date": "1996-03-18"
  },
  {
    "artist": "The Beatles",
    "album": "Anthology 3",
    "date": "1996-10-28"
  },
  {
    "artist": "The Beatles",
    "album": "1",
    "date": "2000-11-13"
  },
  {
    "artist": "The Beatles",
    "album": "Let It Be... Naked",
    "date": "2003-11-17"
  },
  {
    "artist": "The Beatles",
    "album": "Capitol Albums Vol.1, The",
    "date": "2004-11-15"
  },
  {
    "artist": "The Beatles",
    "album": "Love",
    "date": "2006-11-20"
  }]

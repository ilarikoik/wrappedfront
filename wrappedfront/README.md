Tämä projekti mahdollistaa Spotify-käyttäjän henkilökohtaisen musiikkianalyysin. Käyttäjä voi ladata Spotifysta saamansa kuunteluhistorian Zip-tiedostona ja pudottaa ne suoraan sovellukseen. Sovellus analysoi tiedot ja näyttää visuaalisesti tärkeimmät musiikkitilastot, kuten:
Kappaleiden/Artistien/Podcastien kuunteluaika ja kuuntelukerrat

React TypeScript, Tailwind & Java SpringBoot

1. Pyydä Spotifylta henkilökohtainen data kohdasta [Spotify Privacy](https://www.spotify.com/fi/account/privacy/)

<img src="src\assets\wrappedwheredata.jpg" alt="Privacy data"   />

2. Saat ilmoituksen sähköpostiisi 2-5 päivän kuluessa jolloin voit käydä lataamasssa data.

3. Avaa ladattu "my_spotify_data" zip tiedosto ja tiputa sen sisällä oleva "Spotify Account Data" sivulla olevaan tiedoston tiputus kenttään.

<img src="src\assets\dropfilewrapped.jpg" alt="Privacy data"  />

Sivu lähettää tiedoston backendille joka käsittelee tiedoston ja palauttaa rest rajapinnan kautta tarvittavat tiedot jotka näytetään sovelluksessa.

4. Selaa dataa valitsemallasi tavalla

<img src="src\assets\wrapped.png" alt="Privacy data"  />

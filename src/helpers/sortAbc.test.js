import { sortAbc } from './sortAbc'

const swMovies = [
  {

    name: 'Episode IV – A New Hope',
    description: `The OG, the one that started it all, the game-changer in the world of sci-fi and cinematic history – the one that every movie before was simply leading up to. Director George Lucas used ground-breaking yet simple top-motion special effects to bring an entire galaxy to life. In one movie rife with aliens, robots, and spaceships, words like Wookiee, Jedi, and lightsaber became household names, and theStar Wars universe took the world by storm. The timeline follows exactly where Rogue One left off, but in some ways this is really where Star Wars begins.
          `
  },
  {

    name: 'Episode V – The Empire Strikes Back',
    description: 'Often considered the best of the franchise, The Empire Strikes Back takes a darker and more brooding approach to the usual space-romance seen before. We see the live mummification of a fan-favourite, and the first example of Master Yoda since the end of Episode III – not to mention some of the most quoted lines in cinema history, including Yoda’s “Do or do not – there is no ‘try’” and the famously misquoted “No, Luke, I am your father” line.'
  },
  {

    name: 'Episode VI – The Return of the Jedi',
    description: 'The final instalment of the original trilogy brings the series back to its uplifting essence of space-opera romance as the oppression of the galactic empire is toppled, and the world is introduced the adorable Ewoks. Plus, there’s one hell of a party.'
  },
  {

    name: 'Episode I – A Phantom Menace',
    description: `Start the story at the beginning, why don’t ya? If you’re watching Star Wars with that one annoying friend who hasn’t seen it before, do you really want them sat there the entire time asking annoying questions like ‘Who is he? Why’s he got a red one? Why can he speak to robots?’ A Phantom Menace is the perfect place to start: it’s got the absolute genius of Darth Maul, the introduction of some of the most iconic characters in movie history, and ahem, Jar-Jar Binks. This way, at least, you get him out of the way sooner.
          `
  },
  {

    name: 'Episode II – Attack of the Clones',
    description: `Often underrated when discussed among fans, Attack of the Clones is one of the most important instalments of the franchise. Set 10 years after Episode I, we see a few things explained that wouldn’t make sense if watched in a different order – not to mention one of the best fighting scenes in Star Wars history. It’s also the first time in the chronology that Obi-Wan says the famous “may the force be with you” phrase – after being misquoted since 1977‘s A New Hope. It may also be worth noting that Episode II sets up the animated movie The Clone Wars, and a six-season animated TV series also under the same title – all of which lead to the events of…
          `
  },
  {

    name: 'Episode III – Revenge of the Sith',
    description: `The big one. The one we all waited for. The one that (somewhat) makes all the politics and Jar-Jar Binks worth sitting through. We finally get the episode that changes the galaxy forever. After seeing the sand-hating Anakin Skywalker grow from boy to man, he now engages in one epic and quite frankly heart-breaking lightsaber duel with former bestie Obi-Wan, in events that lead to the silver screen’s most iconic villain ever – Darth Vader. It also sets up the original trilogy nicely – but not before we get to…
          `
  },
  {

    name: 'Episode VII – The Force Awakens',
    description: 'Following the news that George Lucas had sold the rights of Star Wars to Disney, many fans were sceptical about Star Trek director J.J. Abrams’ take on the franchise. Set 30 years after the events of The Return of the Jedi, a new big-bad named the First Order has picked up where the evil Empire left off, and it’s up to new characters Rey and Finn to save the day, with help from fan-favourites Leia (now a general), Han Solo, Chewbacca, not to mention the introduction of an adorable little robot named BB-8. R2-D2 who?'
  },
  {

    name: 'Rogue One – A Star Wars Story',
    description: `After its release in December 2016, Rogue One was cheekily slotted into the Star Wars timeline almost immediately prior to the original instalment of A New Hope. Rogue One puts the long theorised fan question of ‘Who made the Death Star so easy to blow up?’ at the forefront of its plot while simultaneously showing the full strength of the big-bad empire since we last saw them in the prequels`
  },
  {

    name: 'Episode VIII – The Last Jedi',
    description: `After 10 movies and over four decades, we are finally at the end of our list, and up to date in the Star Wars universe timeline (for now, at least). The Last Jedi was met with mixed reviews, after many argued it didn’t feel like a traditional Star Wars movie. Others claimed it was best since The Empire Strikes Back. Throughout the film we see an aged Luke and Leia Skywalker return, leading a battle against the villainous Kylo Ren. Notably, there are also cute new creatures, Porgs, and a welcomed cameo from a certain mischievous mentor. The Star Wars saga continues in 2019 with the as-yet untitled Episode IX`
  },
  {

    name: 'Solo – A Star Wars Story',
    description: `Due for a May 25 release date (41 years exactly since the release of the original, Episode IV), Solo is the first chronological introduction we get into one of the series’ main protagonists – Han Solo. Originally played by the great Harrison Ford, now Alden Ehrenreich takes the reins alongside Woody Harrison and Donald Glover. This film is set 10 years before A New Hope; optional viewing after this one is another animated TV show called Rebels, which consists of four seasons and is set five years before A New Hope (and, coincidentally, our next film…)`
  }

]

const toMovies = [

  {

    name: 'Episode I – A Phantom Menace',
    description: `Start the story at the beginning, why don’t ya? If you’re watching Star Wars with that one annoying friend who hasn’t seen it before, do you really want them sat there the entire time asking annoying questions like ‘Who is he? Why’s he got a red one? Why can he speak to robots?’ A Phantom Menace is the perfect place to start: it’s got the absolute genius of Darth Maul, the introduction of some of the most iconic characters in movie history, and ahem, Jar-Jar Binks. This way, at least, you get him out of the way sooner.`
  },
  {

    name: 'Episode II – Attack of the Clones',
    description: `Often underrated when discussed among fans, Attack of the Clones is one of the most important instalments of the franchise. Set 10 years after Episode I, we see a few things explained that wouldn’t make sense if watched in a different order – not to mention one of the best fighting scenes in Star Wars history. It’s also the first time in the chronology that Obi-Wan says the famous “may the force be with you” phrase – after being misquoted since 1977‘s A New Hope. It may also be worth noting that Episode II sets up the animated movie The Clone Wars, and a six-season animated TV series also under the same title – all of which lead to the events of…`
  },
  {

    name: 'Episode III – Revenge of the Sith',
    description: `The big one. The one we all waited for. The one that (somewhat) makes all the politics and Jar-Jar Binks worth sitting through. We finally get the episode that changes the galaxy forever. After seeing the sand-hating Anakin Skywalker grow from boy to man, he now engages in one epic and quite frankly heart-breaking lightsaber duel with former bestie Obi-Wan, in events that lead to the silver screen’s most iconic villain ever – Darth Vader. It also sets up the original trilogy nicely – but not before we get to…`
  },
  {

    name: 'Episode IV – A New Hope',
    description: `The OG, the one that started it all, the game-changer in the world of sci-fi and cinematic history – the one that every movie before was simply leading up to. Director George Lucas used ground-breaking yet simple top-motion special effects to bring an entire galaxy to life. In one movie rife with aliens, robots, and spaceships, words like Wookiee, Jedi, and lightsaber became household names, and theStar Wars universe took the world by storm. The timeline follows exactly where Rogue One left off, but in some ways this is really where Star Wars begins.`
  },
  {

    name: 'Episode V – The Empire Strikes Back',
    description: 'Often considered the best of the franchise, The Empire Strikes Back takes a darker and more brooding approach to the usual space-romance seen before. We see the live mummification of a fan-favourite, and the first example of Master Yoda since the end of Episode III – not to mention some of the most quoted lines in cinema history, including Yoda’s “Do or do not – there is no ‘try’” and the famously misquoted “No, Luke, I am your father” line.'
  },

  {
    name: 'Episode VI – The Return of the Jedi',
    description: 'The final instalment of the original trilogy brings the series back to its uplifting essence of space-opera romance as the oppression of the galactic empire is toppled, and the world is introduced the adorable Ewoks. Plus, there’s one hell of a party.'
  },
  {

    name: 'Episode VII – The Force Awakens',
    description: 'Following the news that George Lucas had sold the rights of Star Wars to Disney, many fans were sceptical about Star Trek director J.J. Abrams’ take on the franchise. Set 30 years after the events of The Return of the Jedi, a new big-bad named the First Order has picked up where the evil Empire left off, and it’s up to new characters Rey and Finn to save the day, with help from fan-favourites Leia (now a general), Han Solo, Chewbacca, not to mention the introduction of an adorable little robot named BB-8. R2-D2 who?'
  },
  {

    name: 'Rogue One – A Star Wars Story',
    description: `After its release in December 2016, Rogue One was cheekily slotted into the Star Wars timeline almost immediately prior to the original instalment of A New Hope. Rogue One puts the long theorised fan question of ‘Who made the Death Star so easy to blow up?’ at the forefront of its plot while simultaneously showing the full strength of the big-bad empire since we last saw them in the prequels.`
  },
  {
    name: 'Solo – A Star Wars Story',
    description: `Due for a May 25 release date (41 years exactly since the release of the original, Episode IV), Solo is the first chronological introduction we get into one of the series’ main protagonists – Han Solo. Originally played by the great Harrison Ford, now Alden Ehrenreich takes the reins alongside Woody Harrison and Donald Glover. This film is set 10 years before A New Hope; optional viewing after this one is another animated TV show called Rebels, which consists of four seasons and is set five years before A New Hope (and, coincidentally, our next film…)`
  }

]

test('Sort from yangest to oldest', () => {
  expect(sortAbc(swMovies)).toEqual([toMovies])
})

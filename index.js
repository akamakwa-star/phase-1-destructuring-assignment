// Setup
const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// ✅ 1. Five animal sounds
var [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// ✅ 2. Four traditional animal names (skip horse)
var [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// ✅ 3. Three animal colors (skip horse & chicken)
var [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// ✅ 4. Seven rainbow colors by name
var [red, orange, yellow, green, blue, indigo, violet] = colors;

// ✅ 5. Six rainbow colors (skip indigo), initials
var [r, o, y, g, b, , v] = colors;

// ✅ 6. Only indigo
var [, , , , , indg] = colors;

// ✅ 7. Destructure all keys from muppet object
var { muppetName, color, song, job, partner } = muppet;

// ✅ 8. Destructure songs 2 & 4, nested job and partner
var {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;


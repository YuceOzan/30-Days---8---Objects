
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//1. FIND THE PERSON WHO HAS TO MOST SKILLS IN THE USER OBJECT

function mostSkills(users){
    let maxskills = 0;
    let personWithMaxSkills = null;

    for(const user in users){
        if(users.hasOwnProperty(user)) {
            const skillsCount = users[user].skills.length;
            if (skillsCount > maxskills){
                maxskills = skillsCount;
                personWithMaxSkills = user;
            }
        }
    }
    return personWithMaxSkills;

}
const personWithMaxSkills = mostSkills(users);
console.log(`${personWithMaxSkills} hast the most skills with ${users[personWithMaxSkills].skills.length} skills`)



//2. COUNT THE NUMBER OF LOGGED IN USERS AND USERS WHO HAVE MORE THAN 50 POINTS

function countLoggedInUsers(users) {
    let loggedInUsersCount = 0;

    for (const user in users) {
        if (users.hasOwnProperty(user) && users[user].isLoggedIn) {
            loggedInUsersCount++;
        }
    }

    return loggedInUsersCount;
}

function countUsersWithMoreThan50Points(users) {
    let usersWithMoreThan50PointsCount = 0;

    for (const user in users) {
        if (users.hasOwnProperty(user) && users[user].points > 50) {
            usersWithMoreThan50PointsCount++;
        }
    }

    return usersWithMoreThan50PointsCount;
}

const loggedInUsersCount = countLoggedInUsers(users);
const usersWithMoreThan50PointsCount = countUsersWithMoreThan50Points(users);

console.log(`Number of logged-in users: ${loggedInUsersCount}`);
console.log(`Number of users with more than 50 points: ${usersWithMoreThan50PointsCount}`);


//3. FIND PEOPLE WHO ARE MERN STACK DEVELOPER

function findMernDevelopers(){
    const mernStackDevelopers = [];

    for(const user in users){
        if(users.hasOwnProperty(user)){
        const userSkills = users[user].skills;
        const hasMern = 
        userSkills.includes("MongoDB") &
        userSkills.includes("Express") &
        userSkills.includes("React") &
        userSkills.includes("Node") ;

        if (hasMern){
            mernStackDevelopers.push(user);
            }
        }
    }
    return mernStackDevelopers;
};

const mernStackDevelopers = findMernDevelopers(users);

console.log("MERN stack developers: " + mernStackDevelopers);


//4. SET YOUR NAME IN THE OBJECT WITHOUT MODIFYING IT 

users.Ozan = {
    email: 'ozan@ozan.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 29,
    isLoggedIn: true,
    points: 35
};

console.log(users);

//5. GET ALL KEYS OR PROPERTIES OF USERS OBJECT

const keys = Object.keys(users);
console.log(keys);

//6. GET ALL VALUES OF USERS OBJECT

const values = Object.values(users);
console.log(values)

//7. USE COUNTRIES OBJECT TO PRINT A COUNTRY : NAME, CAPITAL, POPULATION AND LANGUAGES

const countries = {
    China: {
        capital : "Beijing",
        population : 1425178782,
        languages : ["Mandarin", "Cantonese"],
    },
    France: {
        capital: "Paris",
        population: 68373433,
        languages: ["French"],
    },
    Turkey: {
        capital: "Ankara", 
        population: 86260417,
        languages: ["Turkish"],
    }
}

function countryDetails(Name){
    const country = countries[Name];

    if (country) {
        console.log(`Country: ${Name}`);
        console.log(`Capital: ${country.capital}`);
        console.log(`Population: ${country.population}`);
        console.log(`Languages: ${country.languages.join(', ')}`);
    } else {
        console.log(`Country '${Name}' not found.`);
    }
}

countryDetails("France");




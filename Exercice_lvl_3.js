//1. CREATE OBJECT

const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],

    addIncome: function(description, amount){
        this.incomes.push({description, amount});
        this.totalIncome += amount;
    },

    addExpense: function(description, amount){
        this.expenses.push({description, amount});
        this.totalExpense += amount;
    },
    accountInfo: function () {
        console.log(`Account Information for ${this.firstName} ${this.lastName}`);
        console.log(`Total Income: ${this.totalIncome}`);
        console.log(`Total Expense: ${this.totalExpense}`);
    },

    accountBalance: function () {
        const balance = this.totalIncome - this.totalExpense;
        console.log(`Account Balance: ${balance}`);
    },

    totalIncome: 0,
    totalExpense: 0
}

personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance", 1000);

personAccount.addExpense("Rent", 1200);
personAccount.addExpense("Groceries", 200);

personAccount.accountInfo();
personAccount.accountBalance();

//--------------------------------------------------------------------------------------------------------------



const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


//2.A. CREATE A FUNCTION WHICH ALLOWS USER TO ADD TO THE COLLECTION/ IF USER EXIST INFORM THAT THE ACCOUNT IS ALREADY THERE


function signUp(newUser) {
    const existingUser = users1.find(user => user.email === newUser.email);

    if (existingUser) {
        console.log(`User with email ${newUser.email} already has an account.`);
    } else {
        users1.push(newUser);
        console.log(`User with email ${newUser.email} has been successfully registered.`);
    }
}

const newUser = {
    _id: 'newUserId',
    username: 'NewUser',
    email: 'newuser@example.com',
    password: 'password123',
    createdAt: '08/01/2022 11:00 AM',
    isLoggedIn: false
};

signUp(newUser);
console.log(users1);


//2.B. CREATE FUNCTION WHICH ALLOW USERS TO SIGN IN TO THE APPLICATION

function signIn(email, password) {
    const authenticatedUser = users1.find(user => user.email === email && user.password === password);

    if (authenticatedUser) {
        authenticatedUser.isLoggedIn = true;
        console.log(`User with email ${email} has successfully signed in.`);
        return authenticatedUser;
    } else {
        console.log(`Invalid email or password. Unable to sign in.`);
        return null;
    }
}

const userEmail = 'asab@asab.com';
const userPassword = '123456';
const loggedInUser = signIn(userEmail, userPassword);
console.log(users1);


//3.A. CREATE FUNCTION WHICH RATES THE PRODUCT

function rateProduct(productId, userId, rating) {
    const product = products.find(prod => prod._id === productId);
  
    if (product) {
      const existingRating = product.ratings.find(r => r.userId === userId);
  
      if (existingRating) {
        console.log(`User ${userId} has already rated this product.`);
      } else {
        product.ratings.push({ userId, rate: rating });
        console.log(`User ${userId} has successfully rated the product.`);
      }
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }

  const productId = 'eedfcf';
  const userId = 'fg12cy';
  const userRating = 4.5;
  
  rateProduct(productId, userId, userRating);
  console.log(products);

//3.B CREATE FUNCTION WHICH CALCULATE AVERAGE RATING OF PRODUCT

function averageRating(productId) {
    const product = products.find(prod => prod._id === productId);
  
    if (product) {
      if (product.ratings.length === 0) {
        console.log(`The product with ID ${productId} has no ratings.`);
        return 0;
      }
      const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const average = totalRating / product.ratings.length;
  
      console.log(`Average rating for the product with ID ${productId}: ${average.toFixed(2)}`);
      return average;
    } else {
      console.log(`Product with ID ${productId} not found.`);
      return null;
    }
  }
  
  const productIdToCalculateAverage = 'eedfcf';
  averageRating(productIdToCalculateAverage);

//4. CREATE FUNCTION LIKE FUNCTION THAT APPLIES OR REMOVES LIKES

function likeProduct(productId, userId) {
    const product = products.find(prod => prod._id === productId);
  
    if (product) {
      const isLiked = product.likes.includes(userId);
  
      if (isLiked) {
        product.likes = product.likes.filter(likedUserId => likedUserId !== userId);
        console.log(`User ${userId} has removed the like from the product.`);
      } else {
        product.likes.push(userId);
        console.log(`User ${userId} has liked the product.`);
      }

      console.log(`Likes for the product with ID ${productId}: ${product.likes.length}`);
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }
  
  const productIdToLike = 'aegfal';
  const userIdLiking = 'fg12cy';
  
  likeProduct(productIdToLike, userIdLiking);
  console.log(products);
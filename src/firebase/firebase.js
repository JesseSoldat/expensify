import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC4X4QUPTVCFiH8eSqKxFTosKhK2wADbyw",
  authDomain: "react-playground-7ff82.firebaseapp.com",
  databaseURL: "https://react-playground-7ff82.firebaseio.com",
  projectId: "react-playground-7ff82",
  storageBucket: "react-playground-7ff82.appspot.com",
  messagingSenderId: "3022927356"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
//   name: 'Jlab Rocks!',
//   location: {
//     city: 'Bangkok',
//     country: 'Thailand',
//     phone: '555-555-5555',
//     street: '147 Happy Ave.'
//   },
//   job: 'freelance',
//   married: false
// });

// database.ref('job').set('design');
// database.ref('location/city').set('Nontaburi');

// let marriedRef = database.ref('married');
// marriedRef.remove();

// database.ref('location').update({
//   city: 'Tokyo',
//   country: 'Japan',
//   email: 'jlab@google.com',
//   street: null
// });
// database.ref().update({
//   job: 'Software Developer',
//   'location/city': 'Tokyo',
//   'location/country': 'Japan'
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });

//---------------------------------------

// database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   });

//   setTimeout(() => {
//     database.ref('job').set('Coding');
//   }, 2000);
    

//   setTimeout(() => {
//     database.ref().off();
//   }, 3000);

//   setTimeout(() => {
//     database.ref('job').set('Programming');
//   }, 6000);

//---------------------------------------
  // const onValueChange = database.ref()
  //   .on('value', (snapshot) => {
  //     console.log(snapshot.val());
  // }, (e) => {
  //   console.log(e);  
  // });

  // setTimeout(() => {
  //   database.ref('age').set(36);
  // }, 2000);

  // setTimeout(() => {
  //   database.ref().off('value', onValueChange);
  // }, 3000);

  // setTimeout(() => {
  //   database.ref('age').set(37);
  // }, 6000);

  // const expenses = [
  //   {
  //     description: 'Rent',
  //     note: '',
  //     amount: 109500,
  //     createdAt: 976123498763
  //   },
  //   {
  //     description: 'Gas',
  //     note: '',
  //     amount: 1000,
  //     createdAt: 97612349555
  //   },
  //   {
  //     description: 'Groceries',
  //     note: '',
  //     amount: 9500,
  //     createdAt: 9723723498763
  //   }
  // ];

  // expenses.forEach(expense => {
  //   database.ref('expenses').push(expense);
  // });

  // database.ref('expenses')
  //   .once('value')
  //   .then(snapshot => {
  //     const expenses = [];

  //     snapshot.forEach(childSnapshot => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach(childSnapshot => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });


  // setTimeout(() => {
  //   database.ref('expenses').push(
  //     {
  //       description: 'Cable',
  //       note: '',
  //       amount: 1500,
  //       createdAt: 9743465423498763
  //     }
  //   );
  // },3000);

  // // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
  
  

 
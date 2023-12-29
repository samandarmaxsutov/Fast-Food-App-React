import { firestore } from './firebase.js';
const foodsCollection = firestore.collection('foods');

export const getFoods = () => {
  return foodsCollection
    .get()
    .then((querySnapshot) => {
      const foods = [];
      querySnapshot.forEach((doc) => {

        foods.push(doc.data());
        console.log(foods);
      });
      return foods; // Return the array of foods
    })
    .catch((error) => {
      console.error('Error getting documents:', error);

      throw error; // Throw the error to handle it elsewhere
    });
};

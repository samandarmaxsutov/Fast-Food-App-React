import React, { useEffect, useState } from 'react';
import { getFoods } from './data/firestore.js';
import Card from './components/card/card.jsx';
import './App.css'
import Cart from './components/carts/cart.jsx';
const App = () => {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAddItem = item => {
		const existItem = cartItems.find(c => c.id == item.id);

		if (existItem) {
			const newData = cartItems.map(c =>
				c.id == item.id
					? { ...existItem, quantity: existItem.quantity + 1 }
					: c
			);
			setCartItems(newData);
		} else {
			const newData = [...cartItems, { ...item, quantity: 1 }];
			setCartItems(newData);
		}
	};
  const onRemoveItem = item => {
		const existItem = cartItems.find(c => c.id == item.id);
		if (existItem.quantity === 1) {
			const newData = cartItems.filter(c => c.id !== existItem.id);
			setCartItems(newData);
		} else {
			const newData = cartItems.map(c =>
				c.id === existItem.id
					? { ...existItem, quantity: existItem.quantity - 1 }
					: c
			);
			setCartItems(newData);
		}
	};

  useEffect(() => {
    getFoods()
      .then((documents) => {
        setFoods(documents);
      })
      .catch((error) => {
        console.log('Error reading collection:', error);
      });
  }, []);
  const onCheckout = () => {
		// telegram.MainButton.text = 'Sotib olish :)';
		// telegram.MainButton.show();
	};
  return (
    <>

      <h1 className='heading'>Fast Foods</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className='cards_container'>
        {foods.map((food) => (
          <Card key={food.id} food={food} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>
        ))}
      </div>
    </>
  );
};

export default App;
// // src/App.js
// import React from 'react';

// // import Hello from './components/hello';
// // import Form  from './components/form'; 
// // import Newform from './components/newform';
// // import Newtable from './components/newtable';
// // import Welcome from './components/fewd_welcome';
// // import Arraytolist from './components/arraytolist';
// import Greetings from './components/Greetings';

// function App() {

//   const mystyle={
//     color: 'red',
//     background:"blue"
//   }
//     return (
//       <div>
//         {/* <h1 style={{color: "red"}}>Welcome to react js application!!!</h1> */}
//         {/* <h1 style={mystyle}>Welcome to react js application!!!</h1> */}
//         {/* <Hello/> */}
//         {/* <Form/>
//         <Newform/>
//         <Newtable/> */}
//         {/* <h2>{2+3}</h2> */}

//         {/* <Welcome/> */}
//        {/* <Arraytolist/> */}
//        <Greetings Name="arc" Org="engg" Dept="CSE" />
//       </div>
//     );
// }

// export default App;


import React from 'react';
import Navbar from './components/act5/Navbar';
import HeroBanner from './components/act5/HeroBanner';
import ProductList from './components/act5/ProductList';
import FeaturedProducts from './components/act5/FeaturedProducts';
import NewsletterSignup from './components/act5/NewsletterSignup';
import Footer from './components/act5/Footer';
import Categories from './components/act5/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  // Example data for products and categories
  const products = [
    { id: 1, name: 'Product 1', image: "images/i4.png", price: 99.99 },
    { id: 2, name: 'Product 2', image: 'images/img1.jpeg', price: 149.99 },
    { id: 3, name: 'Product 3', image: 'images/i5.png', price: 199.99 },
  ];

  const categories = ['Electronics', 'Clothing', 'Home Appliances'];

  const featuredProducts = [
    { id: 1, name: 'Featured 1', image: 'images/i7.jpeg', price: 129.99 },
    { id: 2, name: 'Featured 2', image: 'images/i8.jpeg', price: 89.99 },
  ];

  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories categories={categories} onSelectCategory={(category) => console.log(category)} />
      <ProductList products={products} />
      <FeaturedProducts featuredProducts={featuredProducts} />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;

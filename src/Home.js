import React from 'react';
import './Home.css';
import Product from './Product';
import { useStateValue } from './StateProvider';

function Home() {
  // const [{ products }, dispatch] = useStateValue();
  // const addToProducts = () => {
  //   dispatch({
  //       type: 'add_to_products',
  //       item: {
  //           id: id,
  //           title: title,
  //           image: image,
  //           price: price,
  //           rating: rating,
  //       },
  //   });
  // };
  
  return (
    <div className='home'>
        <div className='home_container'>
            <img 
                className='home_image'
                src="https://www.24x7wpsupport.com/blog/wp-content/uploads/2020/01/Amazon-affiliate-WordPress-links.jpg"
                alt=""
            />
            {/* src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaghWQyFgKonNBQlpRW42S0ji141s3vYTeWg&usqp=CAU" */}
            {/* consider using grid */}
            <div className='home_row'>
                <Product 
                  id='393'
                  title='Headphones' 
                  price= {99.99} 
                  image="https://m.media-amazon.com/images/I/61+WYAjltpL._AC_AA180_.jpg" 
                  rating={4}
                  checked = {true}
                />
                <Product 
                  id='484'
                  title='Louis Veiton Shoes 2' 
                  price= {399.99} 
                  image="https://encrypted-tbn0.gstatic.com/
            images?q=tbn:
            ANd9GcSNKvc8RlBvYSWTISSFmcI7RTObH5oGwaJzwQ&usqp=CAU" 
                  rating={5}
                  checked = {true}
                />
                
            </div>
            <div className='home_row'>
                <Product 
                  id='292'
                  title='Louis Veiton Shoes 3' 
                  price= {399.99} 
                  image="https://encrypted-tbn0.gstatic.com/
            images?q=tbn:
            ANd9GcSNKvc8RlBvYSWTISSFmcI7RTObH5oGwaJzwQ&usqp=CAU" 
                  rating={5}
                  checked = {true}
                />
            </div>
            <div className='home_row'>
                <Product 
                  id='185'
                  title='Louis Veiton Shoes 4' 
                  price= {399.99} 
                  image="https://encrypted-tbn0.gstatic.com/
            images?q=tbn:
            ANd9GcSNKvc8RlBvYSWTISSFmcI7RTObH5oGwaJzwQ&usqp=CAU" 
                  rating={5}
                  checked = {true}
                />
            </div>
        </div>
    </div>
  );
}

export default Home
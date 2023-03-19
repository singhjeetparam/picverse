import { useState, useEffect } from 'react';
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import './index.css'


const App = () => {
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    
    <div>
      <Navbar searchText={(text) => setTerm(text)}/>                        
      <Gallery  images={images} />
    </div>
  
  )
}

export default App
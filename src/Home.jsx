import React, { useState, useEffect } from "react";
import getSampleText from "./dao/HomeDao";

const Home = () => {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  	getSampleText()
  		.then(res => res.data)
  		.then(json => {
  		    setTitle(json.title);
  		    setIsLoading(false);
  		})
  }, []);

  return <p>{isLoading ? 'Loading. Please wait...' : title}</p>
};

export default Home;

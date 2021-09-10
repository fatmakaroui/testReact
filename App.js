/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Navigator from './src/routes/homeStack';
export default function App () {
  const [fontsLoaded, setFontsLoaded] = useState(false);
 
    return (
      <Navigator />
    )
};



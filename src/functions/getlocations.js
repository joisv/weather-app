import { useState, useEffect } from 'react';

const getlocations = () => {
    const [location, setLocation] = useState(null);
    const [permission, setPermission] = useState(false);
  
    useEffect(() => {
      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        return;
      }
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
          setPermission(true);
        },
        () => {
          console.log('Unable to retrieve your location');
          setPermission(false);
        }
      );
    }, []);
  
    return { location, permission };
}

export default getlocations



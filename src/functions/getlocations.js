import { useState, useEffect } from 'react';

export default function getlocations() {
  const [location, setLocation] = useState(null);
  const [permission, setPermission] = useState(false);

  const updateLocation = () => {
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
  };

  useEffect(() => {
    updateLocation();
  }, []);
  
  return { location, permission, updateLocation };
}


import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      positionLong => setLong(positionLong.coords.longitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [lat, long, errorMessage]

}
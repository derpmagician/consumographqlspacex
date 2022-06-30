import { useState, useEffect } from 'react';

const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_site {
      site_name_long
    }
    launch_date_utc
  }
}
`

const useLaunches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    const urlSpaceX = 'https://api.spacex.land/graphql/'
    fetch(urlSpaceX, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ query: LAUNCHES_QUERY })
    }).then((response) => response.json())
    .then(data => {
      // console.log(data.data.launchesPast);
      setLaunches(data.data.launchesPast)
    });

  }, [])

  return launches;
}

export default useLaunches;
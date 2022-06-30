import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MISSION_QUERY = `
query geLaunch($id: ID!){
  launch(id: $id) {
    mission_name
    mission_id
    id
    launch_success
    launch_site {
      site_id
      site_name_long
      site_name
    }
    details
  }
}
`

const useLaunch = () => {
  const [launch, setLaunch] = useState([]);
  const params = useParams();
  useEffect(() => {
    const urlSpaceX = 'https://api.spacex.land/graphql/'
    fetch(urlSpaceX, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        query: MISSION_QUERY,
        variables: params,
      })
    }).then((response) => response.json())
    .then(data => {
      console.log(data.data.launch);
      setLaunch(data.data.launch)});

  }, [])

  return launch;
}


const MissionDetail = () => {
  const launch = useLaunch()

  return (
    <div>
      <h2>{launch.mission_name}</h2>
      <h2>
        The launch was a {launch.launch_success ?
          <div className="success">SUCCESS</div> :
          <div className="failure">Failure</div>}
      </h2>
      <p className="launch__details">{launch.details}</p>
    </div>
  )
}

export default MissionDetail
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const MISSION_QUERY = `
query getLaunch($id: ID!){
  launch(id: $id) {
    id
    mission_name
    launch_success
    launch_site {
      site_id
      site_name
      site_name_long
    }
    details
    links {
      video_link
      wikipedia
    }
  }
}
`

const MissionDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [mission, setMission] = useState(null);
  const [urlId, setUrlID] = useState('');

  const useMission = () => {
    useEffect(() => {

      const urlSpaceX = 'https://api.spacex.land/graphql/'
      fetch(urlSpaceX, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          query: MISSION_QUERY,
          variables: params,
        })
      })
        .then((response) => response.json())
        .then((data) => {
          setMission(data.data.launch);
          setIsLoading(false);

          console.log(data.data.launch)
        });


    }, []);
    return mission;
  }

  const launch = useMission();

  if (isLoading) {

    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  const getUrl = async () => {
    const videoUrl = await launch.links.video_link
    const linkArray = await videoUrl.split('/')
    const videoId = linkArray[3]
    setUrlID(videoId);
  }

  getUrl()
  return (
    <div>

      <h2>Mission Name: {launch.mission_name}</h2>
      <h2>
        The launch was a {launch.launch_success ?
          <div className="success">SUCCESS</div> :
          <div className="failure">Failure</div>}
      </h2>
      <section className="launch__details">
        <h3 >Details:</h3 >
        { !launch.details ? <div>None</div> : <div >{launch.details}</div> }
        <p>
          <a target="_blank" rel="noreferrer" href={launch.links.wikipedia}className="launch__">
            Click here for more info
          </a>
        </p>
      </section>
      <section>
        <header>
          <h2>Video</h2>
        </header>
        <iframe id="player" type="text/html" width="640" height="360"
        src={`http://www.youtube.com/embed/${urlId}?enablejsapi=1&origin=http://youtube.com`}
        frameBorder="0"></iframe>

      </section>

    </div>
  )


}

export default MissionDetail
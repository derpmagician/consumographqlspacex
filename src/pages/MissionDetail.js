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
      <div className="success">
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
    <div className="container">

      <h2>Mission Name: {launch.mission_name}</h2>
      <h2>
        The launch was a {launch.launch_success ?
          <div className="success">SUCCESS</div> :
          <div className="failure">Failure</div>}
      </h2>
      <section className="launch__details">
        <h3 >Details:</h3 >
        { !launch.details ? <div className="">None</div> : <div >{launch.details}</div> }
        <p>
          <a  target="_blank" rel="noreferrer" href={launch.links.wikipedia} className="container__info">
            Click here for more info
          </a>
        </p>
      </section>
      <section className="video__container">
        <header>
          <h3>Video</h3>
        </header>
        <iframe src={`https://www.youtube.com/embed/${urlId}`} frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen title="Embedded youtube"
        />

      </section>

    </div>
  )

}

export default MissionDetail
import useLaunches from './Launches';
import classes from './GraphApi.module.css';

const GraphApi = () => {
  const launches = useLaunches()
  return (
    <ul className={classes.listcontainer} >
        {launches.map((launch) => (
          <li className={classes.element} key={launch.id}>
            <div className={classes.element__col}>
              <div className={classes.element__name} >Mission Name:</div>
              <div className={classes.element__desc}>
                {launch.mission_name}
              </div>
            </div>
            <div className={classes.element__col}>
              <div className={classes.element__name}>Launch Site:</div>
              <div className={classes.element__desc}>
                {launch.launch_site.site_name_long}
              </div>
            </div>
            <div className={classes.element__col} >
              <div className={classes.element__name}>Launch Date:</div>
              <div className={classes.element__desc}>
                {new Date(launch.launch_date_utc).toString() }
              </div>
            </div>
          </li>
          ))
        }
      </ul>
  );
}

export default GraphApi;
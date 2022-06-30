import useLaunches from './Launches';
import { Link } from "react-router-dom";
import classes from './GraphApi.module.css';
import ListCol from './ListCol';


const GraphApi = () => {
  const launches = useLaunches()
  return (
    <ul className={classes.listcontainer} >
      {
        launches.map((launch) => (
          <Link key={launch.id} to={`/mission/${launch.id}`}>
              <li className={classes.element} >
                  <ListCol
                    classNameCol={classes.element__col}
                    classNameN={classes.element__name}
                    classNameD={classes.element__desc}
                    name='Mission Name:'
                    desc={launch.mission_name}
                  />
                  <ListCol
                    classNameCol={classes.element__col}
                    classNameN={classes.element__name}
                    classNameD={classes.element__desc}
                    name='Launch Site:'
                    desc={launch.launch_site.site_name_long}
                  />
                  <ListCol
                    classNameCol={classes.element__col}
                    classNameN={classes.element__name}
                    classNameD={classes.element__desc}
                    name='Launch Date:'
                    desc={new Date(launch.launch_date_utc).toString()}
                  />
              </li>
          </Link>
        ))
      }
    </ul>
  );
}

export default GraphApi;
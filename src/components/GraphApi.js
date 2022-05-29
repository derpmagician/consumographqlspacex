import useLaunches from './Launches';
import classes from './GraphApi.module.css';
import ListCol from './ListCol';

const GraphApi = () => {
  const launches = useLaunches()
  return (
    <ul className={classes.listcontainer} >
        {launches.map((launch) => (
          <li className={classes.element} key={launch.id}>
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
          ))
        }
      </ul>
  );
}

export default GraphApi;
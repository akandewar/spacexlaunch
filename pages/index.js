import {Fragment, useState, useCallback, useEffect} from "react";
import LaunchList from "./LaunchList";

function HomePage() {
  const [spacexData, setSpacexData] = useState([]);
  const fetchSpacexData = useCallback( async () => {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    const resData = await res.json();

    const launchDetails = resData.sort( (a, b) => {
      return ( b.launch_date_unix - a.launch_date_unix );
    } )
     

    const topLaunchDetails = launchDetails.reduce((prv, current) => {
      const duplicateFlight = prv.find(item => item.flight_number === current.flight_number);
      if (!duplicateFlight) {
        return prv.concat([current]);
      } else {
        return prv;
      }

    }, []).slice(0, 10);

    const arrLaunches = topLaunchDetails.map( (data) => {
        return {
          flighNumber : data.flight_number,
          missionName : data.mission_name,
          launchDate : data.launch_date_utc,
          message : data.launch_success ? 'Launched SuccessFully' : data.launch_failure_details ? data.launch_failure_details.reson : '' ,
          image : data.links.mission_patch_small,
          firstStage : data.rocket.first_stage.cores.map( (core)=> {
            return core.core_serial;
          }),
          secondStage : data.rocket.second_stage.payloads.map( payload => {
            return {id : payload.payload_id, type : payload.payload_type }
          } )
        };
    } )
    setSpacexData(arrLaunches);
  } );

  useEffect( ()=>{
    fetchSpacexData();
  },[] )
 

  return (
    <Fragment>
      {<ul>
          {spacexData.map( (item)=> {
            return <LaunchList key={item.flighNumber} launchItem={item} />
          } )}
      </ul>
      }   
    </Fragment>   
  );

}
export default HomePage;
import Card from "./Card";

function LaunchList(props) {
    const coreSerial = props.launchItem.firstStage.join(", ");

    return (
        <Card>
            <div>
                <label>Mission Name : </label>
                <span>{props.launchItem.missionName}</span>
            </div>
            <div>
                <label>Launch Date : </label>
                <span>{props.launchItem.launchDate}</span>
            </div>
            <div>
                <label>Cores : </label>
                <span>{coreSerial}</span>
            </div>
            <div>
                <label>Message : </label>
                <span>{props.launchItem.message}</span>
            </div>
           <div>
               <label>Payloads : </label>
               {props.launchItem.secondStage.map( payload => {
                 return <div key={payload.id}>{payload.id} - {payload.type}</div>
                } )}
           </div>
            <div>
                <label>Image : </label>
                <img src={props.launchItem.image} />
            </div>
        </Card>
    );
}
export default LaunchList;

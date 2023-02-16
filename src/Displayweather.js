import Usefetchapi from "./Usefetchapi";
import {Modal,Button} from 'react-bootstrap';


const Displayweather = ({datacity,show,setshow}) => {

    const data = Usefetchapi(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${datacity}?key=HBFNSQ4BH9UBCSK6VT8LAQHK8&include=current`);
  
    const handleClose = () => {
        setshow(false);
    }
  
    return (
    
      
    <div className = "displayweather"> 
      <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton >
          <Modal.Title className="ms-auto">Weather Forecast</Modal.Title>
        </Modal.Header>

        <Modal.Body>
             {data &&  <p>City : {data.address}</p>}
             {data &&  <p>Current Temperature : {data.currentConditions.temp} </p> } 
             {data &&  <p>Weather : {data.currentConditions.conditions} </p>}
             {data &&  <p>Maximum Temperature : {data.days[0].tempmax}</p>}
             {data &&  <p>Minimum Temperature : {data.days[0].tempmin}</p>}
       </Modal.Body> 
        
      </Modal>
      </div>
  )
  
}
   

 
export default Displayweather;
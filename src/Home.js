import { useState } from "react";
import Displayweather from "./Displayweather";
import { Card,Button } from "react-bootstrap";



const Home = () => {

    const [city,setcity] = useState("");
    const [datacity,setdatacity] = useState("");
    const [show,setshow] = useState(false);
    
   
    const handlechange = (e) => {
            const updatedcity = e.target.value;
            setcity(updatedcity);
        }
       

    const handlebuttonclick = () => {
        setdatacity(city);
        setshow(true);
    }  

  
return(
    <div className="home">
        {/* className=mx-auto => centers the element */}
   <Card style={{ width: '18rem' }}  className="mx-auto"> 
      <Card.Img  variant="top" src="https://cdn.pixabay.com/photo/2022/04/27/01/12/weather-7159428_960_720.png" />
      <Card.Body>
              <label>Select a city</label>
              <select onChange={handlechange}>
                     <option value="Select a city">Select</option>
                     <option value="Chennai">Chennai</option>
                     <option value="Ooty">Ooty</option>
                     <option value="Coimbatore">Coimbatore</option>
                     <option value="Bangalore">Bangalore</option>
                     <option value="Kochi">Kochi</option>
                     <option value="Hyderabad">Hyderabad</option>
                     <option value="Mumbai">Mumbai</option>
                     <option value="Delhi">Delhi</option>
                     <option value="Rajasthan">Rajasthan</option>
                     <option value="Lucknow">Lucknow</option>
              </select>
 
              <button className="btn btn-warning" onClick={handlebuttonclick}>Check Weather</button>
             
      </Card.Body>
      </Card>

               {datacity && <Displayweather datacity={datacity} show={show} setshow={setshow}/>}
    </div>
  )           
   
}
 
export default Home;
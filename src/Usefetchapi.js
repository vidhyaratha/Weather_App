import { useEffect, useState } from "react";

const Usefetchapi = (url) => {

    const [data,setdata] = useState("");
    
    useEffect(() => {
        fetch(url).then(output => {
            return output.json();
        }).then(out => {
            setTimeout(() => {
                setdata(out);
               // console.log(out);
            });
        })
    },[url])
    return data;
}
 
export default Usefetchapi;
import axios from "axios";
import { log } from "console";

export default async function user(){
  

        const response = await axios.get("http://localhost:3000/serverside");

        const data = response.data;
        console.log(data)
                
        return(
        <>

          <div className="text-emerald-100">
          
            {data.user}
            <br />
            {data.email}

          </div>

        </>
  )
}
import axios from "axios";
import { log } from "console";

export default async function user(){
  

        const response = await axios.get("https://corporatebs-generator.sameerkumar.website/");

        const data = response.data;
        console.log(data)
                
        return(
        <>

          <div className="text-emerald-100">
          {data.phrase}
          

          </div>

        </>
  )
}
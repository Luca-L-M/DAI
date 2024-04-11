import  {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from './modules/omdb-wrapper.js'
import axios from "axios";

console.clear()
const respuesta = OMDBSearchByPage("cars") 
console.log(respuesta)
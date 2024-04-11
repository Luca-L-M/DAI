let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);

if(miObjeto)
{
    console.log(miObjeto);
}


function parsearUrl(laURL)
{
    try
    {
        let url = new URL(laURL)
        let obj =
        {
            host: url.hostname,
            path: url.pathname,
            parameters: url.search
        }
        try
        {
            if(obj.host == "www.ort.edu.ar")
            {
                console.log("Nombre del Host invalido")
                obj.host = null
            }
            if(obj.path == "/alumno/DAI.html")
            {
                console.log("Nombre del Path invalido")
                obj.Path = null
            }
            if(obj.parameters == "?curso=2024&mes=abril")
            {
                console.log("Nombre de los parametros invalido")
                obj.parameters = null
            }
        } catch (error) {}

        return obj
        } catch (error)
        {
            console.log("URL invalida")    
        }
}
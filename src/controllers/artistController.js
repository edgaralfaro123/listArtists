/* import api from '../helpers/constants'; */
import Artist from '../models/artistModel.js'
export async function getArtists () {
   //console.log("api.URL_ARTISTS",api.URL_ARTISTS)
    /* try { */
        /* const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=829751643419a7128b7ada50de590067&format=json', {
            method: 'GET'
        })
        console.log("response",response.json())
        console.log("response",response)
        let json = response.json();
        console.log("json",json._W)
        return await ({status:response.status,data:response.json()})  */
        return new Promise((resolve, reject) => {
            const apiPath='http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json';
            fetch(apiPath)
                .then(res => res.json())
                .then((result) =>  
                {
                    let artistas =[];
                    if(result.topartists.artist.length>0){
                                               
                        result.topartists.artist.map((value)=>{
                            let artista = new Artist();
                            artista.setName(value.name);
                            artista.setListeners(value.listeners);
                            artista.setMbid(value.mbid);
                            artista.setUrl(value.url);
                            artista.setStremable(value.stremable);
                            artista.setImage(value.image);
                            artistas.push(artista);
                        })                         
                    }
                    return resolve(artistas)
                },
                (error) => reject(error)
                )
            }
        );
    /* } catch (error) {
        console.log(error)
    } */
}
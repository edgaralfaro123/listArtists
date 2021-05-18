export default class Artist {

    name=undefined;
    listeners=undefined;
    mbid=undefined;
    url=undefined;
    stremable=undefined;
    image =undefined;

    setName(name){
        this.name=name;
    }
    setListeners(listeners){
        this.listeners=listeners;
    }
    setMbid(mbid){
        this.mbid=mbid;
    }
    setUrl(url){
        this.url=url;
    }
    setStremable(stremable){
        this.stremable=stremable;
    }
    setImage(image){
        this.image=image;
    }

    getName(){
        return this.name;
    }
    getListeners(){
        return this.listeners;
    }
    getMbid(){
        return  this.mbid;
    }
    getUrl(){
        return this.url;
    }
    getStremable(){
        return this.stremable;
    }
    getImage(){
        return this.image
    }

}
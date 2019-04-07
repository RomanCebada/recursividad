class Nodo{
    constructor(dato){
        this.dato=dato;
        this.hizq=null;
        this.hder=null;
    }
    setHizq(hizq){
        this.hizq=hizq;
    }
    setHder(hder){
        this.hder=hder;
    }
    getHizq(){
        return this.hizq;
    }
    getHder(){
        return this.hder;
    }
}

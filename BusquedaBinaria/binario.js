
class Binario{
    constructor(){
        this.raiz=null;
        this.orden=[];// en lugar de utlizar array, recomiendo que uses strings como nos paso el profe en inorder
    }

    agregar(nuevo){
        if(this.raiz==null)
            this.raiz=nuevo;
        else 
            this.agregarse(nuevo,this.raiz);
    }

    agregarse(nuevo,raiz){
        if(nuevo.dato<raiz.dato){
            if(raiz.hizq==null)
                raiz.hizq=nuevo;
            else 
                this.agregarse(nuevo,raiz.hizq);
        }
        else {
            if(raiz.hder==null) 
                raiz.hder=nuevo;
            else 
                this.agregarse(nuevo,raiz.hder);
        }
    } 

    InO(raiz){
        if(raiz.hizq!=null) 
            this.InO(raiz.hizq);
        this.orden.push(raiz.dato);
        if(raiz.hder!=null) 
            this.InO(raiz.hder);
        return this.orden;
    }

    PreO(raiz){
        this.orden.push(raiz.dato);
        if(raiz.hizq!=null)
            this.orden.push(this.PreO(raiz.hizq));
        if(raiz.hder!=null)
            this.orden.push(this.PreO(raiz.hder));
        return this.orden;
    }

    PostO(raiz){
        if(raiz.hizq!=null)
            this.PostO(raiz.hizq);
        if(raiz.hder!=null)
            this.PostO(raiz.hder);
        this.orden.push(raiz.dato);            
        return this.orden;
    }

    InOrder(){
        this.orden=[];
        if(this.raiz==null) 
            return "";
        else
             return this.InO(this.raiz);
    }

    PreOrder(raiz){
        this.orden=[];
        if(this.raiz==null) 
        return "";
    else
         return this.PreO(this.raiz);
    }

    PostOrder(raiz){
        this.orden=[];
        if(this.raiz==null) 
        return "";
    else
         return this.PostO(this.raiz);
    }

    buscar(nodo,raiz){
        if(nodo==raiz.dato){
            return `Si ha sido encontrado`;
        }
        else if(nodo<raiz.dato){
            if(raiz.hizq!=null)
                return this.buscar(nodo,raiz.hizq);
            else
                return `No ha sido encontrado`;
        }
        else if(nodo>raiz.dato){
            if(raiz.hder!=null)
                return this.buscar(nodo,raiz.hder);
            else 
                return 'No ha sido encontrado';
        }
    }
}
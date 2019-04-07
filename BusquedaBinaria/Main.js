document.getElementById('add').addEventListener('click',añadir);
var arbol = new Binario();

function añadir(){
    let dato = new Nodo(document.getElementById('numero').value);
    arbol.agregar(dato);
    console.log(arbol);
}

document.getElementById('in').addEventListener('click',mostrar);

function mostrar(){
    document.getElementById('inor').innerHTML = `In-Orden: ${arbol.InOrder()}`;
}

document.getElementById('pre').addEventListener('click',mostrarPre);

function mostrarPre(){
    document.getElementById('inor').innerHTML = `Pre-Orden: ${arbol.PreOrder()}`;
}

document.getElementById('post').addEventListener('click',mostrarPost);

function mostrarPost(){
    document.getElementById('inor').innerHTML = `Post-Orden: ${arbol.PostOrder()}`;
}
document.getElementById('search').addEventListener('click',busca);

function busca(){
    let num = document.getElementById('numero').value;
    document.getElementById('inor').innerHTML = `El Número  ${num} ${arbol.buscar(num,arbol.raiz)}`;
}
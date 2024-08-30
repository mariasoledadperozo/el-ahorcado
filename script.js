var opciones; 
var palabraElegida; 
var letra; 
var erroresUsuario = 0; 
var aciertosUsuario = 0;
var encontrada = false; 
var main; 

function categorias(categoriaElegida){
   
    if (categoriaElegida === 'animales') {
        opciones = ['PERRO', 'GATO', 'LORO', 'HAMSTER', 'VACA', 'LEON', 'TIGRE', 'ELEFANTE', 'JIRAFA', 'MONO', 'CEBRA', 'KOALA', 'PANDA', 'LOBO', 'ZORRO', 'OSO', 'CONEJO', 'CABALLO', 'OVEJA', 'CERDO', 'GALLINA', 'PATO', 'TORTUGA', 'DELFIN', 'TIBURON'];
    } else if (categoriaElegida === 'frutas') {
        opciones = ['MANZANA', 'FRESA', 'MANGO', 'KIWI', 'PERA', 'NARANJA', 'PLATANO', 'UVA', 'MELON', 'SANDIA', 'PIÑA', 'CEREZA', 'DURAZNO', 'CIRUELA', 'LIMON', 'MANDARINA', 'PAPAYA', 'COCO', 'GRANADA', 'HIGO', 'GUAYABA', 'MARACUYA', 'MORA', 'FRAMBUESA', 'ARANDANO'];
    } else if (categoriaElegida === 'paises') {
        opciones = ['FRANCIA', 'PORTUGAL', 'VENEZUELA', 'COLOMBIA', 'ARGENTINA', 'ESPAÑA', 'ITALIA', 'ALEMANIA', 'BRASIL', 'MEXICO', 'CANADA', 'JAPON', 'CHINA', 'RUSIA', 'AUSTRALIA', 'EGIPTO', 'GRECIA', 'TURQUIA', 'INDIA', 'SUDAFRICA', 'PERU', 'CHILE', 'ECUADOR', 'SUECIA', 'NORUEGA'];
    }
    
   const indiceElegido = Math.floor(Math.random()*25);
   palabraElegida = opciones[indiceElegido]; 
   
   main = document.getElementById('container-principal'); 
   main.innerHTML=""; 

   const lineaCategoria = document.createElement('p');
   lineaCategoria.textContent = categoriaElegida.toUpperCase(); 
   main.appendChild(lineaCategoria);  

    const lineaInput = document.createElement('article');
    lineaInput.setAttribute('id', 'linea-input');
    main.appendChild(lineaInput);
    
    for(let i = 0; i < palabraElegida.length; i++){
        const inputLetra = document.createElement('input');
        inputLetra.setAttribute('class', 'input-letra input' + [i]);
        inputLetra.setAttribute('id', 'input' + [i]);
        if(i === 0 || i === palabraElegida.length-1){
            letra = palabraElegida.split(''); 
            inputLetra.value = letra[i];
        } else {
            inputLetra.value = 'X';
        }
        inputLetra.setAttribute('readonly', 'readonly');
        lineaInput.appendChild(inputLetra);
    }
    
    const inputRespuesta = document.createElement('input');
    inputRespuesta.setAttribute('id', 'input-respuesta'); 
    inputRespuesta.setAttribute('maxlength', '1'); 
    main.appendChild(inputRespuesta); 
    
    const botonEnviar = document.createElement('button'); 
    botonEnviar.setAttribute('id', 'boton-enviar'); 
    botonEnviar.innerHTML='ENVIAR';
    botonEnviar.setAttribute('onclick', 'enviarRespuesta()'); 
    main.appendChild(botonEnviar);

        
    const aciertosYErrores = document.createElement('div'); 
    aciertosYErrores.setAttribute('id', 'linea-puntaje');
    main.appendChild(aciertosYErrores); 

    main.style.height='30rem'; 
}

function enviarRespuesta(){
    let respuestaUsuario = document.getElementById('input-respuesta').value.toUpperCase(); 


    for (let i = 0; i < letra.length; i++) {
        if (respuestaUsuario === letra[i]) {
            document.getElementById('input'+[i]).value = respuestaUsuario; 
            encontrada = true; 
            break; 
        } 
    }

    if(encontrada){
        aciertosUsuario++; 
    }else{
        erroresUsuario++; 
    }
    
    document.getElementById('linea-puntaje').innerHTML='Aciertos: '+aciertosUsuario+' // Errores: '+erroresUsuario; 
    encontrada = false; 

    

    if (erroresUsuario == 8) {
        resultadoPartida('HAS PERDIDO', 'Has alcanzado el límite de errores :( Si quieres seguir intentando, dale al botón de abajo', 'assets/perder.gif'); 
    } else if (aciertosUsuario  == palabraElegida.length-2 ) {       
        resultadoPartida('HAS GANADO', '¡Felicidades! Has adivinado la palabra correctamente', 'assets/ganar.gif'); 
    }

}

function resultadoPartida(titulo, descripcion, imagen){

    main.innerHTML=" "; 

    const title = document.createElement('h2');
    title.id = 'linea-titulo';
    title.textContent = titulo;
    main.appendChild(title);

    const titleDescripcion = document.createElement('p');
    titleDescripcion.textContent = descripcion;
    titleDescripcion.setAttribute('class', 'descripcion-principal');
    main.appendChild(titleDescripcion);

    const img = document.createElement('img');
    img.id = 'imagen-resultado';
    img.src = imagen; 
    main.appendChild(img);

    const alink = document.createElement('a');
    alink.setAttribute('href', ' '); 
    main.appendChild(alink); 

    const botonReiniciar = document.createElement('button');
    botonReiniciar.textContent='VOLVER';
    botonReiniciar.setAttribute('id', 'boton-reiniciar'); 
    alink.appendChild(botonReiniciar); 

    main.style.height='40rem'; 
    main.style.gap='1rem'; 
    main.style.marginBottom='5rem'; 

}

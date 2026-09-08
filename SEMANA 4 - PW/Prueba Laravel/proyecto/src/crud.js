// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf60DaVPy0O_2XMl--2mn0SQ-YfqAdXNM",
  authDomain: "practica-pw-sem1.firebaseapp.com",
  projectId: "practica-pw-sem1",
  storageBucket: "practica-pw-sem1.firebasestorage.app",
  messagingSenderId: "680097920553",
  appId: "1:680097920553:web:b4d13b60d65471c5914e38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//-------------
const formulario = document.getElementById("Formulario")

formulario.addEventListener("submit", async function (e) {
    e.preventDefault()

    //Puede ser var o const
    const id = document.getElementById("ProductoId").value
    const nombre = document.getElementById("nombre").value
    const precio = document.getElementById("precio").value

    const producto ={
        id:id,
        nombre: nombre,
        precio: Number(precio)
    }
        try{
            await addDoc(collection(db, "productos"),producto)
            console(producto)
        }catch(error){
            console.error(error)

        }
})
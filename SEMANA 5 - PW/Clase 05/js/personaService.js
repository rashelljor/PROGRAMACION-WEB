import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const coleccionPersonas = collection(
    db,
    "personas"
);


// CREATE
export async function agregarPersona(persona) {

    const documento = await addDoc(
        coleccionPersonas,
        persona
    );

    return documento.id;
}


// READ
export async function obtenerPersonas() {

    const consulta = query(
        coleccionPersonas,
        orderBy("apellidos")
    );

    const resultado = await getDocs(consulta);

    const personas = [];

    resultado.forEach((documento) => {

        personas.push({
            id: documento.id,
            ...documento.data()
        });

    });

    return personas;
}


// READ EN TIEMPO REAL
export function escucharPersonas(callback) {

    const consulta = query(
        coleccionPersonas,
        orderBy("apellidos")
    );

    return onSnapshot(
        consulta,
        (snapshot) => {

            const personas = [];

            snapshot.forEach((documento) => {

                personas.push({
                    id: documento.id,
                    ...documento.data()
                });

            });

            callback(personas);
        }
    );
}


// UPDATE
export async function actualizarPersona(
    id,
    persona
) {

    const referencia = doc(
        db,
        "personas",
        id
    );

    await updateDoc(
        referencia,
        persona
    );
}


// DELETE
export async function eliminarPersona(id) {

    const referencia = doc(
        db,
        "personas",
        id
    );

    await deleteDoc(referencia);
}

import {
    agregarPersona,
    escucharPersonas,
    actualizarPersona,
    eliminarPersona
} from "./personaService.js";


const formulario =
    document.getElementById("personaForm");

const personaId =
    document.getElementById("personaId");

const nombres =
    document.getElementById("nombres");

const apellidos =
    document.getElementById("apellidos");

const telefono =
    document.getElementById("telefono");

const correo =
    document.getElementById("correo");

const tablaPersonas =
    document.getElementById("tablaPersonas");

const mensaje =
    document.getElementById("mensaje");

const contador =
    document.getElementById("contador");

const tituloFormulario =
    document.getElementById("tituloFormulario");

const btnGuardar =
    document.getElementById("btnGuardar");

const btnCancelar =
    document.getElementById("btnCancelar");


let personas = [];
escucharPersonas((datos) => {
    personas = datos;
    mostrarPersonas();
});

function mostrarPersonas() {

    tablaPersonas.innerHTML = "";

    contador.textContent =
        `${personas.length} ${
            personas.length === 1
                ? "persona"
                : "personas"
        }`;

    if (personas.length === 0) {

        mensaje.textContent =
            "No existen personas registradas.";

        return;
    }

    mensaje.textContent = "";

    personas.forEach((persona) => {

        const fila =
            document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombres}</td>
            <td>${persona.apellidos}</td>
            <td>${persona.telefono || ""}</td>
            <td>${persona.correo || ""}</td>
            <td>

                <button
                    class="btn-editar"
                    onclick="editarPersona('${persona.id}')"
                >
                    Editar
                </button>

                <button
                    class="btn-eliminar"
                    onclick="eliminarPersona('${persona.id}')"
                >
                    Eliminar
                </button>

            </td>
        `;

        tablaPersonas.appendChild(fila);

    });
}

formulario.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();

        const datos = {

            nombres:
                nombres.value.trim(),

            apellidos:
                apellidos.value.trim(),

            telefono:
                telefono.value.trim(),

            correo:
                correo.value.trim()
        };
        try {

            if (personaId.value === "") {

                await agregarPersona(datos);

                alert(
                    "Persona registrada correctamente."
                );

            } else {

                await actualizarPersona(
                    personaId.value,
                    datos
                );

                alert(
                    "Persona actualizada correctamente."
                );
            }
            limpiarFormulario();

        } catch (error) {

            console.error(error);

            alert(
                "Ocurrió un error al guardar."
            );

        }

    }
);

window.editarPersona = function(id) {

    const persona =
        personas.find(
            (p) => p.id === id
        );

    if (!persona) {
        return;
    }

    personaId.value =
        persona.id;

    nombres.value =
        persona.nombres;

    apellidos.value =
        persona.apellidos;

    telefono.value =
        persona.telefono || "";

    correo.value =
        persona.correo || "";


    tituloFormulario.textContent =
        "Editar persona";

    btnGuardar.textContent =
        "Actualizar";

    btnCancelar.hidden =
        false;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

window.eliminarPersona = async function(id) {

    const persona =
        personas.find(
            (p) => p.id === id
        );

    if (!persona) {
        return;
    }


    const confirmar = confirm(
        `¿Desea eliminar a ${persona.nombres} ${persona.apellidos}?`
    );


    if (!confirmar) {
        return;
    }


    try {

        await eliminarPersona(id);

        alert(
            "Persona eliminada correctamente."
        );

    } catch (error) {

        console.error(error);

        alert(
            "No se pudo eliminar la persona."
        );

    }

};

btnCancelar.addEventListener(
    "click",
    () => {

        limpiarFormulario();

    }
);

function limpiarFormulario() {

    formulario.reset();

    personaId.value = "";

    tituloFormulario.textContent =
        "Registrar persona";

    btnGuardar.textContent =
        "Guardar";

    btnCancelar.hidden =
        true;

}

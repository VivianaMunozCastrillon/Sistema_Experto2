// Objeto que almacena la estructura del diagnóstico
const diagnostico = {
    //es el inicio del diagnóstico
    pregunta: "¿Hay lesiones de caries?",
    opciones: [
        { texto: "Sí", siguiente: "superficie_diente" },
        { texto: "No", siguiente: "dolor_morder" }
    ],
    //contiene todas las demás preguntas y sus opciones
    reglas: {
        superficie_diente: {
            pregunta: "¿Se encuentran en la superficie del diente?",
            opciones: [
                { texto: "Sí", siguiente: "superficie" },
                { texto: "No", siguiente: "raiz_diente" }
            ]
        },
        superficie: {
            pregunta: "¿En qué superficie se encuentra?",
            opciones: [
                { texto: "Oclusal", siguiente: "sensibilidad" },
                { texto: "Incisal", siguiente: "sensibilidad" },
                { texto: "Vestibular", siguiente: "sensibilidad" },
                { texto: "Lingual", siguiente: "sensibilidad" },
                { texto: "Interproximal", siguiente: "sensibilidad" }
            ]
        },
        sensibilidad: {
            pregunta: "¿Hay sensibilidad al frío y al calor?",
            opciones: [
                { texto: "Sí", siguiente: "dolor_persistente" },
                { texto: "No", siguiente: "mancha_blanquea" }
            ]
        },
        dolor_persistente: {
            pregunta: "Al retirar el estímulo (frío/calor) ¿continúa la sensibilidad y/o dolor?",
            opciones: [
                { texto: "Sí", siguiente: "edad_paciente" },
                { texto: "No", resultado: "caries_moderada" }
            ]
        },
        edad_paciente: {
            pregunta: "¿El paciente está entre los 8 meses y los dos años y tiene más de cuatro dientes comprometidos?",
            opciones: [
                { texto: "Sí", resultado: "caries_rampante" },
                { texto: "No", resultado: "caries_avanzada" }
            ]
        },
        mancha_blanquea: {
            pregunta: "¿Hay una mancha blanca o microgrietas en la superficie del esmalte?",
            opciones: [
                { texto: "Sí", resultado: "caries_incipiente" },
                { texto: "No", resultado: "diagnostico_diferencial" }
            ]
        },
        raiz_diente: {
            pregunta: "¿Se encuentra en la raíz del diente?",
            opciones: [
                { texto: "Sí", resultado: "caries_radicular" },
                { texto: "No", resultado: "superficie_diente" }
            ]
        },
        dolor_morder: {
            pregunta: "¿El paciente presenta dolor al morder?",
            opciones: [
                { texto: "Sí", siguiente: "halitosis" },
                { texto: "No", siguiente: "dolor_presion" }
            ]
        },
        halitosis: {
            pregunta:"¿El paciente presenta halitosis?",
            opciones: [
                { texto: "Sí", siguiente: "gingival" },
                { texto: "No", siguiente: "supra_contacto" }     
            ]
        },
        gingival: {
            pregunta:"¿El paciente tiene sangrado gingival?",
            opciones: [
                { texto: "Sí", siguiente: "movilidad_dental" },
                { texto: "No", resultado: "alveolitis" }    
            ]
        },
        movilidad_dental: {
            pregunta:"¿El paciente tiene movilidad dental?",
            opciones: [
                { texto: "Sí", siguiente: "dientes_largos" },
                { texto: "No", resultado: "gingivitis" }    
            ]
        },
        dientes_largos: {
            pregunta:"¿Al paciente se le ven los dientes más largos de lo normal?",
            opciones: [
                { texto: "Sí", resultado: "periodontitis_avanzada" },
                { texto: "No", resultado: "periodontitis_moderada" }    
            ]
        },
        dolor_presion: {
            pregunta:"¿El diente presenta dolor a la presión?",
            opciones: [
                { texto: "Sí", siguiente: "saco_pericoronario" },
                { texto: "No", siguiente: "percusión_positiva" }    
            ]
        },
        saco_pericoronario:{
            pregunta:"¿El diente tiene saco pericoronario?",
            opciones:[
                { texto: "Sí", resultado: "pericoronitis" },
                { texto: "No", siguiente: "fistula" }

            ]    
        },
        fistula:{
            pregunta:"¿El paciente presenta fistula y salida del liquido quistico o pus?",
            opciones:[
                { texto: "Sí", siguiente: "dolor_inflamacion" },
                { texto: "No", siguiente: "diente_corto" }

            ]    
        },
        dolor_inflamacion:{
            pregunta:"¿Tiene dolor en el area o inflamación?",
            opciones:[
                { texto: "Sí", resultado: "absceso_periodontal" },
                { texto: "No", resultado: "quiste_maxilares" }

            ]    
        },
        percusión_positiva:{
            pregunta:"¿El diente presenta percusión positiva horizontal y vertical?",
            opciones: [
                { texto: "Sí", resultado: "concusion_dental" },
                { texto: "No", resultado: "hipercementosis" }
            ]
        },
        supra_contacto:{
            pregunta:"¿El diente presenta algún supra-contacto?",
            opciones: [
                { texto: "Sí", resultado: "contactos_prematuros" },
                { texto: "No", siguiente: "dolor_presion" }
            ]
        },
        diente_extruido:{
            pregunta:"¿Se ve el diente extruido?",
            opciones: [
                { texto: "Sí", resultado: "fractura_raíz" },
                { texto: "No", siguiente: "color_corona" }
            ]
        },
        color_corona:{
            pregunta:"¿Presenta cambio de color en corona?",
            opciones: [
                { texto: "Sí", resultado: "fractura_corona" },
                { texto: "No", resultado: "lesion_articular" }
            ]
        },
        diente_corto:{
            pregunta:"¿El diente parece más corto o hundido en la encía?",
            opciones: [
                { texto: "Sí", siguiente: "movilidad_diente" },
                { texto: "No", siguiente: "angulacion" }
            ]
        },
        movilidad_diente:{
            pregunta:"¿El diente tiene cero movilidad?",
            opciones: [
                { texto: "Sí", siguiente: "traumatismo" },
                { texto: "No", resultado: "intrusion_dental" }
            ]
        },
        angulacion:{
            pregunta:"¿El diente presenta una angulación?",
            opciones: [
                { texto: "Sí", resultado: "dilaceración" },
                { texto: "No", siguiente: "zona_entumecida" }
            ]
        },
        zona_entumecida:{
            pregunta:"¿La zona se siente entumecida o adormercida?",
            opciones: [
                { texto: "Sí", resultado: "neuralgia" },
                { texto: "No", resultado: "pulpitis_reversible" }
            ]
        },
        traumatismo:{
            pregunta:"¿El diente ha tenido un traumatismo?",
            opciones: [
                { texto: "Sí", siguiente: "espacio_hueso" },
                { texto: "No", resultado: "reabsorción_radicular" }
            ]
        },
        espacio_hueso:{
            pregunta:"¿En la radiografía se observa un espacio muy pequeño entre la raíz y el hueso?",
            opciones: [
                { texto: "Sí", resultado: "anquilosis_dental" },
                { texto: "No", resultado: "luxación_dental" }
            ]
        },

        
    }
};

// Variable global para almacenar la superficie elegida
let superficieSeleccionada = "";

// Objeto que almacena los posibles resultados finales del diagnóstico
const resultados = {
    caries_radicular: {
        titulo: "Caries Radicular",
        imagen: "./imagenes/cariesRadicular.jpg",
        causas: [
            "Caries interproximales sin tratamiento.",
            "Mala higiene oral (No usar la seda dental).",
            "Enfermedad periodontal."
        ],
        tratamiento: [
            "Si esta caries apenas está empezando se hace una remoción de la parte afectada y colocar un composite (resina).",
            "Si la caries alcanza la pulpa se hace una endodoncia.",
            "Si la caries está en el tercio inferior de la raíz y es muy avanzada, se hace exodoncia."
        ],
    },

    diagnostico_diferencial: "Realizar diagnostico diferencial de otras pegmentaciones en la corona",
    superficie_diente: "Reevaluar en otras superficies del diente.",

    caries_incipiente: {
        titulo: "Caries incipiente o superficial",
        imagen: "./imagenes/cariesIncipiente.jpg",
        causas: [
            "Acumulación de placa bacteriana (Mala higiene dental).",
            "Dieta cariogénica (Alta en azúcares, carbohidratos).",
            "Alta acidez y mala fluorización.",
            "Predisposición genética a padecer caries."
        ],
        tratamiento: [
            "Fluorización.",
            "Usar selladores dentales (sellantes).",
            "Usar enjuagues o cremas con fosfato de calcio para evitar su avance y remineralizar el diente."
        ]
    },
    caries_moderada: {
        titulo: "Caries Moderada",
        imagen: "./imagenes/cariesModerada.jpg",
        causas: [
            "Dieta cariogénica (Alta en azúcares, carbohidratos).",
            "Mala higiene oral.",
            "No usar hilo dental.",
            "Falta de fluor",
            "Desadaptación de restauraciones dentales."
        ],
        tratamiento: [
            "Remover la parte afectada del diente.",
            "obturar el diente con un material.",
            "Biocompatible (resina)."
        ]
    },
    caries_avanzada: {
        titulo: "Caries avanzada o profunda",
        imagen: "./imagenes/cariesAvanzada.jpg",
        causas: [
            "Mala higiene dental.",
            "No usar hilo o seda dental.",
            "Dejar progresar una caries moderada.",
            "Desmineralizazcion dental."
        ],
        tratamiento: [
            "Si la caries no ha llegado a la pulpa puede colocarse un empasto(resina) cuidando o protegiendo la pulpa con un ionómero de vidrio (Base) y luego el composite. Si la caries a avanzado hasta la pulpa Se debe hacer un tratamiento de conductos (Endodoncia) y si esta muy destruido el diente mas de sus 3/4 partes debe colocarse una corona, si el diente esta totalmente destruido y es imposible su reconstrución se procede hacer una endodoncia."
        ]
    },
    caries_rampante: {
        titulo: "Caries Rampante o de biberon",
        imagen: "./imagenes/cariesRampante.jpg",
        causas: [
            "Higiene bucal deficiente.",
            "Dieta con Alto Contenido de Carbohidratos.",
            "Hábitos de Alimentación nocturna(tetero)."
        ],
        tratamiento: [
            "Obturación con resina, cuando las caries afectan solamente la capa Superficial del diente.",
            "Pulpotomía: En caso de la lesión llegar hasta la pulpa del diente, retirar el tejido dañado, cerrar y obturar conductos y reconstruir el diente, en muchos casos colocar coronas de Acero.",
            "Extracción: Hay casos en que la pieza dental está tan dañada por la caries rampante que su permanencia en boca resulta inviable o no resulta posible."
            
        ]
    },
    alveolitis:{
        titulo: "Alveolitis",
        imagen: "./imagenes/alveolitis.jpg",
        causas: [
            "Lesión de alvéolo después de extracción dental.",
            "Infección bacteriana.",
            "Diabetes.",
            "Osteoporosis."
        ],
        tratamiento: [
            "Irrigar hueso alveolar para quitar los restos del tejido dañado.",
            "Hacer remoción de curetaje del alvéolo para reactivar la cascada de coagulación y cicatrización.",
            "Si hay infección, dar antibióticos."
        ]
    },
    gingivitis:{
        titulo: "Gingivitis",
        imagen: "./imagenes/gingivitis.jpeg",
        causas: [
            "Mala higiene oral.",
            "Depósitos de cálculos a nivel supra o subgingival.",
            "Enfermedades sistémicas.",
            "Uso de antibióticos."
        ],
        tratamiento: [
            "Buena higiene oral.",
            "Remoción del cálculo dental por un higienista dental."
        ]
    },
    periodontitis_avanzada:{
        titulo: "Periodontitis Avanzada",
        imagen: "./imagenes/periodontitis_avanzada.jpeg",
        causas: [
            "Mala higiene oral.",
            "Bolsas periodontales profundas.",
            "Enfermedades sistémicas."
        ],
        tratamiento: [
            "Buena higiene oral.",
            "Limpieza profunda (Raspado y alisado radicular).",
            "Antibióticos",
            "En casos graves, extracción dental (Pérdida de hueso irreparable)"
        ]
    },
    periodontitis_moderada:{
        titulo: "Periodontitis Moderada",
        imagen: "./imagenes/periodontitis_moderada.jpg",
        causas: [
            "Mala higiene oral.",
            "Osteoporosis.",
            "Enfermedades sistémicas."
        ],
        tratamiento: [
            "Buena higiene oral.",
            "Limpieza profunda (Raspado y alisado radicular).",
            "Antibióticos",
            "Aparatología ortodóntica para afianzar la posición del diente en el hueso alveolar y el sistema del sostén del diente en caso de movilidad dentaria"
        ]
    },
    pericoronitis:{
        titulo: "pericoronaritis",
        imagen: "./imagenes/pericoronaritis.jpg",
        causas: [
            "Mala higiene oral.",
            "Impactación de un tercer molar.",
            "Erupción parcial de un tercer molar.",
            "Engrosamiento de la encía que cubre parcialmente el diente"


        ],
        tratamiento: [
            "Enjuagues bucales.",
            "Cirugía de reducción del capuchón que recubre el diente.",
            "Antibióticos y antiinflamatorios.",
            "Por impactación del diente, extracción del diente parcialmente erupcionado."
        ]
    },
    concusion_dental:{
        titulo: "concusión Dental",
        imagen: "./imagenes/concusion_dental.jpg",
        causas: [
            "Traumatismo dental que afecta las estructuras o soportes del diente."
        ],
        tratamiento: [
            "En caso de existir contactos prematuros, practicar ajuste de oclusión por medio de tallado de restauración o levantamiento de mordida.",
            "Seguir una dieta blanda.",
            "Cepillarse los dientes con cepillo de cerda suave.",
            "Usar enjuague de clorhexidina al 0.12% 2 veces al día.",
            "Monitoreo continuo para mirar evolución."

        ]
    },
    hipercementosis:{
        titulo: "Hipercementosis",
        imagen: "./imagenes/hipercementosis.png",
        causas: [
            "Inflamación periapical.",
            "Reparación dental a un trauma.",
            "Enfermedad de Paget u osteomielitis deformante o causa desconocida (Idiopática)."
        ],
        tratamiento: [
            "Endodoncia o exodoncia dependiendo de la gravedad."
        ]
    },
    contactos_prematuros:{
        titulo: "Contactos Prematuros",
        imagen: "./imagenes/contactos_prematuros.jpg",
        causas: [
            "Mordidas desequilibradas.",
            "Maloclusiones dentarias.",
            "Prótesis mal ajustadas.",
            "Interferencias oclusales por obturaciones con supracontactos"

        ],
        tratamiento: [
            "Corregir los contactos prematuros buscando mejorar la coordinación y los movimientos musculares.",
            "Corregir con ortodoncia en adultos u ortopedia en niños maloclusiones patológicas como mordidas cruzadas o anomalías faciales."
        ]
    },
    absceso_periodontal:{
        titulo: "Absceso Periodontal",
        imagen: "./imagenes/abceso_peridontal.png",
        causas: [
            "Acumulación de bacterias en las bolsas periodontales.",
            "Impactación de cuerpos extraños en las bolsas periodontales."
        ],
        tratamiento: [
            "Drenaje del acceso (Corte pequeño para el drenaje del pus), ocasionalmente colocar un drenaje de goma para mantener el área de pus abierta.",
            "Antibioterapia, analgésicos y enjuagues bucales con agua tibia y sal para calmar el dolor."
        ]
    },
    intrusion_dental:{
        titulo: "Intrusión Dental",
        imagen: "./imagenes/intrusion_dental.png",
        causas: [
            "Desplazamiento del diente hacia la encía y el hueso por un traumatismo."
        ],
        tratamiento: [
            "Si la intrusión es leve o moderada, se puede esperar a que el diente erupcione por sí solo. Si no erupciona por sí solo, entonces se puede hacer un reposicionamiento ortodóncico o quirúrgico. Pero si la raíz del diente deciduo está afectando el permanente, debe ser extraído.",
            "Para dientes permanentes, reposicionamiento del diente intruido quirúrgicamente, colocar una férula flexible para traumatismos y terapia endodóntica."
        ]
    },
    dilaceración:{
        titulo: "Dilaceración",
        imagen: "./imagenes/dilaceracion.png",
        causas: [
            "Trauma sufrido durante la formación del diente."
        ],
        tratamiento: [
            "Endodoncia en caso de que la dilaceración sea producida por trauma.",
            "Si tiene luxación radicular, hay que realizar una osteotomía para retirar el resto radicular del sitio.",
            "Curetaje",
            "Lavado con solución salina",
            "Tratamiento físico antiinflamatorio",
            "Antibioterapia y analgésicos orales"
        ]
    },
    neuralgia:{
        titulo: "Neuralgia",
        imagen: "./imagenes/neuralgia.jpeg",
        causas: [
            "Lesiones o afecciones que dañan los nervios.",
            "Vasos sanguíneos que comprimen el nervio",
            "Algunas enfermedades preexistentes como esclerosis múltiple, tumores o enfermedades que causen inflamación",
            "Infección de un nervio",
            "Herpes Zoster"
        ],
        tratamiento: [
            "Tratamiento farmacológico (Carbamazepina).",
            "Intervención quirúrgica en caso de que el tratamiento farmacológico no haga efecto para interrumpir los impulsos nerviosos."
        ]
    },
    pulpitis_reversible:{
        titulo: "Pulpitis Reversible",
        imagen: "./imagenes/pulpitis_reversible.jpg",
        causas: [
            "Iatrogenia por mala praxis odontológica.",
            "Obturaciones desadaptadas sin caries que llevan a una inflamación reversible de la pulpa."
        ],
        tratamiento: [
            "Si esta caries apenas está empezando, se hace una remoción de la parte afectada y se coloca un composite (Resina).",
            "Si la caries alcanza la pulpa, se hace una endodoncia.",
            "Si la caries está en el tercio inferior de la raíz y es muy avanzada, se hace exodoncia."
        ]
    },
    reabsorción_radicular:{
        titulo: "Reabsorción Radicular",
        imagen: "./imagenes/reabsorcion_radicular.jpg",
        causas: [
            "Inflamación periapical.",
            "Quistes.",
            "Iatrogenia (Mala praxis en ortodoncia)",
            "Ideopática"
        ],
        tratamiento: [
            "Inflamación periapical: tratamiento endodóntico.",
            "Quistes: proceso quirúrgico.",
            "Iatrogenia: frenar fuerzas ortodónticas tomando radiografías de seguimiento durante el tratamiento."
        ]
    },
    anquilosis_dental:{
        titulo: "Anquilosis Dental",
        imagen: "./imagenes/anquilosis_dental.jpg",
        causas: [
            "Destrucción del ligamento periodontal por traumatismos dentales, factores genéticos o procesos infecciosos que hayan afectado el sistema de sostén del diente."
        ],
        tratamiento: [
            "En dientes deciduos hacer extracción para asegurar el desarrollo y la erupción del diente permanente.",
            "Colocar un mantenedor de espacio para asegurar el espacio del diente próximo a erupcionar.",
            "IEn dientes permanentes, puede hacer extracción del diente o movilizar el diente con técnicas quirúrgicas."
        ]
    },
    luxación_dental:{
        titulo: "Luxación Intrusiva",
        imagen: "./imagenes/luxacion_dental.jpg",
        causas: [
            "Traumatismo a causa de un golpe intenso."
        ],
        tratamiento: [
            "Reposición quirúrgica y movilización del diente con férula de nylon o alambre por 7 días.",
            "Control radiográfico y prueba de vitalidad pulpar.",
            "Dieta blanda.",
            "Si en los controles posteriores no hay vitalidad pulpar, se debe llegar a un tratamiento de endodoncia."
        ]
    },
    quiste_maxilares:{
        titulo: "Quiste de los maxilares avanzado",
        imagen: "./imagenes/quiste_maxilares.jpeg",
        causas: [
            "Origen dentario ya sea por la infección crónica de un diente.",
            "Quistes odontogénicos."
        ],
        tratamiento: [
            "Quiste por infección dentaria crónica, la endodoncia puede solucionar el problema, si no pudo extirparse, recurrir a la cirugía."
        ]
    },

};
// Pregunta final para reiniciar el diagnóstico
const reiniciar = {
    pregunta: "¿Desea realizar un nuevo diagnostico?",
    imagen: "./imagenes/Dentista.jpg"
}


// Función para mostrar la pregunta actual y generar botones de opciones dinámicamente
function mostrarPregunta(nodo) {
    
    const preguntaContainer = document.getElementById("pregunta-container");
    const opcionesContainer = document.getElementById("opciones-container");
    const resultadoContainer = document.getElementById("resultado-container");
    const imagenDiagnostico = document.getElementById("imagen-diagnostico");
    
// Se actualiza la pregunta actual en la interfaz
    preguntaContainer.innerHTML = `<h3>${nodo.pregunta}</h3>`;
    opcionesContainer.innerHTML = "";// Limpia opciones anteriores
    resultadoContainer.innerHTML = "";// Limpia resultados anteriores

    // Si el nodo es el inicio del diagnóstico, aseguramos que se muestre la imagen del dentista
    if (nodo === diagnostico && reiniciar.imagen) {
        imagenDiagnostico.src = reiniciar.imagen;
        imagenDiagnostico.alt = "Imagen de dentista";
    }

// Creación de botones de opciones
    nodo.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.textContent = opcion.texto;// Asigna el texto del botón
        boton.onclick = function () {
            if (nodo === diagnostico.reglas.superficie) {
                superficieSeleccionada = opcion.texto; // Guarda la superficie elegida
            }
            if (opcion.resultado) {
                mostrarResultado(opcion.resultado);// Muestra resultado final si es un diagnóstico
            } else {
                mostrarPregunta(diagnostico.reglas[opcion.siguiente]);// Avanza a la siguiente pregunta
            }
        };
        opcionesContainer.appendChild(boton);
    });
}

// Función para mostrar el resultado del diagnóstico
function mostrarResultado(resultadoClave) {
    const preguntaContainer = document.getElementById("pregunta-container");
    const opcionesContainer = document.getElementById("opciones-container");
    const resultadoContainer = document.getElementById("resultado-container");
    const imagenDiagnostico = document.getElementById("imagen-diagnostico");
    const titulodiagnostico = document.getElementById("titulo");
    const mensajeprevio = document.getElementById("mensaje-previo");

    const resultado = resultados[resultadoClave]; // Obtiene el resultado correspondiente

    // Limpia la pantalla de preguntas y opciones
    preguntaContainer.innerHTML = "";
    opcionesContainer.innerHTML = "";
    titulodiagnostico.innerHTML = "";

    // Si el resultado es solo un mensaje de texto
    if (typeof resultado === "string") {
        resultadoContainer.innerHTML = `
            <div class="resultado-container">
                <p>${resultado}</p>
            </div>
        `;
    } else {
        // Modifica el título si el diagnóstico está relacionado con caries en una superficie específica
        let tituloModificado = resultado.titulo;
        if (superficieSeleccionada && resultadoClave.includes("caries")) {
            tituloModificado += ` en superficie ${superficieSeleccionada}`;
        }

        resultadoContainer.innerHTML = `
            <div class="resultado-container">
                <h2>${tituloModificado}</h2>
                <p><strong>Causas:</strong></p>
                <ul>
                    ${resultado.causas.map(causa => `<li>${causa}</li>`).join("")}
                </ul>
                <p><strong>Tratamiento:</strong></p>
                <ul>
                    ${resultado.tratamiento.map(trat => `<li>${trat}</li>`).join("")}
                </ul>
            </div>
        `;

        // Cambiar la imagen según el resultado
        if (resultado.imagen) {
            imagenDiagnostico.src = resultado.imagen;
            imagenDiagnostico.alt = resultado.titulo;
        }
    }

    // Mostrar pregunta de reinicio después del diagnóstico
    setTimeout(() => {
        resultadoContainer.innerHTML += `
            <div class="reiniciar-container">
                <h3>${reiniciar.pregunta}</h3>
                <button onclick="mostrarPregunta(diagnostico)">Sí</button>
                <button onclick="mensajeGracias()">No</button>
            </div>
        `;
    }, 1000);
}
//<button onclick="window.open('index.html', '_blank')">Sí</button>
               

// Función que muestra un mensaje de despedida si el usuario no quiere reiniciar
function mensajeGracias() {
    const resultadoContainer = document.getElementById("resultado-container");
    const imagenDiagnostico = document.getElementById("imagen-diagnostico");
    const titulodiagnostico = document.getElementById("titulo");
    if (nodo = reiniciar.imagen) {
        imagenDiagnostico.src = reiniciar.imagen;
        imagenDiagnostico.alt = "Imagen de dentista";
    }
    titulodiagnostico.innerHTML = "";
    resultadoContainer.innerHTML = `<p>Gracias por utilizar la herramienta de diagnóstico.</p>`;
}
// Inicia el diagnóstico cuando la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    mostrarPregunta(diagnostico);
    
});

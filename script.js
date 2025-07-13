// Malla completa con relaciones de prerrequisitos, correquisitos y desbloqueo interactivo
// Guarda el estado de aprobados en localStorage

const cursos = {
  // Semestre 0
  "examen-diagnostico": { nombre: "Examen Diagnóstico", prereqs: [], semestre: "Semestre 0" },
  "ingles-basico": { nombre: "Inglés básico", prereqs: [], semestre: "Semestre 0" },

  // Semestre 1
  "bio-general": { nombre: "Biología general para entornos laborales", prereqs: [], semestre: "Semestre 1" },
  "comunicacion-escrita": { nombre: "Comunicación escrita", prereqs: [], semestre: "Semestre 1" },
  "intro-tecnica": { nombre: "Introducción a la técnica ciencia y tecnología", prereqs: [], semestre: "Semestre 1" },
  "matematica-general": { nombre: "Matemática general", prereqs: [], semestre: "Semestre 1" },
  "lab-quimica-1": { nombre: "Laboratorio de química básica I", prereqs: [], semestre: "Semestre 1" },
  "quimica-1": { nombre: "Química básica I", prereqs: [], semestre: "Semestre 1" },
  "actividad-cultural-1": { nombre: "Actividad cultural I", prereqs: [], semestre: "Semestre 1" },
  "actividad-deportiva-1": { nombre: "Actividad deportiva I", prereqs: [], semestre: "Semestre 1" },
  "dib-planos": { nombre: "Dibujo e interpretación de planos", prereqs: [], semestre: "Semestre 1" },
  "intro-seguridad": { nombre: "Introducción a la seguridad laboral", prereqs: [], semestre: "Semestre 1" },

  // Semestre 2
  "comunicacion-oral": { nombre: "Comunicación oral", prereqs: ["comunicacion-escrita"], semestre: "Semestre 2" },
  "ingles-1": { nombre: "Inglés I", prereqs: ["ingles-basico"], semestre: "Semestre 2" },
  "humanistica": { nombre: "Centros de formación humanística", prereqs: [], semestre: "Semestre 2" },
  "fisica-1": { nombre: "Física general I", prereqs: ["matematica-general"], semestre: "Semestre 2" },
  "lab-fisica-1": { nombre: "Laboratorio de física general I", prereqs: [], semestre: "Semestre 2" },
  "calculo": { nombre: "Cálculo diferencial e integral", prereqs: ["matematica-general"], semestre: "Semestre 2" },
  "maquinas": { nombre: "Máquinas y equipos", prereqs: ["dib-planos", "intro-seguridad"], semestre: "Semestre 2" },
  "lab-quimica-2": { nombre: "Laboratorio de química básica II", prereqs: ["lab-quimica-1", "quimica-1"], semestre: "Semestre 2" },
  "quimica-2": { nombre: "Química básica II", prereqs: ["lab-quimica-1", "quimica-1"], semestre: "Semestre 2" },
  "actividad-cultural-deportiva": { nombre: "Actividad cultural-deportiva", prereqs: ["actividad-cultural-1", "actividad-deportiva-1"], semestre: "Semestre 2" },

  // Semestre 3
  "ingles-2": { nombre: "Inglés II", prereqs: ["ingles-1"], semestre: "Semestre 3" },
  "ambiente-humano": { nombre: "Ambiente Humano", prereqs: ["comunicacion-escrita"], semestre: "Semestre 3" },
  "calculo-algebra": { nombre: "Cálculo y álgebra lineal", prereqs: ["calculo"], semestre: "Semestre 3" },
  "analisis-estadistico": { nombre: "Análisis estadístico", prereqs: ["calculo"], semestre: "Semestre 3" },
  "lab-quimica-organica": { nombre: "Laboratorio fundamentos química orgánica", prereqs: ["lab-quimica-2", "quimica-2"], semestre: "Semestre 3" },
  "quimica-organica": { nombre: "Fundamentos de química orgánica", prereqs: ["lab-quimica-2", "quimica-2"], semestre: "Semestre 3" },
  "seguridad-maquinaria": { nombre: "Seguridad en instalaciones y maquinaria", prereqs: ["maquinas"], semestre: "Semestre 3" },

  // Semestre 4
  "fisica-3": { nombre: "Física general III", prereqs: ["fisica-1", "seguridad-procesos"], semestre: "Semestre 4" },
  "ecuaciones": { nombre: "Ecuaciones diferenciales", prereqs: ["calculo-algebra"], semestre: "Semestre 4" },
  "procesos-manufactura": { nombre: "Procesos de manufactura", prereqs: ["seguridad-maquinaria"], semestre: "Semestre 4" },
  "bioestadistica": { nombre: "Bioestadística", prereqs: ["analisis-estadistico"], semestre: "Semestre 4" },
  "anatomia": { nombre: "Anatomía y fisiología médica", prereqs: ["bioestadistica"], semestre: "Semestre 4" },
  "legislacion": { nombre: "Legislación ocupacional y ambiental", prereqs: ["ambiente-humano"], semestre: "Semestre 4" },

  // Semestre 5
  "contabilidad": { nombre: "Contabilidad financiera", prereqs: ["ecuaciones"], semestre: "Semestre 5" },
  "toxicologia": { nombre: "Fundamentos de medicina y toxicología laboral", prereqs: ["anatomia"], semestre: "Semestre 5" },
  "epidemiologia": { nombre: "Epidemiología en salud ocupacional", prereqs: ["toxicologia"], semestre: "Semestre 5" },
  "agentes-biologicos": { nombre: "Agentes ambientales biológicos", prereqs: ["bio-general"], semestre: "Semestre 5" },
  "seguridad-procesos": { nombre: "Seguridad en procesos industriales", prereqs: ["procesos-manufactura"], semestre: "Semestre 5" },
  "agentes-quimicos": { nombre: "Agentes ambientales químicos", prereqs: ["quimica-organica", "agentes-biologicos"], semestre: "Semestre 5" },

  // Semestre 6
  "ingenieria-financiera": { nombre: "Ingeniería financiera", prereqs: ["contabilidad", "metodologia-investigacion"], semestre: "Semestre 6" },
  "metodos-numericos": { nombre: "Métodos numéricos", prereqs: ["calculo-algebra"], semestre: "Semestre 6" },
  "metodologia-investigacion": { nombre: "Metodología de la investigación", prereqs: ["ingles-2"], semestre: "Semestre 6" },
  "control-ruido": { nombre: "Evaluación y control de ruidos y vibraciones", prereqs: ["toxicologia"], semestre: "Semestre 6" },
  "factores-psicosociales": { nombre: "Factores psicosociales", prereqs: ["epidemiologia"], semestre: "Semestre 6" },
  "taller-agentes-quimicos": { nombre: "Taller de agentes ambientales químicos", prereqs: ["agentes-quimicos"], semestre: "Semestre 6" },

  // Semestre 7
  "incendios": { nombre: "Seguridad contra incendios", prereqs: ["fisica-3", "seguridad-procesos"], semestre: "Semestre 7" },
  "ambiente-termico": { nombre: "Evaluación y control de exposición al ambiente térmico", prereqs: ["control-ruido"], semestre: "Semestre 7" },
  "control-psicosociales": { nombre: "Control de los factores psicosociales", prereqs: ["factores-psicosociales"], semestre: "Semestre 7" },
  "control-agentes-quimicos": { nombre: "Control de agentes ambientales químicos", prereqs: ["taller-agentes-quimicos"], semestre: "Semestre 7" },
  "ergonomia-1": { nombre: "Principios de ergonomía ocupacional", prereqs: ["control-psicosociales"], semestre: "Semestre 7" },

  // Semestre 8
  "proteccion-ambiente": { nombre: "Protección del ambiente", prereqs: [], semestre: "Semestre 8" },
  "seguridad-electrica": { nombre: "Seguridad eléctrica", prereqs: ["incendios", "radiaciones-iluminacion", "ergonomia"], semestre: "Semestre 8" },
  "adaptacion-climatica": { nombre: "Seminario de adaptación al cambio climático", prereqs: ["proteccion-ambiente", "admin-proyectos"], semestre: "Semestre 8" },
  "admin-proyectos": { nombre: "Administración de proyectos", prereqs: ["ingenieria-financiera"], semestre: "Semestre 8" },
  "radiaciones-iluminacion": { nombre: "Evaluación y control de radiaciones e iluminación", prereqs: ["ambiente-termico", "ergonomia"], semestre: "Semestre 8" },
  "ergonomia": { nombre: "Factores humanos y ergonomía ocupacional", prereqs: ["radiaciones-iluminacion"], semestre: "Semestre 8" },

  // Semestre 9
  "etica": { nombre: "Seminario de ética para la ingeniería", prereqs: ["legislacion"], semestre: "Semestre 9" },
  "gerencia-riesgos": { nombre: "Gerencia de riesgos", prereqs: ["gerencia-estrategica"], semestre: "Semestre 9" },
  "gerencia-estrategica": { nombre: "Gerencia estratégica", prereqs: ["admin-proyectos"], semestre: "Semestre 9" },
  "gestion-ambiental": { nombre: "Gestión ambiental", prereqs: ["proteccion-ambiente"], semestre: "Semestre 9" },
  "gestion-desastres": { nombre: "Gestión integral de desastres", prereqs: ["gestion-ambiental", "taller-diseno"], semestre: "Semestre 9" },
  "taller-diseno": { nombre: "Taller de diseño", prereqs: ["seguridad-electrica"], semestre: "Semestre 9" },

  // Semestre 10
  "estudios-costarricenses": { nombre: "Seminario de estudios costarricenses", prereqs: ["etica"], semestre: "Semestre 10" },
  "trabajo-final": { nombre: "Trabajo final de graduación", prereqs: ["gestion-desastres", "taller-diseno"], semestre: "Semestre 10" },
  "electiva": { nombre: "Electiva", prereqs: ["radiaciones-iluminacion", "ergonomia"], semestre: "Semestre 10" }
};

const estado = JSON.parse(localStorage.getItem("mallaEstado")) || {};

function guardarEstado() {
  localStorage.setItem("mallaEstado", JSON.stringify(estado));
}

function crearMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  const semestres = {};
  for (const [id, curso] of Object.entries(cursos)) {
    if (!semestres[curso.semestre]) semestres[curso.semestre] = [];
    semestres[curso.semestre].push({ ...curso, id });
  }

  for (const [semestre, lista] of Object.entries(semestres)) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    for (const curso of lista) {
      const div = document.createElement("div");
      div.className = "curso";
      div.dataset.id = curso.id;

      const nombre = document.createElement("div");
      nombre.className = "nombre";
      nombre.textContent = curso.nombre;

      div.appendChild(nombre);

      const mismoGrupo = lista.filter(c =>
        JSON.stringify(c.prereqs || []) === JSON.stringify(curso.prereqs || [])
      );

      let desbloqueado = (curso.prereqs || []).every(id => estado[id]) || mismoGrupo.some(c => estado[c.id]);

      if (estado[curso.id]) div.classList.add("aprobado");
      else if (desbloqueado) div.classList.add("desbloqueado");
      else div.classList.add("bloqueado");

      div.addEventListener("click", () => {
        if (div.classList.contains("desbloqueado") || div.classList.contains("aprobado")) {
          estado[curso.id] = !estado[curso.id];
          guardarEstado();
          crearMalla();
        }
      });

      columna.appendChild(div);
    }

    contenedor.appendChild(columna);
  }
}

crearMalla();

//crear las carpetas en C:\  data y dentro db y logs

// docker exec - it mongo_db mongo

// rs.initiate()

// rs.conf()

// rs.reconfig({
//      _id: "rs0",
//      members: [
//           { _id: 0, host: "mongo:27017" }
//      ]
// }, { force: true });

// rs.status()



// db.Categories.insertMany([
//      {
//           _id: ObjectId("66f07fb8a6892806b3ce5934"),
//           id_cat: "234567",
//           category_name: "Agriculture and Livestock Sector",
//           image: "../../../../assets/categories_images/ganaderia.jpg",
//           jobs: [
//                ObjectId("66f095b6c5b06cbfe03a3545"),
//                ObjectId("66f095c3c5b06cbfe03a354b"),
//                ObjectId("66f095cbc5b06cbfe03a3551")
//           ],
//           slug: "agriculture-and-livestock-sector-v6xho4",
//           __v: 3
//      },
//      {
//           _id: ObjectId("66f0860b7faf5940eea168a2"),
//           id_cat: "890123",
//           category_name: "Education Sector",
//           image: "../../../../assets/categories_images/educacion.jpg",
//           jobs: [
//                ObjectId("66f0abc2cd8643552959ec70"),
//                ObjectId("66f27b604210cbbe536f9c0b")
//           ],
//           slug: "education-sector-fw3jpb",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f268974210cbbe536f9b4c"),
//           id_cat: "345680",
//           category_name: "Transport and Logistics Sector",
//           image: "../../../../assets/categories_images/transporte_logistica.webp",
//           jobs: [
//                ObjectId("66f270f44210cbbe536f9b70"),
//                ObjectId("66f271714210cbbe536f9b7e")
//           ],
//           slug: "transport-and-logistics-sector-rtweb2",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f088eb7faf5940eea168b5"),
//           id_cat: "789013",
//           category_name: "Health Sector",
//           image: "../../../../assets/categories_images/salud.jpg",
//           jobs: [
//                ObjectId("66f0a9b7cd8643552959ec61"),
//                ObjectId("66f27bd24210cbbe536f9c11")
//           ],
//           slug: "health-sector-5iz5uc",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f268a04210cbbe536f9b50"),
//           id_cat: "567891",
//           category_name: "Fishing and Aquaculture Sector",
//           image: "../../../../assets/categories_images/fishing.jpg",
//           jobs: [
//                ObjectId("66f273084210cbbe536f9b8c"),
//                ObjectId("66f273554210cbbe536f9b92")
//           ],
//           slug: "fishing-and-aquaculture-sector-s4i3a3",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f2696a4210cbbe536f9b55"),
//           id_cat: "123458",
//           category_name: "Web Development Sector",
//           image: "../../../../assets/categories_images/web_development.jpeg",
//           jobs: [
//                ObjectId("66f275444210cbbe536f9bb3"),
//                ObjectId("66f2754a4210cbbe536f9bb9"),
//                ObjectId("6717da4e1a20b7509bf76404"),
//                ObjectId("671a1c4f3966ac3eb4b09dd2")
//           ],
//           slug: "web-development-sector-x6orw0",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f26b9f4210cbbe536f9b5b"),
//           id_cat: "456780",
//           category_name: "Metal Sector",
//           image: "../../../../assets/categories_images/metal.jpg",
//           jobs: [
//                ObjectId("66f276c74210cbbe536f9bc2"),
//                ObjectId("66f276ce4210cbbe536f9bc8")
//           ],
//           slug: "metal-sector-zdmaur",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f26cb84210cbbe536f9b60"),
//           id_cat: "456791",
//           category_name: "Hospitality and Tourism Sector",
//           image: "../../../../assets/categories_images/tourism.jpg",
//           jobs: [
//                ObjectId("66f277dd4210cbbe536f9bd5"),
//                ObjectId("66f277e74210cbbe536f9bdb")
//           ],
//           slug: "hospitality-and-tourism-sector-i7qb7p",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f26d9d4210cbbe536f9b65"),
//           id_cat: "234569",
//           category_name: "Textile and Leather Sector",
//           image: "../../../../assets/categories_images/textile.jpg",
//           jobs: [
//                ObjectId("66f2791f4210cbbe536f9be4"),
//                ObjectId("66f279264210cbbe536f9bea")
//           ],
//           slug: "textile-and-leather-sector-q1wzc",
//           __v: 2
//      },
//      {
//           _id: ObjectId("66f26ed64210cbbe536f9b6a"),
//           id_cat: "678902",
//           category_name: "Chemical Industry Sector",
//           image: "../../../../assets/categories_images/chemical.jpg",
//           jobs: [
//                ObjectId("66f279ea4210cbbe536f9bf4"),
//                ObjectId("66f279f14210cbbe536f9bfa")
//           ],
//           slug: "chemical-industry-sector-nmadin",
//           __v: 2
//      }
// ]);




// db.Jobs.insertMany([
//      {
//           _id: ObjectId("66f095b6c5b06cbfe03a3545"),
//           name: "Ganadero de Vacas Lecheras",
//           salary: 2500,
//           description: "Buscamos un ganadero experimentado para el manejo de vacas lecheras en una granja moderna. El candidato ideal debe tener experiencia en el cuidado y alimentación de vacas, así como en la gestión de la producción de leche. Se valorará conocimiento en técnicas de inseminación artificial y manejo de maquinaria agrícola.",
//           company: "Almacenes Antonio Guerrero",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/antonio_guerrero/antonio_guerrero.png",
//           id_cat: "234567",
//           slug: "ganadero-de-vacas-lecheras--4bqgm7",
//           __v: 46,
//           comments: [
//                ObjectId("670bb558f5f78e164b099d18"),
//                ObjectId("670badd3068d8f4d8f94c4f6"),
//                ObjectId("670af0be5c624265f1530e31")
//           ],
//           favoritesCount: 2,
//           application: [],
//           isActive: false
//      },
//      {
//           _id: ObjectId("66f095c3c5b06cbfe03a354b"),
//           name: "Agricultor de Cultivos Orgánicos",
//           salary: 2200,
//           description: "Se necesita agricultor con experiencia en el cultivo de productos orgánicos. El trabajo incluye la preparación del suelo, siembra, riego y cosecha de diversos cultivos. Se valorará conocimiento en técnicas de agricultura sostenible y manejo de plagas de manera ecológica. El candidato debe ser capaz de trabajar en equipo y tener una fuerte ética de trabajo.",
//           company: "Farm Fresh",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/farm_fresh/farm_fresh.jpg",
//           id_cat: "234567",
//           slug: "agricultor-de-cultivos-organicos--ukv2fi",
//           __v: 2,
//           comments: [
//                ObjectId("670b00c15c624265f153100c")
//           ],
//           favoritesCount: 2,
//           application: [],
//           isActive: false
//      },
//      {
//           _id: ObjectId("66f095cbc5b06cbfe03a3551"),
//           name: "Encargado de Granja Porcina",
//           salary: 2400,
//           description: "Estamos en busca de un encargado de granja porcina con experiencia en el manejo y cuidado de cerdos. Las responsabilidades incluyen la alimentación, limpieza de corrales, supervisión de la salud de los animales y gestión de la reproducción. Se valorará experiencia en la administración de granjas y conocimientos en bioseguridad.",
//           company: "Cuatro Vientos",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/cuatro_vientos/cuatro_vientos.webp",
//           id_cat: "234567",
//           slug: "encargado-de-granja-porcina-qum5ai",
//           __v: 1,
//           comments: [],
//           favoritesCount: 3,
//           application: [],
//           isActive: false
//      },
//      {
//           _id: ObjectId("66f0a9b7cd8643552959ec61"),
//           name: "Médico General en Hospital",
//           salary: 3500,
//           description: "Estamos buscando un médico general experimentado para unirse a nuestro equipo en un hospital de alta complejidad. El candidato ideal debe tener experiencia en el diagnóstico y tratamiento de una amplia variedad de enfermedades y condiciones médicas. Se valorará experiencia en emergencias médicas y capacidad para trabajar en equipo multidisciplinario. Es esencial tener habilidades de comunicación efectiva y empatía hacia los pacientes.",
//           company: "La Fe",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/la_fe/la_fe.webp",
//           id_cat: "789013",
//           slug: "medico-general-en-hospital--ngk819",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f0abc2cd8643552959ec70"),
//           name: "Profesor de Matemáticas en Instituto Privado",
//           salary: 2800,
//           description: "Estamos buscando un profesor de matemáticas altamente cualificado para unirse a nuestro equipo en un instituto privado de prestigio. El candidato ideal debe tener experiencia en la enseñanza de matemáticas a nivel de secundaria y bachillerato. Se valorará conocimiento en el uso de tecnologías educativas y metodologías innovadoras de enseñanza. Es esencial tener habilidades de comunicación efectiva y capacidad para motivar a los estudiantes.",
//           company: "Instituto Privado San Marcos",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/matilde_salvador/matilde_salvador.jpeg",
//           id_cat: "890123",
//           slug: "profesor-de-matematicas-en-instituto-privado-hym2dg",
//           __v: 1,
//           comments: [
//                ObjectId("670c4a1e709e8a83335a250d")
//           ],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f270f44210cbbe536f9b70"),
//           name: "Coordinador de Logística",
//           salary: 3000,
//           description: "Estamos buscando un coordinador de logística para gestionar y optimizar el flujo de mercancías en nuestra empresa. El candidato ideal debe tener experiencia en logística y habilidades de liderazgo.",
//           company: "Logístic Express",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/logistic_express/logistic_express.jpg",
//           id_cat: "345680",
//           slug: "coordinador-de-logistica-547bfe",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      }
// ]);


// db.Jobs.insertMany([
//      {
//           _id: ObjectId("66f271714210cbbe536f9b7e"),
//           name: "Conductor de Camión",
//           salary: 2500,
//           description: "Se busca conductor de camión con experiencia para transporte de mercancías a nivel nacional. Se requiere licencia de conducir tipo C y conocimientos básicos de mantenimiento de vehículos.",
//           company: "Transportes Nacionales S.A.",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/transportes_nacionales/transportes_nacionales.jpg",
//           id_cat: "345680",
//           slug: "conductor-de-camion-36zy7v",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f273084210cbbe536f9b8c"),
//           name: "Pescador de Altura",
//           salary: 2200,
//           description: "Se necesita pescador de altura con experiencia para faenas en alta mar. Se valorará conocimiento en técnicas de pesca sostenible y capacidad para trabajar en equipo.",
//           company: "On The Rocks S.A.",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/on_the_rocks/on_the_rocks.jpg",
//           id_cat: "567891",
//           slug: "pescador-de-altura--fxm2ak",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f273554210cbbe536f9b92"),
//           name: "Técnico en Acuicultura",
//           salary: 2700,
//           description: "Buscamos técnico en acuicultura para gestionar y supervisar la producción en nuestras instalaciones. Se requiere experiencia en el sector y conocimientos en biología marina.",
//           company: "Acuicultura Marina S.A.",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/acuicultura_marina/acuicultura_marina.jpg",
//           id_cat: "567891",
//           slug: "tecnico-en-acuicultura-t5gdqd",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f275444210cbbe536f9bb3"),
//           name: "Desarrollador Frontend",
//           salary: 3200,
//           description: "Estamos buscando un desarrollador frontend con experiencia en HTML, CSS y JavaScript para unirse a nuestro equipo. Se valorará conocimiento en frameworks como React o Angular.",
//           company: "Innovative Web",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/innovative_web/innovative_web.jpg",
//           id_cat: "123458",
//           slug: "desarrollador-frontend--vuw8mw",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f2754a4210cbbe536f9bb9"),
//           name: "Desarrollador Backend",
//           salary: 3500,
//           description: "Buscamos un desarrollador backend con experiencia en Node.js y bases de datos SQL para trabajar en proyectos innovadores. Se requiere capacidad para trabajar en equipo y resolver problemas complejos.",
//           company: "Tech Solutions",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/tech_solutions/tech_solutions.jpg",
//           id_cat: "123458",
//           slug: "desarrollador-backend--a0t33e",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f276c74210cbbe536f9bc2"),
//           name: "Soldador",
//           salary: 2800,
//           description: "Se necesita soldador con experiencia en soldadura MIG/TIG para trabajar en proyectos de construcción metálica. Se valorará certificación en soldadura y capacidad para interpretar planos.",
//           company: "Metalúrgica S.A.",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/metalurgica/metalurgica.jpg",
//           id_cat: "456780",
//           slug: "soldador-seobo7",
//           __v: 0,
//           comments: [],
//           favoritesCount: 2
//      }
// ]);

// db.Jobs.insertMany([
//      {
//           _id: ObjectId("66f276ce4210cbbe536f9bc8"),
//           name: "Operario de Fundición",
//           salary: 2600,
//           description: "Buscamos operario de fundición con experiencia en manejo de hornos y moldes para producción de piezas metálicas. Se requiere conocimiento en seguridad industrial y procesos de fundición.",
//           company: "Fundiciones del Norte",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/fundiciones_norte/fundiciones_norte.jpg",
//           id_cat: "456780",
//           slug: "operario-de-fundicion--4ldm58",
//           __v: 1,
//           comments: ["670c4c53ae9fff066236ba56"],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f277dd4210cbbe536f9bd5"),
//           name: "Recepcionista de Hotel",
//           salary: 2400,
//           description: "Se busca recepcionista de hotel con experiencia en atención al cliente y manejo de reservas. Se valorará conocimiento en idiomas y habilidades de comunicación.",
//           company: "Hotel Paraíso",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/hotel_paraiso/hotel_paraiso.jpg",
//           id_cat: "456791",
//           slug: "recepcionista-de-hotel--9es9qe",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f277e74210cbbe536f9bdb"),
//           name: "Guía Turístico",
//           salary: 2300,
//           description: "Buscamos guía turístico con conocimiento en historia y cultura local para realizar tours guiados. Se requiere habilidades de comunicación y capacidad para trabajar con grupos.",
//           company: "Tours y Aventuras",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/tours_aventuras/tours_aventuras.jpg",
//           id_cat: "456791",
//           slug: "guia-turistico-j33gsm",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f2791f4210cbbe536f9be4"),
//           name: "Diseñador de Moda",
//           salary: 2900,
//           description: "Estamos buscando un diseñador de moda creativo y con experiencia para unirse a nuestro equipo. Se valorará conocimiento en tendencias de moda y habilidades en diseño gráfico.",
//           company: "Moda y Estilo",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/moda_estilo/moda_estilo.jpg",
//           id_cat: "234569",
//           slug: "disenador-de-moda--o02yvv",
//           __v: 1,
//           comments: ["670c4c44ae9fff066236ba34"],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("66f279264210cbbe536f9bea"),
//           name: "Operario de Confección",
//           salary: 2200,
//           description: "Se necesita operario de confección con experiencia en manejo de máquinas de coser industriales para producción de prendas de vestir. Se valorará precisión y atención al detalle.",
//           company: "Confecciones S.A.",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/confecciones/confecciones.jpg",
//           id_cat: "234569",
//           slug: "operario-de-confeccion-4qkjfd",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f279ea4210cbbe536f9bf4"),
//           name: "Químico Analista",
//           salary: 3100,
//           description: "Buscamos químico analista con experiencia en laboratorio para realizar análisis y pruebas de calidad en productos químicos. Se requiere conocimiento en técnicas de análisis instrumental.",
//           company: "Químicos del Sur",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/quimicos_sur/quimicos_sur.jpg",
//           id_cat: "678902",
//           slug: "quimico-analista--tzcmec",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      }
// ]);

// db.Jobs.insertMany([
//      {
//           _id: ObjectId("66f279f14210cbbe536f9bfa"),
//           name: "Ingeniero Químico",
//           salary: 3800,
//           description: "Estamos buscando un ingeniero químico con experiencia en procesos industriales para optimizar la producción en nuestra planta. Se valorará conocimiento en seguridad industrial y gestión de proyectos.",
//           company: "Industrias Químicas",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/industrias_quimicas/industrias_quimicas.jpg",
//           id_cat: "678902",
//           slug: "ingeniero-quimico--yey1nq",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f27b604210cbbe536f9c0b"),
//           name: "Profesor de Inglés en Colegio Público",
//           salary: 2600,
//           description: "Se busca profesor de inglés con experiencia para impartir clases en un colegio público. El candidato ideal debe tener habilidades de comunicación efectiva y capacidad para motivar a los estudiantes. Se valorará conocimiento en metodologías innovadoras de enseñanza y uso de tecnologías educativas.",
//           company: "Colegio Público Cervantes",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/english_school/english_school.png",
//           id_cat: "890123",
//           slug: "profesor-de-ingles-en-colegio-publico--khbwyt",
//           __v: 0,
//           comments: [],
//           favoritesCount: 1
//      },
//      {
//           _id: ObjectId("66f27bd24210cbbe536f9c11"),
//           name: "Enfermero en Clínica Privada",
//           salary: 3000,
//           description: "Estamos buscando un enfermero con experiencia para unirse a nuestro equipo en una clínica privada. El candidato ideal debe tener habilidades de comunicación efectiva y empatía hacia los pacientes. Se valorará experiencia en cuidados intensivos y capacidad para trabajar en equipo multidisciplinario.",
//           company: "Clínica Santa María",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "../../../../assets/jobs_images/clinica_santa_maria/clinica_santa_maria.jpg",
//           id_cat: "789013",
//           slug: "enfermero-en-clinica-privada-1g51kh",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("6717da4e1a20b7509bf76404"),
//           name: "Software Engineer",
//           salary: 6000,
//           description: "Responsible for developing and maintaining software applications.",
//           company: "Tech Corp",
//           images: [
//                "https://picsum.photos/500/300?random=1",
//                "https://picsum.photos/500/300?random=2",
//                "https://picsum.photos/500/300?random=3",
//                "https://picsum.photos/500/300?random=4",
//                "https://picsum.photos/500/300?random=5"
//           ],
//           img: "https://picsum.photos/500/300?random=1",
//           id_cat: "123458",
//           slug: "software-engineer-dtgbh5v55",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0
//      },
//      {
//           _id: ObjectId("671a1c4f3966ac3eb4b09dd2"),
//           name: "Software Engineer",
//           salary: 70000,
//           description: "Develop and maintain software applications.",
//           company: "Tech Solutions Inc.",
//           images: [
//                "image1.jpg",
//                "image2.jpg"
//           ],
//           img: "thumbnail.jpg",
//           id_cat: "123458",
//           slug: "software-engineer-lc2zgaotp",
//           __v: 0,
//           comments: [],
//           favoritesCount: 0,
//           isActive: true
//      }
// ]);

// db.Comments.insertMany([
//      {
//           _id: ObjectId("670af0be5c624265f1530e31"),
//           body: "Hola, muy majos los de esta empresa! :D",
//           author: ObjectId("670ad7ccf2a43ca640430ad0"),
//           job: ObjectId("66f095b6c5b06cbfe03a3545"),
//           createdAt: ISODate("2024-10-12T21:57:18.767Z"),
//           updatedAt: ISODate("2024-10-12T21:57:18.767Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670b00c15c624265f153100c"),
//           body: "Holaaaaaaaaaaaaaaaaaaa\n",
//           author: ObjectId("670a472cdf4b2e0f4a3d87ec"),
//           job: ObjectId("66f095c3c5b06cbfe03a354b"),
//           createdAt: ISODate("2024-10-12T23:05:37.890Z"),
//           updatedAt: ISODate("2024-10-12T23:05:37.890Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670badd3068d8f4d8f94c4f6"),
//           body: "kasjdhaskddasjdka",
//           author: ObjectId("670a472cdf4b2e0f4a3d87ec"),
//           job: ObjectId("66f095b6c5b06cbfe03a3545"),
//           createdAt: ISODate("2024-10-13T11:24:03.974Z"),
//           updatedAt: ISODate("2024-10-13T11:24:03.974Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670bb558f5f78e164b099d18"),
//           body: "akdjhaskjsdhaskkadhas",
//           author: ObjectId("670bb538f5f78e164b099cfc"),
//           job: ObjectId("66f095b6c5b06cbfe03a3545"),
//           createdAt: ISODate("2024-10-13T11:56:08.126Z"),
//           updatedAt: ISODate("2024-10-13T11:56:08.126Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670c4a1e709e8a83335a250d"),
//           body: "asdasddasdsadasas",
//           author: ObjectId("670ad7ccf2a43ca640430ad0"),
//           job: ObjectId("66f0abc2cd8643552959ec70"),
//           createdAt: ISODate("2024-10-13T22:30:54.470Z"),
//           updatedAt: ISODate("2024-10-13T22:30:54.470Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670c4c44ae9fff066236ba34"),
//           body: "adasdasadsadsadasdsa",
//           author: ObjectId("670ad7ccf2a43ca640430ad0"),
//           job: ObjectId("66f2791f4210cbbe536f9be4"),
//           createdAt: ISODate("2024-10-13T22:40:04.866Z"),
//           updatedAt: ISODate("2024-10-13T22:40:04.866Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("670c4c53ae9fff066236ba56"),
//           body: "asdsadasasdsaasdas",
//           author: ObjectId("670a472cdf4b2e0f4a3d87ec"),
//           job: ObjectId("66f276ce4210cbbe536f9bc8"),
//           createdAt: ISODate("2024-10-13T22:40:19.522Z"),
//           updatedAt: ISODate("2024-10-13T22:40:19.522Z"),
//           __v: 0
//      },
//      {
//           _id: ObjectId("6717d94392216eaadd7c1e68"),
//           body: "No veo na!\n",
//           author: ObjectId("670ad7ccf2a43ca640430ad0"),
//           job: ObjectId("6717d8e31a20b7509bf76403"),
//           __v: 0
//      }
// ]);



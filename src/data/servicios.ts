export interface Servicio {
  id: string;
  num: string;
  name: string;
  tagline: string;
  subtitle: string;
  image: string;
  heroImage: string;
  description: string;
  longDescription: string;
  gallery: string[];
  includes: string[];
  quote: string;
}

const BASE = '/images';

export const servicios: Servicio[] = [
  {
    id: 'bodas',
    num: '01',
    name: 'Bodas',
    tagline: 'El día más especial, inmortalizado para siempre.',
    subtitle: 'Fotografía de bodas',
    image: `${BASE}/boda1.webp`,
    heroImage: `${BASE}/boda1.webp`,
    description: 'Bienvenidxs a un mundo donde cada instante está rodeado de pasión y cada foto está impregnada de calor y romanticismo.',
    longDescription: 'Estoy aquí para ofreceros un acompañamiento personalizado donde vuestra historia de amor esté en el centro de mi enfoque artístico. Imaginaos fotos que respiren la espontaneidad, la absoluta felicidad y la emoción pura. Estaré ahí para captar esos instantes mágicos donde las risas surgen, las lágrimas brotan y el amor se siente. Mi objetivo es ofreceros un recuerdo atemporal donde cada foto os transporte a ese mágico momento donde os prometisteis el uno al otro para siempre, con la ternura de vuestros gestos, la dulzura de vuestras miradas y la intensidad de vuestras emociones.',
    gallery: [
      `${BASE}/boda1.webp`,
      `${BASE}/boda2-scaled.webp`,
      `${BASE}/boda3-scaled.webp`,
      `${BASE}/boda4-scaled.webp`,
      `${BASE}/boda5.webp`,
      `${BASE}/boda6.webp`,
      `${BASE}/boda7-scaled.webp`,
      `${BASE}/boda8.webp`,
      `${BASE}/boda9.webp`,
      `${BASE}/boda11.webp`,
      `${BASE}/boda12-scaled.webp`,
      `${BASE}/boda13-1-scaled.webp`,
      `${BASE}/boda14-scaled.webp`,
    ],
    includes: [
      'Sesión pre-boda (engagement)',
      'Cobertura completa del día',
      'Edición profesional de todas las fotos',
      'Álbum digital de alta resolución',
      'Galería privada online',
      'Posibilidad de álbum impreso',
    ],
    quote: '"Cada boda es una historia de amor única que merece ser contada con honestidad y belleza."',
  },
  {
    id: 'fallas',
    num: '02',
    name: 'Fallas',
    tagline: 'La fiesta valenciana en todo su esplendor.',
    subtitle: 'Para proclamaciones y ofrendas',
    image: `${BASE}/principal_boda-683x1024.webp`,
    heroImage: `${BASE}/principal_boda-683x1024.webp`,
    description: 'Guarda para toda tu vida este maravilloso año como fallera mayor.',
    longDescription: 'Las fotos de tu año como Fallera Mayor no solo capturan los momentos, sino la emoción y el orgullo que vives en cada acto. Desde tu proclamación hasta la ofrenda, cada paso que das es único, y mereces fotos que reflejen no solo lo que sucede, sino lo que sientes. Como Fallera Mayor, cada sonrisa, cada lágrima y cada mirada de admiración que recibes debe ser inmortalizada para que puedas revivir este año tan especial una y otra vez. La importancia de contar con un fotógrafo que entienda la esencia de este papel va más allá de simples imágenes: es capturar cada instante de emoción, cada detalle de tu traje, y cada gesto que te define.',
    gallery: [
      `${BASE}/fallas-2-scaled.webp`,
      `${BASE}/fallas2-scaled.webp`,
      `${BASE}/fallas3.webp`,
      `${BASE}/fallas4-scaled.webp`,
    ],
    includes: [
      'Sesión de indumentaria tradicional',
      'Reportaje de proclamación',
      'Fotografía de la ofrenda a la Virgen',
      'Imágenes de la plantà y la cremà',
      'Edición con paleta cálida y colorida',
      'Álbum digital de alta resolución',
    ],
    quote: '"Tu reinado merece fotos que transmitan la magia y la grandeza de este momento irrepetible."',
  },
  {
    id: 'video',
    num: '03',
    name: 'Vídeo',
    tagline: 'Producciones audiovisuales que emocionan.',
    subtitle: 'Para eventos públicos y mercado profesional',
    image: `${BASE}/principal_video.webp`,
    heroImage: `${BASE}/principal_video.webp`,
    description: 'Transformando tus recuerdos en una película inolvidable.',
    longDescription: 'Al contratar un servicio profesional de edición de video, estás asegurando que los momentos más importantes de tu día se conviertan en una pieza audiovisual perfectamente elaborada. Un editor experimentado sabe cómo seleccionar los mejores fragmentos, crear una narrativa fluida y añadir efectos visuales y sonoros que realcen la emoción de cada escena. El resultado es un video que no solo documenta el evento, sino que también cuenta una historia emotiva, llena de significado y belleza, que podrás revivir una y otra vez. Con un servicio de edición profesional, el video será mucho más que una simple grabación: una obra cuidada al detalle.',
    gallery: [
      `${BASE}/principal_video.webp`,
      `${BASE}/video1.webp`,
      `${BASE}/video2-800x533.webp`,
      `${BASE}/video3-800x533.webp`,
    ],
    includes: [
      'Grabación en alta definición (4K)',
      'Dron aéreo (según disponibilidad)',
      'Edición cinematográfica profesional',
      'Música licenciada personalizada',
      'Teaser de 90 segundos para redes',
      'Película completa del evento',
    ],
    quote: '"Un video bien hecho es una ventana en el tiempo. Lo abres y vuelves a vivir ese momento."',
  },
  {
    id: 'urbano',
    num: '04',
    name: 'Urbano',
    tagline: 'La ciudad como escenario de tu historia.',
    subtitle: 'Para eventos públicos y sesiones en exterior',
    image: `${BASE}/principal-1-1.webp`,
    heroImage: `${BASE}/principal-1-1.webp`,
    description: '¿Capturando la energía y el estilo de la ciudad en cada imagen?',
    longDescription: 'Al contratar un servicio de fotografía urbana, te aseguras de obtener imágenes llenas de dinamismo y autenticidad, aprovechando al máximo los paisajes y la arquitectura de la ciudad. Los fotógrafos especializados saben cómo jugar con la luz natural, los colores y las texturas de los entornos urbanos para crear composiciones únicas y llenas de vida. Ya sea para una sesión individual, en pareja o en grupo, la ciudad se convierte en un escenario vibrante. Además, la fotografía urbana ofrece la posibilidad de capturar momentos espontáneos y genuinos en medio de la energía de la vida cotidiana, resaltando tu estilo personal en combinación con los elementos urbanos.',
    gallery: [
      `${BASE}/Imagen1-3-800x1000.webp`,
      `${BASE}/Imagen2-2-800x800.webp`,
      `${BASE}/Imagen3-2-800x533.webp`,
      `${BASE}/Imagen5-800x533.webp`,
      `${BASE}/Imagen6-scaled-1-800x556.webp`,
      `${BASE}/Imagen7-scaled-1-800x533.webp`,
      `${BASE}/Imagen8-scaled-1-800x533.webp`,
      `${BASE}/Imagen9-scaled-1-800x578.webp`,
      `${BASE}/Imagen10-800x533.webp`,
      `${BASE}/Imagen11-800x533.webp`,
      `${BASE}/Imagen12-800x533.webp`,
      `${BASE}/Imagen13-800x1200.webp`,
    ],
    includes: [
      'Consulta previa de estilo y localizaciones',
      'Sesión de 2 horas en Valencia',
      'Selección de 3-4 localizaciones',
      'Edición artística personalizada',
      '30+ fotografías editadas',
      'Álbum digital de alta resolución',
    ],
    quote: '"La ciudad respira y pulsa. Mis fotografías capturan ese ritmo urbano con una mirada íntima."',
  },
  {
    id: 'newborn',
    num: '05',
    name: 'Newborn',
    tagline: 'Los primeros días de una nueva vida.',
    subtitle: 'Para bautizos y primeras fotos de recién nacido',
    image: `${BASE}/principal-1024x683.webp`,
    heroImage: `${BASE}/principal-1.webp`,
    description: 'Capturando los primeros momentos de la vida de tu bebé.',
    longDescription: 'Al contratar un servicio profesional de fotografía para recién nacidos, estás asegurando que esos primeros días tan especiales queden inmortalizados de una manera tierna y artística. Un equipo especializado sabe cómo trabajar con recién nacidos, capturando su dulzura y delicadeza en imágenes llenas de amor. La luz, los ángulos y los detalles se cuidan con precisión, creando fotografías que transmitirán la pureza y la belleza de esos primeros momentos. No solo obtendrás imágenes de calidad excepcional, sino que también tendrás la tranquilidad de trabajar con profesionales que saben cómo tratar a los bebés, respetando su seguridad y bienestar en cada toma.',
    gallery: [
      `${BASE}/Imagen2.webp`,
      `${BASE}/principal-1-800x533.webp`,
    ],
    includes: [
      'Sesión en estudio o domicilio',
      'Props y telas especializados',
      'Fotografías del bebé solo',
      'Fotografías con la familia',
      'Ambiente cálido y seguro',
      '20+ fotografías editadas',
    ],
    quote: '"Esos primeros días pasan volando. Cada fotografía es un regalo que el tiempo no puede borrar."',
  },
  {
    id: 'estudio',
    num: '06',
    name: 'Estudio',
    tagline: 'Retratos profesionales con luz perfecta.',
    subtitle: 'Para producto o empresa',
    image: `${BASE}/principal-2.webp`,
    heroImage: `${BASE}/principal-2.webp`,
    description: 'Creando recuerdos inolvidables en un ambiente controlado y profesional.',
    longDescription: 'Al contratar un servicio de fotografía en estudio, te aseguras de obtener imágenes de alta calidad en un entorno controlado donde cada detalle está cuidadosamente planeado. Los profesionales del estudio tienen las herramientas necesarias para jugar con la iluminación, los fondos y la composición, lo que garantiza que cada foto refleje exactamente la atmósfera y el estilo que deseas. Ya sea para retratos familiares, fotos individuales o sesiones de empresa, el estudio te ofrece resultados impecables y personalizados. Podrás elegir entre diferentes escenarios y estilos, con la seguridad de que los profesionales estarán ahí para guiarte en cada paso.',
    gallery: [
      `${BASE}/Imagen1-4-scaled-1-800x527.webp`,
    ],
    includes: [
      'Uso del estudio con luz profesional',
      'Consulta de vestuario y estilo',
      'Sesión de 1-2 horas',
      'Cambios de ropa y look',
      'Edición avanzada de retratos',
      '15+ fotografías editadas',
    ],
    quote: '"En el estudio, la luz es mi pincel. Cada retrato es una pequeña obra de arte creada para ti."',
  },
];

export function getServicioById(id: string): Servicio | undefined {
  return servicios.find(s => s.id === id);
}

const Products = require("../../models/products.model");
const UUID = require("uuid");

// WalkMAnrt :D

const productsSmartTV = [
  {
    id: UUID.v4(),
    title: "TV Samsung 55 Pulgadas 4K Ultra HD Smart TV LED UN55AU7000FXZX",
    price: 10599,
    description: "Crystal Display da los niveles de color, nitidez y contraste optimizados para tu visualización. Un diseño minimalista y sin bordes ofrece una experiencia inmersiva. Siente el realismo de la resolución UHD 4K y el brillo de tu televisor con HDR.",
    category: "Smart TV",
    image: "https://i.postimg.cc/ZqpV2nMw/TV-Samsung-55-Pulgadas-4-K-Ultra-HD-Smart-TV-LED-UN55-AU7000-FXZX.webp"
  },
  {
    id: UUID.v4(),
    title: "TV Philips 55 Pulgadas Roku 4K Ultra HD LED 55PFL5756/F8",
    price: 8500,
    description: "Diviértete con películas y videojuegos en alta definición. Baja la app de Roku y controla tu televisión desde tu celular. Roku TV es sencillo e inteligente totalmente diseñado para el entretenimiento. Instala tu aplicación de video favorita ya sea Disney Plus, Netflix o Youtube. Experimenta imágenes más realistas con detalles finos y colores vivos. HDR da más exactitud al contraste, podrás percibir con mayor claridad las sombras y el brillo.",
    category: "Smart TV",
    image: "https://i.postimg.cc/Ls1bSNnB/TV-Philips-55-Pulgadas-Roku-4-K.webp"
  },
  {
    id: UUID.v4(),
    title: "TV Samsung 60 Pulgadas 4K Ultra HD Smart TV LED UN60AU7000FXZX",
    price: 12000,
    description: "Un diseño minimalista y sin bordes ofrece una experiencia inmersiva. Siente el realismo de la resolución UHD 4K y el brillo de tu televisor con HDR. Crystal Display colores precisos, nitidez y contraste optimizados para tu visualización. Potente procesador Crystal 4K brinda imágenes definidas y realistas. Con HDR aprecia cada detalle con claridad tanto en escenas oscuras o brillantes. Imágenes en 4K Ultra HD más realistas con detalles finos y colores vivos.",
    category: "Smart TV",
    image: "https://i.postimg.cc/9QSnsvFQ/TV-Samsung-60-Pulgadas-4-K-Ultra.webp"
  },
  {
    id: UUID.v4(),
    title: "TV Hisense 50 Pulgadas 4K Ultra HD Smart TV LED 50A65HV",
    price: 7000,
    description: "Resolución 4K más HDR notaras en cada escena más detalles y colores vivos. Smooth Motion 120 crea imágenes fluidas para deportes y videojuegos. Smart TV diseñada para entretenimiento, streaming y videojuegos. Con una resolución Ultra HD 4K experimenta imágenes realistas con detalles finos y colores vivos. Disfruta de un sonido enriquecido y diálogos claros gracias a dts Virtual X -LED TV analiza las condiciones de luz y ajusta el brillo de la pantalla forma automática",
    category: "Smart TV",
    image: "https://i.postimg.cc/9f6swsvn/TV-Hisense-50-Pulgadas-4-K-Ultra.webp"
  },
  {
    id: UUID.v4(),
    title: "TV LG 70 Pulgadas UHD 4K TV AI ThinQ SMART TV 70UQ8050BFB",
    price: 18599,
    description: "Procesador con Inteligencia Artificial 4K que ayuda a mejorar las imágenes. AI Sound crea un sonido envolvente con altos nítidos y diálogos claros. Conecta barras de sonido y bocinas inalámbricas por medio de Bluetooth. Con LG webOS disfruta películas en Netflix y Disney+, videos en YouTube y mucho mas. 4K Active HDR optimiza cada escena, brindando detalles delicados y colores. El Modo Juego modifica el tiempo de respuesta para que no tengas desfase al jugar",
    category: "Smart TV",
    image: "https://i.postimg.cc/Pf2KBBSn/TV-LG-70-Pulgadas-UHD-4-K.webp"
  },
  {
    id: UUID.v4(),
    title: "TV TCL 65 Pulgadas 4K Ultra HD Smart TV LED 65A423",
    price: 38999,
    description: "Compatible con Google Assistant para controlar la TV con tu voz. Google Chromecast Integrado. Instala tu aplicación de video favorita ya sea Disney Plus, Netflix o Youtube. TCL TV es ahora más inteligente con un sistema de inteligencia artificial que hará de tu TV el centro del hogar. Con 4K Ultra HD experimenta imágenes más realistas con detalles finos y colores vivos. Con una resolución cuatro veces mayor que Full HD. Crea un ambiente inteligente en tu hogar conectando tus dispositivos Google a la pantalla",
    category: "Smart TV",
    image: "https://i.postimg.cc/FHfPbDg5/TV-TCL-65-Pulgadas-4-K-Ultra-HD.webp"
  },
  {
    id: UUID.v4(),
    title: "TV Sony 55 Pulgadas 4K Ultra HD Smart TV LED KD-55X75K",
    price: 10999,
    description: "Escala imágenes en baja resolución a una resolución cercana a 4K. Motionflow XR crea imágenes fluidas y claras perfecta para deportes y videojuegos. El Procesador 4K X1 hará que experimentes la experiencia 4k Ultra HD. Sony Google TV está diseñado para el entretenimiento, streaming, videojuegos y mucho más. Compatible con Google Assistant y Alexa, controla funciones como el encendido, apagado, cambio de canal y volumen con la voz",
    category: "Smart TV",
    image: "https://i.postimg.cc/j2sgzTvZ/TV-Sony-55-Pulgadas-4-K-Ultra.webp"
  },
  {
    id: UUID.v4(),
    title: "TV Sony 43 Pulgadas 4K Ultra HD Smart TV KD-43X80K",
    price: 13599,
    description: "Google TV está diseñado para el entretenimiento, streaming y videojuegos. Google Chromecast Integrado. Compatible con Google Assistant para controlar funciones como el encendido y apagado, cambio de canal y ajuste de volumen sólo con la voz. UHD 4K cuatro veces más resolución que el Full HD, Su potente procesador 4K brinda imágenes definidas, nítidas y realistas. Con Google TV experimenta más de tu contenido favorito, disfruta de series y películas en Netflix o de tus videos favoritos en Youtube, suscríbete a Disney Plus o HBO.",
    category: "Smart TV",
    image: "https://i.postimg.cc/505KYy5X/TV-Sony-43-Pulgadas-4-K-Ultra.webp"
  },
  {
    id: UUID.v4(),
    title: "TV LG 65 Pulgadas UHD 4K TV AI ThinQ SMART TV 65UQ80BFPSB",
    price: 12000,
    description: "Procesador con Inteligencia Artificial 4K que ayuda a mejorar las imágenes. AI Sound crea un sonido envolvente con altos nítidos y diálogos claros. Conecta barras de sonido y bocinas inalámbricas por medio de Bluetooth. Con LG webOS disfruta películas en Netflix y Disney+, videos en YouTube y mucho mas. 4K Active HDR optimiza cada escena, brindando detalles delicados y colores. El Modo Juego modifica el tiempo de respuesta para que no tengas desfase al jugar",
    category: "Smart TV",
    image: "https://i.postimg.cc/nrRkBDXh/TV-LG-65-Pulgadas-UHD-4-K.webp"
  },
  {
    id: UUID.v4(),
    title: "TV LG 55 Pulgadas 4K Ultra HD Smart TV OLED 55B2PSA",
    price: 12399,
    description: "Con Inteligencia Artificial AI ThinQ. Compatible con Google Assistant para controlar con tu voz la TV. Con 4K Active HDR optimiza cada escena, brindando detalles delicados y colores. Potente procesador con Inteligencia Artificial 4K que ayuda a mejorar las imágenes. Con LG webOS disfruta películas en Netflix y Disney+, videos en YouTube y mucho mas. Con HDR aprecia cada detalle con claridad tanto en escenas oscuras o brillantes. Con AirPlay comparte fotos, videos o música desde tu iPhone, iPad o Mac a la pantalla",
    category: "Smart TV",
    image: "https://i.postimg.cc/ZqJWzKYT/TV-LG-55-Pulgadas-4-K-Ultra.webp"
  },
];

// Products.bulkCreate(productsSmartTV);

const productsLaptops = [
  {
    id: UUID.v4(),
    title: "Lenovo ThinkPad E14 Gen2 Core i5-1135g7, 8Gb Ram 256Gb SSD",
    price: 18999,
    description: "Procesador:  Intel® Core™ i5-1135G7. Sistema operativo: Windows 10 Pro. Pantalla: 14” FHD (1920x1080), IPS, 250 nits, antirreflejos. Memoria: 8GB DDR4-3200. Batería: 45Wh. Suporta Rapid Charge (hasta el 80% de carga en 1 hora) MobileMark® 2014: Hasta 11.9 horas de duraciónMobileMark® 2018: 8.7 horas de duración.",
    category: "Laptops",
    image: ""
  },
  {
    id: UUID.v4(),
    title: "Lenovo Flex 5 14 FHD Touch Display Ryzen 5 5500U 16GB RAM DDR4 256GB SSD",
    price: 14599,
    description: "Con los últimos procesadores AMD Ryzen serie 5 U y 16 GB de RAM DDR4, estás jugando con la creación de contenido de élite y el rendimiento de clase para juegos. Almacena más datos más rápido con almacenamiento SSD de 512 GB y mantén tu PC fresco y silencioso incluso bajo cargas pesadas con refrigeración inteligente, lo que te permite cambiar entre velocidades del ventilador para maximizar el silencioso, rendimiento o un equilibrio. Despierta tus sentidos a una velocidad refrescante, con la confianza de desconectar y ir más lejos. Los nuevos procesadores AMD Ryzen serie 5000 dan vida a tus experiencias, ofreciendo todo lo que necesitas y mucho más.",
    image: ""
  },
  {
    id: UUID.v4(),
    title: "Acer Nitro 5 15.6 AN515-58-525P i5-12500H GeForce RTX 3050 8GB DDR4",
    price: 18500,
    description: "Enciéndelo y luego acelera el ritmo más rápido y eficaz que nunca con la próxima evolución de Acer de su portátil gaming Nitro 5. El Nitro 5 se eleva a nuevos niveles de rendimiento para jugadores y creadores, cortesía de su procesador Intel Core de 12ª generación y gráficos NVIDIA GeForce RTX 3050, con la arquitectura RTX de Ampere NVIDIA! A continuación, incorpora la visualización Full HD de 15,6 de 15,6 con un panel IPS de 144 Hz, una amplia refrigeración y un teclado retroiluminado rojo y podrás ver por qué el Nitro 5 es un éxito perfecto para los jugadores de todos los niveles. ",
    image: ""
  },
  {
    id: UUID.v4(),
    title: "MSI Laptop 15.6 GF6311UD-232MX i5-11400H NVIDIA GeForce RTX3050 8GB DDR4",
    price: 22599,
    description: "Enciéndelo y luego acelera el ritmo más rápido y eficaz que nunca con la próxima evolución de MSI Laptop Gaming. MSI Gaming se eleva a nuevos niveles de rendimiento para jugadores y creadores, cortesía de su procesador Intel Core de 11ª generación y gráficos NVIDIA GeForce RTX 3050, con la arquitectura RTX de Ampere NVIDIA! A continuación, incorpora la visualización Full HD de 15,6 de 15,6 con un panel Amoled de 144 Hz, una amplia refrigeración y un teclado retroiluminado rojo y podrás ver por qué MSI Gaming Laptop es un éxito perfecto para los jugadores de todos los niveles.",
    image: ""
  },
  {
    id: UUID.v4(),
    title: "Lenovo IdeaPad 3 FHD 14 Intel Core i7-1165G7 20GB DDR4 1TB SSD",
    price: 14000,
    description: "Procesador: Intel Core i7-1165G7 (4 núcleos, 8 hilos, caché de 12 MB, frecuencia base a 2.8 GHz, hasta 4.7 GHz) con gráficos Intel Iris Xe. RAM de alta velocidad y espacio enorme: 20 GB de RAM de alto ancho de banda para ejecutar sin problemas múltiples aplicaciones y pestañas del navegador, todo a la vez; la unidad de estado sólido PCIe NVMe M.2 de 1 TB permite un arranque rápido y transferencia de datos. Especificaciones técnicas: 1 USB-A 2.0, 1 lector de tarjetas SD, 1 combo de auriculares/micrófono, 1 USB-C 3.2 Gen 1, 1 HDMI, 1 USB-A 3.2 Gen 1; Wi-Fi 6 y Bluetooth 5.0; lector de huellas dactilares.",
    image: ""
  },
];

// Products.bulkCreate(productsLaptops);
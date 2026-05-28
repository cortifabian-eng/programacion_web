class Producto {
  //Agregar #precio y #stock como campos privados
  #precio; 
  #stock;

  constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca  = marca;
    this.precio = precio;
    this.stock  = stock;
    this.imagen = imagen;
  }

  //Agregar getters (get precio() y get stock())
  get precio() {
    return this.#precio;
  }
  get stock() {
    return this.#stock
  }

  //Agregar setters (set precio() y set stock()). Reemplazar los setters básicos por setters con validación
  set precio(valor) {
    if (valor <=0) {
      console.log(`Precio inválido: ${valor}`);
    }
    this.#precio = valor;
  }

  set stock(valor) {
    if (valor <=0) {
      console.log(`Stock inválido: ${valor}`)
    }
    this.#stock = valor;
  }


  descripcion() {
    return `${this.nombre} — ${this.marca}`;
  }
 
  get estaDisponible() {
    return this.stock > 0;
  }
 
  get precioFormateado() {
    return `$${this.precio.toLocaleString('es-AR')}`;
  }
 
  resumen() {
    const disponible = this.estaDisponible ? `${this.stock} en stock` : 'Sin stock';
    return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
  }
}

class Notebook extends Producto {
  constructor (nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, pantallaPulgadas){
    super (nombre, marca, precio, stock,imagen)
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.pantallaPulgadas = pantallaPulgadas
  }
  fichaTecnica() {
    return `${this.nombre}  / ${this.procesador} / ${this.almacenamientoGB}` 
  }
}

class Celular extends Producto {
  constructor (nombre, marca, precio, stock, imagen, pantallaPulgadas, bateriaMah, camaraMp, almacenamientoGB){
    super (nombre, marca, precio, stock, imagen)
    this.pantallaPulgadas = pantallaPulgadas;
    this.bateriaMah = bateriaMah;
    this.camaraMp = camaraMp;
    this.almacenamientoGB = almacenamientoGB;
  }
  fichaTecnica() {
    return `${this.nombre}  / ${this.pantallaPulgadas} / ${this.almacenamientoGB}`
  }
}

class Auricular extends Producto {
    constructor (nombre, marca, precio, stock, imagen, tipo, wireless, cancelacionRuido){
      super (nombre, marca, precio, stock, imagen)
      this.tipo = tipo;
      this.wireless = wireless;
      this.cancelacionRuido = cancelacionRuido;
    }
    fichaTecnica() {
      return `${this.nombre}  / ${this.tipo} / ${this.wireless ? 'Wireless' : 'Con cable'} / ${this.cancelacionRuido ? 'Con cancelación de ruido' : 'Sin cancelación de ruido' }`;
    }
}

class Monitor extends Producto {
  constructor (nombre, marca, precio, stock, imagen, pulgadas, resolucion, tipoPanel, Hz){
    super (nombre, marca, precio, stock, imagen)
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.tipoPanel = tipoPanel;
    this.Hz = Hz;
  }
  fichaTecnica() {
    return `${this.nombre}  / ${this.pulgadas} / ${this.resolucion} / ${this.tipoPanel} / ${this.Hz}Hz`
  }
}

class PCescritorio extends Producto {
  constructor (nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, placaVideo, fuenteW){
    super (nombre, marca, precio, stock, imagen)
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.placaVideo = placaVideo;
    this.fuenteW = fuenteW;
  }
  fichaTecnica() {
    return `${this.nombre}  / ${this.procesador} / ${this.ramGB}GB / ${this.almacenamientoGB}GB / ${this.placaVideo} / ${this.fuenteW}W`
  }
}


// ── Catálogo de productos ────────────────────────────────────
// Array global — definido fuera de cualquier función o clase
const catalogo = [
  new Producto(
    'MacBook Air M2', 'Apple', 2100000, 4,
    'https://images.unsplash.com/photo-1659135890064-d57187f0946c?w=400'
  ),
  new Producto(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
  ),
  new Producto(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
  ),
  new Producto(
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
  ),
  new Producto(
    'PC Gamer Entry Level', 'Armada', 1200000, 5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
  ),
];

function crearTarjeta(producto) {

// definir la etiqueta HTML que creo, luego definir su clase (si quiero aplicarle estilos mediante CSS) 
//y por último el valor que toma (marca, precio, nombre, etc)


// document hace referencia al HTML
  const article = document.createElement('article');
  article.className = 'tarjeta'

  // Imagen del producto
 // defino su src (url) y el texto alternativo (alt)
  const img = document.createElement('img');
  img.src     = producto.imagen;
  img.alt     = producto.nombre;

  // Nombre
  const h3 = document.createElement('h3');
  h3.textContent = producto.nombre;

  // Características básicas con lista
  const ul = document.createElement('ul');

  const liMarca = document.createElement('li');
  liMarca.textContent = `Marca: ${producto.marca}`;

  const liStock = document.createElement('li');
  liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';

// el appendChild nos permite vincular el código HTML creado en JS en nuestro HTML
  ul.appendChild(liMarca);
  ul.appendChild(liStock);

  const precio = document.createElement('p');
  precio.textContent = producto.precioFormateado;
  const ficha = document.createElement('p');
  ficha.textContent = producto.fichaTecnica ? producto.fichaTecnica() : '';

  // Botón
  const btn = document.createElement('button');
  btn.textContent = producto.estaDisponible ? 'Agregar al carrito' : 'Sin stock';
  btn.disabled    = !producto.estaDisponible;

  // Armar la tarjeta
  const info = document.createElement('div');
  info.className = 'tarjeta-info';
  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);

  article.appendChild(img);
  article.appendChild(info);

  return article;
}

// Insertar todas las tarjetas en el div#productos
const contenedor = document.getElementById('productos');
catalogo.forEach(producto => contenedor.appendChild(crearTarjeta(producto)));
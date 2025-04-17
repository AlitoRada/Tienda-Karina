    const productos = [
    { nombre: "Mantel Floral", precio: 2000, imagen: "imagenes/mantel1.jpg" },
    { nombre: "Mantel Rayado", precio: 1800, imagen: "imagenes/mantel2.jpg" },
    { nombre: "Mantel Navideño", precio: 2200, imagen: "imagenes/mantel3.jpg" },
  ];
  
  const carrito = [];
  const numeroWhatsApp = "5491123456789"; // <-- Cambiá por el número real
  
  function renderProductos() {
    const contenedor = document.getElementById("productos");
    productos.forEach((p, index) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}" />
        <h3>${p.nombre}</h3>
        <p>$${p.precio}</p>
        <button onclick="agregarAlCarrito(${index})">Agregar al pedido</button>
      `;
      contenedor.appendChild(div);
    });
  }
  
  function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    renderCarrito();
  }
  
  function renderCarrito() {
    const lista = document.getElementById("carrito");
    lista.innerHTML = "";
    carrito.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = `${p.nombre} - $${p.precio}`;
      lista.appendChild(li);
    });
  }
  
  function enviarPedido() {
    if (carrito.length === 0) {
      alert("Agregá al menos un producto");
      return;
    }
  
    let mensaje = "Hola! Estoy interesad@ en estos manteles:\n";
    let total = 0;
  
    carrito.forEach(p => {
      mensaje += `- ${p.nombre} - $${p.precio}\n`;
      total += p.precio;
    });
  
    mensaje += `Total: $${total}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  }
  
  renderProductos();
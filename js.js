// Función para desplazar a la sección de propiedades al hacer clic en el botón
function scrollToProperties() {
  const propertiesSection = document.getElementById("properties");
  propertiesSection.scrollIntoView({ behavior: 'smooth' });
}

// Array de propiedades (simulación de base de datos)
const propiedades = [
  {
    imagen: 'https://via.placeholder.com/300x200/90c8a7/ffffff?text=Casa+en+la+Playa',
    titulo: 'Casa en la Playa',
    descripcion: 'Hermosa casa de 3 habitaciones con vista al mar.',
  },
  {
    imagen: 'https://via.placeholder.com/300x200/90c8a7/ffffff?text=Apartamento+en+el+Centro',
    titulo: 'Apartamento en el Centro',
    descripcion: 'Apartamento de 2 habitaciones en el centro de la ciudad.',
  },
  {
    imagen: 'https://via.placeholder.com/300x200/90c8a7/ffffff?text=Finca+en+las+Montañas',
    titulo: 'Finca en las Montañas',
    descripcion: 'Finca de 5 hectáreas con vistas panorámicas.',
  }
];

// Función para mostrar las propiedades en la sección
function mostrarPropiedades() {
  const propertyList = document.querySelector('.property-list');
  propiedades.forEach(propiedad => {
    const propertyElement = document.createElement('div');
    propertyElement.classList.add('property');
    propertyElement.innerHTML = `
      <img src="${propiedad.imagen}" alt="${propiedad.titulo}">
      <div class="info">
        <h3>${propiedad.titulo}</h3>
        <p>${propiedad.descripcion}</p>
      </div>
    `;
    propertyList.appendChild(propertyElement);
  });
}

// Ejecutar la función cuando la página se cargue
window.onload = mostrarPropiedades;

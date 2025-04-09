<template>
  <div class="buzon-container">
    <h2 class="titulo">Buzón de Solicitudes</h2>
    <div v-for="(solicitud, index) in solicitudes" :key="index" class="solicitud-card">
      <div class="card-info">
        <div>
          <h5 class="card-title">Solicitud #{{ index + 1 }}</h5>
          <p class="card-preview">{{ solicitud.substring(0, 50) }}...</p>
        </div>
        <button @click="abrirModal(solicitud)" class="btn-ver">Ver Detalles</button>
      </div>
    </div>

    <div v-if="mostrarModal" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <h3>Detalles de la Solicitud</h3>
        <p>{{ solicitudSeleccionada }}</p>
        <button @click="cerrarModal" class="btn-cerrar">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solicitudes: [],
      mostrarModal: false,
      solicitudSeleccionada: ''
    };
  },
  mounted() {
    this.loadSolicitudes();
    // Añadir un event listener para detectar cambios en localStorage
    window.addEventListener('storage', this.handleStorageChange);
  },
  beforeUnmount() {
    // Eliminar el event listener cuando el componente se destruye
    window.removeEventListener('storage', this.handleStorageChange);
  },
  methods: {
    loadSolicitudes() {
      const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
      this.solicitudes = solicitudes;
    },
    abrirModal(solicitud) {
      this.solicitudSeleccionada = solicitud;
      this.mostrarModal = true;
    },
    cerrarModal() {
      this.mostrarModal = false;
      this.solicitudSeleccionada = '';
    },
    handleStorageChange(event) {
      // Actualizar las solicitudes cuando cambia localStorage
      if (event.key === 'solicitudes') {
        this.loadSolicitudes();
      }
    }
  }
};
</script>

<style scoped>
.buzon-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f4f7fa;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 88, 166, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.titulo {
  text-align: center;
  color: #004080;
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: bold;
}

.solicitud-card {
  background-color: #ffffff;
  border-left: 5px solid #0078d4;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;
}

.solicitud-card:hover {
  background-color: #f0f8ff;
}

.card-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.card-title {
  margin: 0;
  color: #003366;
  font-weight: bold;
}

.card-preview {
  color: #666;
  font-size: 0.9rem;
}

.btn-ver {
  background-color: #0078d4;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.btn-ver:hover {
  background-color: #005a9e;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #ffffff;
  padding: 25px 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.modal-content h3 {
  margin-bottom: 15px;
  color: #004080;
}

.modal-content p {
  color: #333;
  font-size: 1rem;
  margin-bottom: 20px;
}

.btn-cerrar {
  background-color: #d9534f;
  color: #fff;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.btn-cerrar:hover {
  background-color: #c9302c;
}
</style>

  
  
  
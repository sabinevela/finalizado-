<template>
    <div>
      <h2>Solicitudes Guardadas</h2>
      <div v-for="(solicitud, index) in solicitudes" :key="index" class="card">
        <div class="card-body">
          <h5 class="card-title">Solicitud #{{ index + 1 }}</h5>
          <p class="card-text">{{ solicitud }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        solicitudes: []
      };
    },
    mounted() {
      this.loadSolicitudes();
    },
    methods: {
      loadSolicitudes() {
        const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
        this.solicitudes = solicitudes;
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin: 10px;
  }
  </style>
  
  
  
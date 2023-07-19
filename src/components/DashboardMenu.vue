<template>
    <div class="card border-0 rounded shadow">
      <div class="card-body">
          <h5 class="font-weight-bold">MAIN MENU</h5>
          <hr>
          <ul class="list-group">
              <router-link :to="{name: 'dashboard' }" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
              <a href="#" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> Profile</a>
              <a href="#" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> Permohonan Izin</a>
              <a href="#" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-shopping-cart"></i> Permohonan Absen</a>
              <a href="#" style="cursor:pointer" class="list-group-item text-decoration-none text-dark text-uppercase"><i class="fas fa-sign-out-alt"></i> Logout</a>
          </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: 'DashboardMenuComponent'
  }
  </script>
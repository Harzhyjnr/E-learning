<template>
 <Announcement />
  <header class="header-container">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link class="navbar-brand" >Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active text-dark" >Home</router-link>
        </li>
        <li class="nav-item"> 
          <router-link to="/course" class="nav-link active text-dark" >Course</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link active text-dark" >About us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pricing" class="nav-link  active text-dark" >Pricing</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link active text-dark" >Contact Us</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" >Action</router-link></li>
            <li><router-link class="dropdown-item" >Another action</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" >Something else here</router-link></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </header>
</template>

<script setup>
import Announcement from "../layout-folder/Announcement.vue";
</script>

<style lang="scss" scoped></style>

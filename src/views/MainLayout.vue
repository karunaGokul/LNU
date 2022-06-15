<template>
  <div>
    <h1>Welcome to lifenyou</h1>
    <router-link to="/admin/login">Admin Login</router-link>
    <router-link to="/client/login">Client Login</router-link>
    <router-link to="/coach/login">Coach Login</router-link>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MainLayout extends Vue {}
</script>

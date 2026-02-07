<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import { authService } from "@/service/authService";

export default {
  components: { LoginForm },
  methods: {
    async handleLogin(payload: { email: string; password: string }) {
      try {
        const response = await authService.login(payload);
        
        if (response.success) {
          this.$router.push("/Home");
        } else {
          alert("Login failed: " + response.message);
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Ocorreu um erro durante o login. Por favor, tente novamente.");
      }
    },
  },
  meta: {
    isPublic: true,
    hideSidebar: true,
  },
};
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-br from-black to-blue-800 flex items-center justify-center"
  >
    <LoginForm @submit="handleLogin" />
  </div>
</template>

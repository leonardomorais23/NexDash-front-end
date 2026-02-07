<script lang="ts">
import SignupForm from "@/components/SignupForm.vue";

export default {
  components: { SignupForm },
  methods: {
      async handleRegisterSubmit(payload: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
      }) {
        console.log("Registro enviado:", payload);
        // Aqui você pode adicionar a lógica para enviar os dados de registro para o backend
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
    class="min-h-screen bg-linear-to-br from-black to-blue-800 flex items-center justify-center">
    <SignupForm @submit="handleRegisterSubmit"/>
  </div>
</template>

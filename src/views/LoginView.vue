<template>
  <div class="min-h-screen bg-linear-to-br from-black to-blue-800 flex items-center justify-center">
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: { LoginForm },
  meta: {
    isPublic: true,
    hideSidebar: true,
  },
};
</script>
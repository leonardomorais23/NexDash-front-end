import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);

    function login() {
        isAuthenticated.value = true;
    }

    return {
        isAuthenticated,
        login
    };
});
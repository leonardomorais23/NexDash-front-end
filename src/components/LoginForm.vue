<script setup lang="ts">
import { ref, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const showPassword = ref(false);
const password = ref("");
const email = ref("");

const emit = defineEmits<{
  (e: "submit", payload: { email: string; password: string }): void;
}>();

function loginSubmit() {
  emit("submit", {
    email: email.value,
    password: password.value,
  });
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <div :class="cn('flex flex-col gap-6 w-200 p-8', props.class)">
    <Card class="overflow-hidden p-0">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit.prevent="loginSubmit">
          <FieldGroup>
            <div class="flex flex-col items-center gap-2 text-center">
              <h1 class="text-2xl font-bold">Bem vindo de volta</h1>
              <p class="text-muted-foreground text-balance">
                Faça login na sua conta.
              </p>
            </div>
            <Field>
              <FieldLabel for="email"> E-mail </FieldLabel>
              <Input
                  id="email"
                  name="email"
                  autocomplete="email"
                  type="email"
                  v-model="email"
                  placeholder="m@example.com"
                  required
              />
            </Field>
            <Field>
              <div class="flex items-center [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-500! transition-colors">
                <FieldLabel for="password"> Senha </FieldLabel>
                <router-link
                  to="#"
                  class="ml-auto text-sm "
                >
                  Esqueceu sua senha?
                </router-link>
              </div>
              <div class="relative">
                <Input
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  class="pr-8"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                />
                <button
                  @click="togglePassword"
                  type="button"
                  class="absolute right-0 top-0 h-full px-3"
                >
                  <img
                    v-if="showPassword"
                    src="/icons/hide.svg"
                    alt="Ocultar senha"
                    class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                  />
                  <img
                    v-else
                    src="/icons/unhide.svg"
                    alt="Mostrar senha"
                    class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
                  />
                </button>
              </div>
            </Field>
            <Field>
              <Button type="submit" > Login </Button>
            </Field>
            <FieldSeparator
              class="*:data-[slot=field-separator-content]:bg-card"
            >
              ou continue com
            </FieldSeparator>
            <Field class="gap-4">
              <Button variant="outline" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span class="sr-only">Login com Google</span>
              </Button>
            </Field>
            <FieldDescription class="text-center [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-500! transition-colors">
              Não tem uma conta?
              <router-link to="/register"> Criar conta </router-link>
            </FieldDescription>
          </FieldGroup>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="../assets/hero.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </CardContent>
    </Card>
    <FieldDescription
      class="px-6 text-center text-white [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-500! transition-colors">
      Ao clicar em continuar, você concorda com nossos
      <router-link to="#">Termos de Serviço</router-link> e
      <router-link to="#">Política de Privacidade</router-link>.
    </FieldDescription>
  </div>
</template>

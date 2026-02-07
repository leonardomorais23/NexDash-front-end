<script setup lang="ts">
import { ref, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const emit = defineEmits<{
  (
    e: "submit",
    payload: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
  ): void;
}>();

function registerSubmit() {
  emit("submit", {
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
}
</script>

<template>
  <div :class="cn('flex flex-col gap-4 max-w-md mx-auto w-full', props.class)">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-lg"> Crie sua conta </CardTitle>
        <CardDescription class="text-sm">
          Digite seu e-mail abaixo para criar sua conta
        </CardDescription>
      </CardHeader>
      <CardContent class="pt-4">
        <form @submit.prevent="registerSubmit">
          <FieldGroup>
            <Field>
              <FieldLabel for="name"> Nome completo </FieldLabel>
              <Input
                v-model="name"
                id="name"
                name="name"
                autocomplete="name"
                type="text"
                placeholder="John Doe"
                required
                class="h-10 px-3 text-sm"
              />
            </Field>
            <Field>
              <FieldLabel for="email"> Email </FieldLabel>
              <Input
                v-model="email"
                id="email"
                name="email"
                autocomplete="email"
                type="email"
                placeholder="m@example.com"
                required
                class="h-10 px-3 text-sm"
              />
            </Field>
            <Field>
              <Field class="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel for="password"> Senha </FieldLabel>
                  <Input
                    v-model="password"
                    id="password"
                    name="password"
                    autocomplete="new-password"
                    type="password"
                    required
                    class="h-10 px-3 text-sm"
                  />
                </Field>
                <Field>
                  <FieldLabel for="confirm-password">
                    Confirmar Senha
                  </FieldLabel>
                  <Input
                    v-model="confirmPassword"
                    id="confirm-password"
                    name="confirm-password"
                    autocomplete="new-password"
                    type="password"
                    required
                    class="h-10 px-3 text-sm"
                  />
                </Field>
              </Field>
              <FieldDescription>
                Deve ter pelo menos 8 caracteres.
              </FieldDescription>
            </Field>
            <Field>
              <Button type="submit" class="h-10 text-sm"> Criar conta </Button>
              <FieldDescription
                class="text-center [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-500! transition-colors"
              >
                Já tem uma conta? <router-link to="/"> Faça login </router-link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
    <FieldDescription
      class="px-6 text-center text-white [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-blue-500! transition-colors"
    >
      Ao clicar em continuar, você concorda com nossos
      <router-link to="#">Termos de Serviço</router-link> e
      <router-link to="#">Política de Privacidade</router-link>.
    </FieldDescription>
  </div>
</template>

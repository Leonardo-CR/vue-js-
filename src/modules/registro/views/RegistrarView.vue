<template>
  <div>
    <Form :validation-schema="schema" @submit="onSubmit">
      <h2>Registro de usuarios</h2>

      <label>Nombre:</label>
      <Field type="text" name="name" /> <br />
      <ErrorMessage name="name" /> <br />

      <label>Email:</label>
      <Field type="email" name="email" /> <br />
      <ErrorMessage name="email" /> <br />

      <button type="submit">Enviar</button>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';

const registrarStore = useRegistrarStore();

function onSubmit(values) {
  registrarStore.saveRegister(values.name, values.email);
  console.log('Formulario enviado:', values);
}
</script>

<style scoped>
label {
  font-weight: bold;
}
input {
  margin-bottom: 10px;
}
</style>

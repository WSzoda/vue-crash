<script setup>
  import {ref} from "vue";

  const showText = ref(false)
  const personName = ref("")
  const invitedNames = ref([])
  const addName = () => {
    invitedNames.value.unshift({name: personName.value});
    personName.value = ""
  }

  const removeName = (name) => {
    invitedNames.value = invitedNames.value.filter(p => p.name !== name)
  }
</script>

<template>
  <main>
<!--    <div class="container">-->
<!--      <Transition name="fade" >-->
<!--        <h1 v-if="showText">Hello World</h1>-->
<!--        <h1 v-else>Bye World</h1>-->
<!--      </Transition>-->
<!--    </div>-->
<!--    <button @click="showText = !showText">Toggle</button>-->
    <div class="container">
      <input v-on:keyup.enter="addName" type="text" placeholder="Add person to invite..." v-model.trim="personName">
      <ul>
        <TransitionGroup name="invitation">
          <li v-for="person in invitedNames" :key="person.name" @click="removeName(person.name)">{{ person.name}}</li>
        </TransitionGroup>
      </ul>
    </div>
  </main>
</template>

<style scoped>
  /*.container {*/
  /*  position: relative;*/
  /*}*/

  /*h1 {*/
  /*  position: absolute;*/
  /*}*/
  /*button {*/
  /*  margin-top: 50px;*/
  /*}*/

  /*.fade-enter-from {*/
  /*  opacity: 0;*/
  /*}*/

  /*.fade-enter-to {*/
  /*  opacity: 1;*/
  /*}*/

  /*.fade-enter-active {*/
  /*  transition: all 0.5s ease-in;*/
  /*}*/
  /*.fade-leave-from {*/
  /*  opacity: 1;*/
  /*}*/

  /*.fade-leave-to {*/
  /*  opacity: 0;*/
  /*}*/

  /*.fade-leave-active {*/
  /*  transition: all 0.5s ease-in;*/
  /*}*/

  .container {
    padding: 10px;
    max-width: 350px;
    margin: 0 auto;
  }
  .container input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(128,128,128,0.14);
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
  }
  ul {
    display: inline;
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  li {
    list-style: none;
    width: 100%;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 10px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
    text-align: center;
    cursor: pointer;
  }

  .invitation-enter-from {
    opacity: 0;
    transform: scale(0.5);
  }

  .invitation-enter-to {
    opacity: 1;
    transform: scale(1);
  }

  .invitation-enter-active {
    transition: all 0.5s ease;
  }
  .invitation-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .invitation-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .invitation-leave-active {
    transition: all 0.5s ease;
    position: absolute;
  }

  .invitation-move {
    transition: all 0.5s ease;
  }
</style>
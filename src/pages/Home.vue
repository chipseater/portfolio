<template>
    <Particles>
        <div class="flex items-center w-full h-screen flex-col text-4xl text-center justify-center">
            <div>
                Salut, je m'appelle <span class="text-primary">Eric de Malet</span>
            </div>
            <div class="flex justify-center text-center flex-wrap">
                Je suis lycéen en Terminale générale, spécialités <span class="text-primary">Maths - NSI</span>
            </div>
            <Button>En savoir plus</Button>
        </div>
        <Nav />
        <MySkills />
    </Particles>
</template>

<script setup>
import Particles from '../components/Particles.vue'
import Button from '../components/Button.vue'
import Nav from '../components/Nav.vue'
import MySkills from '../components/MySkills.vue'
</script>
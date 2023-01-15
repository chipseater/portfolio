<template>
    <Particles>
        <div class="flex items-center w-full h-screen flex-col text-4xl justify-center">
            <div>
                Salut, je m'appelle&nbsp;<Highlight>Eric de Malet</Highlight>
            </div>
            <div>
                Je suis lycéen en Terminale générale, spécialités <Highlight>Maths - NSI</Highlight>
            </div>
            <Button>En savoir plus</Button>
        </div>
    <Nav />
    </Particles>
</template>

<script setup>
import Particles from '../components/Particles.vue'
import Highlight from '../components/Highlight.vue'
import Button from '../components/Button.vue'
import Nav from '../components/Nav.vue'
</script>
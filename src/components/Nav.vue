<template>
    <div class="bg-gray-900 w-full p-4 text-xl border-b-4 border-primary text-gray-200">
        <ul class="flex">
            <li ref="homeRef" class="mx-4 cursor-pointer">Accueil</li>
            <li ref="aboutRef" class="mx-4 cursor-pointer">À propos</li>
            <li ref="myProjectsRef" class="mx-4 cursor-pointer">Mes projets</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const homeRef = ref(null)
const aboutRef = ref(null)
const myProjectsRef = ref(null)
const value = window.pageYOffset
const screenHeight = screen.height

function applyStyleOnElement(elementRef) {
    [homeRef, aboutRef, myProjectsRef].forEach(el => {
        if (el.value != null) el.value.classList.remove('text-primary')
    })
    elementRef.value.classList.add('text-primary')

}
document.onscroll = () => {
    switch (Math.floor(value/screenHeight)) {
        case 0: applyStyleOnElement(homeRef);break
        case 1: applyStyleOnElement(aboutRef);break
        case 1: applyStyleOnElement(myProjectsRef);break
    }
}
    
</script>
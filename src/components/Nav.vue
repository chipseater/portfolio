<template>
    <div ref="bar" class="bg-gray-900 backdrop-opacity-50 fixed w-full p-4 text-lg md:text-xl border-b-4 border-primary text-gray-200">
        <ul class="flex">
            <li ref="homeRef" class="mx-4 cursor-pointer"><a href="#">Accueil</a></li>
            <li ref="mySkillsRef" class="mx-4 cursor-pointer"><a href="#my-skills">Mes compétences</a> </li>
            <li ref="myProjectsRef" class="mx-4 cursor-pointer">Mes projets</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const homeRef = ref(null)
const mySkillsRef = ref(null)
const myProjectsRef = ref(null)
const bar = ref(null)

function applyStyleOnElement(elementRef) {
    [homeRef, mySkillsRef, myProjectsRef].forEach(el => {
        if (el.value != null) el.value.classList.remove('text-primary')
    })
    if (elementRef.value != null)
        elementRef.value.classList.add('text-primary')

}
document.onscroll = () => {
    if (window.pageYOffset < window.innerHeight) {
        bar.value.classList.add('sticky')
        bar.value.classList.add('top-0')
    } else {
        bar.value.classList.remove('sticky')
        bar.value.classList.remove('top-0')
    }

    switch (Math.floor(window.pageYOffset/window.innerHeight)) {
        case 0: 
            applyStyleOnElement(homeRef)
            break
        case 1: 
            applyStyleOnElement(mySkillsRef)
            console.log('hi')
            break
        case 2: 
            applyStyleOnElement(myProjectsRef)
            break
    }
}
    
</script>
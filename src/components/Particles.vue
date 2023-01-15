<script setup>
    import Particles from '@gregorydorrifourt/particles'
    import { onMounted } from 'vue'

    onMounted(() => {
        const particles = new Particles({
            element: 'particles-background',
            contain: true,
            fullscreen: true,
            threshold: 150,
            addParticleOnClick: true,
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    onclick: {
                        enable: true,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 800,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 800,
                        size: 80,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 400,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            color: '#2f8ef5',
            particlesForScreenWidths: {
                small: 70,
                medium: 100,
                large: 150,
            },
        })
        particles.render()
    })
</script>

<template>
    <canvas
        class="w-screen h-screen bg-gray-800 fixed z-[-10] top-0 left-0"
        id="particles-background"
    />
    <div class="w-screen h-screen text-white align-bottom scale-[1] opacity-1">
        <slot />
    </div>
</template>
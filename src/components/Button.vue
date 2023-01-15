<template>
    <div class="border-4 m-4 group text-xl p-4 cursor-pointer flex items-center hover:bg-primary hover:border-primary transition-color duration-100">
        <slot />&nbsp;
        <span class="material-symbols-outlined group-hover:rotate-90 transition-transform duration-500">
            arrow_forward
        </span>
    </div>
</template>
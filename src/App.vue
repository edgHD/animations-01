<template>
  <router-view v-slot="slotProps">
    <transition name="route">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<style>
.route-enter-active {
    animation: routerAnimation 0.3s ease-out;
}
.route-leave-active {
    animation: routerAnimation 0.3s ease-in reverse;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

@keyframes routerAnimation {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
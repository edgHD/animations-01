<template>
  <div class="container">
    <div class="block" :class="{'animate': animatedBlock, 'reverse-animate': !animatedBlock && reverseAnimatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      reverseAnimatedBlock: false,
      dialogIsVisible: false 
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
      this.reverseAnimatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* background-color: #e6ad11;
  border-radius: 50%;
  transform: translateX(-100px); */
  animation: slide-zoom-circle-it 1s forwards;
}

.reverse-animate {
  animation: reverse-slide-zoom-circle-it 1s forwards;
}

@keyframes slide-zoom-circle-it {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    background-color: #e6ad11;
    border-radius: 50%;
    transform: translateX(-50px) scale(1.2);
  }
  100% {
    background-color: #004f63;
    border-radius: 20%;
    transform: translateX(-100px) scale(0.75);
  }
}

@keyframes reverse-slide-zoom-circle-it {
  0% {
    background-color: #004f63;
    border-radius: 20%;
    transform: translateX(-100px) scale(0.75);
  }
  50% {
    background-color: #e6ad11;
    border-radius: 50%;
    transform: translateX(-50px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
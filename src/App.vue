<template>
  <div class="container">
    <div class="block" :class="{'animate': animatedBlock, 'reverse-animate': !animatedBlock && reverseAnimatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="paragraph"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <p v-if="paragraphisVisible">
      This is only sometimes visible...</p>
    </transition>
    <button @click="toggleParagraph">{{ !paragraphisVisible ? "Show" : "Hide" }} paragraph</button>
  </div>
    <base-modal @close="hideDialog" :open="dialogIsVisible">
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
      dialogIsVisible: false,
      paragraphisVisible: false,
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
    toggleParagraph() {
      this.paragraphisVisible = !this.paragraphisVisible;
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
    },
    enter(el) {
      console.log('enter');
      console.log(el);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
    },
    leave(el) {
      console.log('leave');
      console.log(el);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
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

.paragraph-enter-active {
  animation: paragraphAnimation 0.3s ease-out;
}

.paragraph-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: paragraphAnimation 0.3s ease-in reverse;
}

/* Animation for Paragraph */
@keyframes paragraphAnimation {
  from {
    opacity: 0;
    transform: translateY(-3rem) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation for Block*/
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
/* Reverse Animation for Block*/
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
<template>
    <ul>
        <transition-group name="item">
            <li v-for="item in sampleList" :key="item" @click="removeItem(item)">
                {{ item }}
            </li>
        </transition-group>
    </ul>
    <div>
        <button @click="addItem">Add Item</button>
    </div>
</template>

<script>
export default {
    emits: ['addItem'],
    data() {
        return {
            sampleList: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
                'Item 5'
            ],
        };
    },
    methods: {
        addItem() {
            const newItem = `Item ${this.sampleList.length + 1}`;
            this.sampleList.push(newItem);
        },
        removeItem(item) {
            const index = this.sampleList.indexOf(item);
            if (index > -1) {
                this.sampleList.splice(index, 1);
            }
        },
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

li {
    padding: 10px;
    background-color: #f0f0f0;
    margin: 5px 5px;
    border-radius: 4px;
    width: fit-content;
    display: inline-flex;
    cursor: pointer;
}

.item-enter-active {
    animation: itemAnimation 0.5s ease-out;
}
.item-leave-active {
    animation: itemAnimation 0.5s ease-in reverse;
}

@keyframes itemAnimation {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
<template>
    <div class="container">
        <h1>All Items</h1>
        <ListData />
        <RouterLink to="/"><button class="router-btn">Go to Home</button></RouterLink>
    </div>
</template>
<style>
.router-btn {
    margin: 10px;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
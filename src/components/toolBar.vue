<template>
    <div class="header">
        <router-link to="/finedust">미세먼지</router-link> &nbsp;|&nbsp;
        <router-link to="/weather">날씨예보</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: skyblue;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    padding: 8px;
    }
.header .router-link-exact-active {
    color: rgb(68, 68, 192);;
    text-decoration: none;
}
.header a {
    color:white;
    text-decoration: none;
}
</style>
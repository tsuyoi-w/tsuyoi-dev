<template>
  <header>
    <RouterLink id="rt" to="/">Tsuyoi - Lenny</RouterLink>
    <RouterLink id="rt" to="/"> <img src="/Logo/t.png" alt="T majuscules logo" /></RouterLink>
    <RouterLink id="rt" to="/project">project</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup></script>

<style>
@font-face {
  font-family: 'jet';
  src: url('/JetBrainsMono-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

*::-webkit-scrollbar {
  display: none;
}

* {
  background-color: black;
  margin: 0px;
  list-style: none;
  padding: 0px;
  text-decoration: none;
  color: white;
  font-family: 'jet';
}

body {
  background: url('/bg.jpg') no-repeat center center;
  background-size: cover;
}

header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  font-size: 30px;
  border-bottom: solid white 5px;
}

li {
  background-color: black;
  margin: 20px;
  height: 50px;
  border: solid white 3px;
  font-size: 30px;
  font: bold;
}

li a {
  position: relative;
  top: 5px;
  left: 5px;
}

ul {
  display: flex;
  align-items: center;
  flex-direction: column;
}

ul li {
  width: 90vw;
}

.admin {
  position: relative;
  left: 650px;
}

#rt {
  margin: 10px;
}
</style>

<template>
  <v-app>
    <nav>
			<ul>
				<li class='ease-in'>Introduction</li>
				<li class='ease-in'>Work</li>
				<li class='ease-in'>Stuff</li>
				<li class='ease-in'>Stuff</li>
			</ul>
    </nav>
    <router-view/>
	</v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ease-in {
	-webkit-transition: all 0.2s ease;
	-moz-transition: all 0.2s ease;
	-ms-transition: all 0.2s ease;
	-o-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
main {
	width:100%;
	max-width:1200px;
	height:100%;
	display:block;
	position:relative;
	left:0;
	right:0;
	margin:0 auto;
}
nav {
	position:fixed;
	top:5px;
	right:5px;
	z-index:999;
}
nav ul {
	list-style:none;
	transform-origin: left bottom;
	transform: skewY(4deg);
}
nav ul li {
	display:block;
	padding:10px;
	padding-bottom:0px;
	opacity:0.3;
	color: #2137c0;
	font-weight:bold;
}
nav ul li:last-child {
	padding-bottom:10px;
}
nav ul li:hover {
	cursor:pointer;
}
nav ul li:hover, nav ul li:focus {
	opacity: 1;
}
.full-width > .v-parallax__image-container {
	width: 100%;
}
</style>

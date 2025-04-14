/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// main.js\n\n// Function to toggle the mobile navigation menu\nconst toggleMenu = () => {\n  const nav = document.querySelector('.nav');\n  nav.classList.toggle('active');\n};\n\n// Function to handle smooth scrolling to sections\nconst smoothScroll = target => {\n  const element = document.querySelector(target);\n  element.scrollIntoView({\n    behavior: 'smooth'\n  });\n};\n\n// Event listener for menu toggle\ndocument.querySelector('.menu-toggle').addEventListener('click', toggleMenu);\n\n// Event listeners for smooth scrolling\ndocument.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n  anchor.addEventListener('click', function (e) {\n    e.preventDefault();\n    smoothScroll(this.getAttribute('href'));\n  });\n});\n\n// Dynamic content update example\nconst updateContent = () => {\n  const contentArea = document.querySelector('.dynamic-content');\n  contentArea.innerHTML = '<p>This content was updated dynamically!</p>';\n};\n\n// Call the function to update content on page load\nwindow.onload = updateContent;\n\n//# sourceURL=webpack://modern-website/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
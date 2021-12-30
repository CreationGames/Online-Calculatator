let Equal = document.getElementById("equal")
let clear = document.getElementById("clear")
let one = document.getElementById("num1")
let two = document.getElementById("num2")
let three = document.getElementById("num3")
let four = document.getElementById("num4")
let five = document.getElementById("num5")
let six = document.getElementById("num6")
let seven = document.getElementById("num7")
let eight = document.getElementById("num8")
let nine = document.getElementById("num9")
let zero = document.getElementById("num0")
let Filler = document.getElementById("full")
let divide = document.getElementById("divide")
let multi = document.getElementById("multi")
let add = document.getElementById("add")
let sub = document.getElementById("sub")

let first = 0
let second = 0
let whatSum = "+"


one.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 1
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 1 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 1
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 1 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 1
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 1 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 1
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 1
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 1
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 1 
    console.log(second + "second")
  }
  Filler.innerHTML += one.innerHTML
})
two.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 2
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 2 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 2
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 2 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 2
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 2 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 2
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 2 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 2
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second = second * 10 + 2 
    console.log(second + "second")
  }
  Filler.innerHTML += two.innerHTML
})
three.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 3
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 3 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 3
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 3 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 3
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 3
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 3
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 3 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 3
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 3
    console.log(second + "second")
  }
  Filler.innerHTML += three.innerHTML
})
four.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 4
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 4 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 4
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 4 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 4
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 4 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 4
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 4 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 4
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 4 
    console.log(second + "second")
  }
  Filler.innerHTML += four.innerHTML
})
five.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 5
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 5 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 5
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 5 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 5
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 5 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 5
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 5 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 5
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 5
    console.log(second + "second")
  }
  Filler.innerHTML += five.innerHTML
})
six.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 6
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 6 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 6
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 6
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 6
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 6 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 6
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 6 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 6
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 6
    console.log(second + "second")
  }
  Filler.innerHTML += six.innerHTML
})
seven.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 7
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 7 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 7
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 7 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 7
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 7 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 7
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 7 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 7
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 7
    console.log(second + "second")
  }
  Filler.innerHTML += seven.innerHTML
})
eight.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 8
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 8 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 8 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 8
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 8 
    console.log(second + "second")
  }
  Filler.innerHTML += eight.innerHTML
})
nine.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 9
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = first * 10 + 9 
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 9
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = second * 10 + 9 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 9
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = second * 10 + 9 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 9
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = second * 10 + 9 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 9
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second =  second * 10 + 9
    console.log(second + "second")
  }
  Filler.innerHTML += nine.innerHTML
})
zero.addEventListener("click", (e) => {
  e.preventDefault()
  if(Filler.innerHTML == ""){
    first = 0
    console.log(first + "first") 
  }else if(Filler.innerHTML == first) {
    first = (first + 10 - first) * first
    console.log(first + "first")
  }else if(Filler.innerHTML == first + "+" ){
    second = 0
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "+" + second) {
    second = (second + 10 - second) * second 
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" ){
    second = 0
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "-" + second) {
    second = (second + 10 - second) * second
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" ){
    second = 0
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "x" + second) {
    second = (second + 10 - second) * second
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." ){
    second = 0
    console.log(second + "second")
  }else if(Filler.innerHTML == first + "'/." + second) {
    second = (second + 10 - second) * second
    console.log(second + "second")
  }
  Filler.innerHTML += zero.innerHTML
})

add.addEventListener("click", (e) => {
  e.preventDefault()
  Filler.innerHTML += add.innerHTML
  console.log(Filler.innerHTML)
  whatSum = "+"
  console.log(first+ "first")
})

sub.addEventListener("click", (e) => {
  e.preventDefault()
  Filler.innerHTML += sub.innerHTML
  console.log(Filler.innerHTML)
  whatSum = "-"
})

multi.addEventListener("click", (e) => {
  e.preventDefault()
  Filler.innerHTML += multi.innerHTML
  console.log(Filler.innerHTML)
  whatSum = "x"
})

divide.addEventListener("click", (e) => {
  e.preventDefault()
  Filler.innerHTML += divide.innerHTML
  console.log(Filler.innerHTML)
  whatSum = "/"
})

Equal.addEventListener("click", (e) => {
  e.preventDefault()
  if(whatSum == "+") {
    Filler.innerHTML = first + second
  }else if(whatSum == "-") {
    Filler.innerHTML = first - second
  }else if(whatSum == "x") {
    Filler.innerHTML = first * second
  }else if(whatSum == "/") {
    Filler.innerHTML = first / second
  }

  first = Filler.innerHTML
  second = 0
  console.log(first+ "first")
})

clear.addEventListener("click", (e) => {
  e.preventDefault()
  Filler.innerHTML = ""
  second = 0
  first = 0
})
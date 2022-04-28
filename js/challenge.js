const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const comment_form = document.querySelector('#comment-form')
const comments = document.querySelector('#list')
let paused = false
let numberTracker = {}
//Timer
let interval = setInterval(incrementCounter, 1000)
//Event listeners
plus.addEventListener('click', incrementCounter)
minus.addEventListener('click', decrementCounter)
pause.addEventListener('click', hitPause)
heart.addEventListener('click', addLike)
comment_form.addEventListener('submit', handleSubmit)

//Increase count on click
function incrementCounter() {
  counter.innerText = parseInt(counter.innerText) +1
}
//Decrease count on click
function decrementCounter() {
  if (counter.innerText >0) {
  counter.innerText = parseInt(counter.innerText) -1
  }
}

//pause timer
function hitPause(){
  paused = !paused
  if (paused) {
    clearInterval(interval)
    pause.innerText = 'resume'
  } else {
    interval = setInterval(incrementCounter, 1000)
    pause.innerText = 'pause'
  }
}

function addLike(){
  let seconds = counter.innerText
  // check if the element we need exists yet (??)
  numberTracker[seconds] = numberTracker[seconds]  || 0
  numberTracker[seconds] += 1
  showLikes()
}

function showLikes(){
  likes.innerHTML = ""
  for (let key in numberTracker){
    const li = document.createElement('li')
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
  }
}

function handleSubmit(event){
  event.preventDefault()
  let comment = event.target.querySelector('input').value
  let li = document.createElement('li')
  li.innerText = comment
  comments.append(li)
  event.target.reset()
}
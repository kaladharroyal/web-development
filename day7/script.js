// text content
const textvisible = document.getElementById("textvisible")
if (textvisible) {
    textvisible.textContent = "this is visible text"
}

// innerHTML
const hello = document.getElementById("hello")
hello.innerHTML = "<h1>Hello class division</h1>"

// multiple lines
const new1 = document.getElementById("new")
new1.innerHTML = `
    <h1>hello</h1>
    <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolore, quos. Iusto quam alias veritatis molestiae eveniet aspernatur quasi numquam beatae unde enim quod accusamus ipsum,
    libero porro? Facilis, 
    enim repudiandae!</pre>
    <img src="../day1/images/krishna.jpg" alt="" height = "200px" width = "200px">
`

// create a new div
const maindiv = document.getElementById("maindiv")
const card = document.createElement("div")
card.innerHTML = "<h1>This is the appended text</h1>"
maindiv.appendChild(card)

// set attribute (better with class)
const set1 = document.getElementById("card1")
set1.classList.add("set1")
set1.innerHTML = "<h1>This is the appended text</h1>"

// addEventListener alert
const alertbtn = document.getElementById("alertbtn")
alertbtn.addEventListener('click', () => {
    const name = "Adam"
    alert(`hello ${name}`)
})

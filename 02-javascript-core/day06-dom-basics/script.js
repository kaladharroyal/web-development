//getElementByElementName
const para = document.getElementById("para")
console.log(para)
para.style.backgroundColor = "yellow"
para.style.color = "red"
para.style.padding = "20px"
para.style.borderRadius = "8px"

//getElementByClassName
const class1 = document.getElementsByClassName("container");
console.log(class1);
for (i = 0; i<class1.length;i++){
    class1[i].style.backgroundColor = "blue"
    class1[i].style.borderRadius = "8px"
    class1[i].style.color = "pink"
    class1[i].style.padding  = "20px"
    class1[i].style.border  = "2px solid black"
    class1[i].style.margin = "10px"
}

//getElementByTagName
const btn = document.getElementsByTagName("button")

btn[0].style.color = "black"
btn[2].style.color = "red"
btn[0].style.fontFamily = "lucida calligraphy"

//Query selector 

document.querySelector(".con").style.backgroundColor = "red"
document.querySelector(".btn").style.backgroundColor = "red"

//queryselectorall

const container = document.querySelectorAll(".container")
console.log(container);
container.forEach((item)=>{
    item.style.backgroundColor = "blue"
    item.style.border = "2px solid black"
    item.style.borderRadius = "8px"
})


const button1 = document.querySelectorAll(".btn")
console.log(button1);
button1.forEach((item)=>{
    item.style.borderRadius = "8px"
    item.style.color = "red"
    item.style.backgroundColor = "green"
    item.style.fontFamily = "lucida calligraphy"
    item.style.padding = "10px"
    item.style.margin = "10px"
    item.style.display = "flex"
})

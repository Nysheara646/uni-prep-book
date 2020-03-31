let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
  {
    profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2Fme3.jpg?v=1585098986434",
     name:"Name: Yunaivi Rosa",
    quote: "Quote: “Kindness is the language which the deaf can hear and the blind can see.”",
  superlative:"Superlative: Most Friendly"
  },
  {
  profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F91029693_670150930404679_9008089644411125760_n.jpg?v=1585108620831",
     name:"Name: Fauziya Bukari",
    quote: " Quote: “The purpose of our lives is to be happy.”",
  superlative: " Superlative: Best Smile"
  },
  {
   profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90880725_1560591957428924_546186223618621440_n.jpg?v=1585108678959",
     name:"Name: Keiry Martinez",
    quote: "Quote: “Not everyone you love will stay, not everyone you trust will be loyal. Some people only exist as examples of what to avoid.”",
  superlative: "Superlative: The Most Caring"
  },
  
  {
   profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90774579_635380427011460_449943922139987968_n.jpg?v=1585106307957",
     name:" Name: Eric Castro",
    quote: " Quote: “Get busy living or get busy dying.”",
  superlative: " Superlative: Best Facial Features"
  },
  {
   profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90743334_1087958231577471_6364466608626204672_n.jpg?v=1585106530169",
     name:"Name: Naomi Carrero",
    quote: " Quote: “When it rains look for a rainbow when it's dark look for a star.”",
  superlative: " Superlative: Best Hair"
  },
   {
   profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90724657_259718661724219_1489634858870243328_n.jpg?v=1585106907066",
     name:"Name: Alvena Grant-Pulley",
    quote: " Quote: “We are most alive when we're in love.”",
  superlative: " Superlative: Best Coder"
  },
  {
  profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90878702_663679424384596_6248085609223553024_n.jpg?v=1585110783424",
     name:"Name: Cecilia Blanco",
    quote: "Quote: “Sometimes we just need to be alone, to heal on our own”",
  superlative: "Superlative: Most Dramatic"
  },
    {
   profileImage:"https://cdn.glitch.com/a60c8e3c-0705-4e62-a052-6c9728aa4027%2F90776452_902377600182346_6305669661690167296_n.jpg?v=1585108743405",
     name:"Name: Thierno Diallo",
    quote: "Quote: “A small step is still a step”",
  superlative: "Superlative: Best Personality"
  }
]

let count = 0
 document.querySelector ("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML= students[count].name

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
   if(count > students.length - 1){
    count = 0
   }
  console.log(count)
  document.querySelector ("#pic"). src = students[count].profileImage
  document.querySelector("#name").innerHTML=students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
 document.querySelector("#superlative").innerHTML= students[count].superlative
   if(count == students.length - 1){
    count = -1
   }
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
   if(count == -1){
    count = students.length - 1
  }
  console.log(count)
  document.querySelector ("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML= students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML= students[count].superlative
if(count > students.length - 1){
    count = -1
  }
})

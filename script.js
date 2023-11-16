function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Aninhaaa.png")
    // html.classList.remove("light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    //html.classList.add("light")
  }
}

// class Pessoa {
//   name
//   sexo
//   dtNascimento

//   constructor(name, sexo, dtNascimento) {
//     this.name = name
//     this.sexo = sexo
//     this.dtNascimento = dtNascimento
//   }

//   idade() {
//     return new Date().getFullYear() - this.idade
//   }

//   falar() {
//     console.log(this.name + "falou")
//   }

// }

// let fernando = new Pessoa("Fernando","M",1991)
// fernando.idade()

// {
//   "name": "Fernando",
//   ...
// }

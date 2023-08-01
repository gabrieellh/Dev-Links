function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  /* Mudar texto alternativo da imagem, quando o tema for mudade para o light mode.*/

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de Gabriel Henrique quando o tema é mudado pra o branco."
    )
  } else {
    alt.setAttribute(
      "Foto de perfil de Gabriel Henrique no Github, no modo escuro."
    )
  }
}

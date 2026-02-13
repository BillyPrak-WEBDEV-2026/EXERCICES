function getRandomString(array: Array<String>): String {
  return array[Math.floor(Math.random() * array.length)]
}

export function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" className="logo react" alt="React logo" />
        <h1>Bienvenue sur mon app React</h1>
        <h2>Cette page utilise {getRandomString(["React", "TypeScript", "Vite", "CSS", "HTML"])}<br /></h2>
    </header>
  )
}
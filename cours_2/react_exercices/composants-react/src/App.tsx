import { type FC, useState } from 'react'
import './App.css'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { CoreConcept } from '../components/CoreConcept'
import { TabButton } from '../components/TabButton'
import { CORE_CONCEPTS, EXAMPLES} from './data'

const App: FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("empty")

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName)
  }

  const tabContent = EXAMPLES[selectedButton as keyof typeof EXAMPLES]

  return (
    <div>
      <Header />
      <Main />
      <section id="core-concepts">
        <h2>Concepts Importants</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept key={concept.title} {...concept} />
          ))}
        </ul>
      </section>

      <section id="examples">
        <h2>Exemples</h2>
        <menu style={{ listStyle: "none", padding: 0 }}>
            {Object.keys(EXAMPLES).filter((key) => key !== "empty").map((key) => (
            <TabButton key={key} onClick={() => handleButtonClick(key)}>
              {key}
            </TabButton>
            ))}
        </menu>
        <div id="tab-content">
          <h3>{tabContent.title}</h3>
          <p>{tabContent.description}</p>
          <pre><code>{tabContent.code}</code></pre>
        </div>
      </section>
    </div>  
  )
}

export default App

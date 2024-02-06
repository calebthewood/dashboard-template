import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PanelLayout from './components/layout/panel-layout'
import CategoryNav from './components/navigation/category-nav'
import { useState } from 'react'

function App() {
  const [displayedCategory, setDisplayedCategory] = useState(0);

  const categories = [
    "energy",
    "food",
    "housing",
    "education",
    "climate",
    "tourism",
    "military",
    "state"
  ];

  function changeCategory(i: number) {
    setDisplayedCategory(i)
  }

  return (
    <PanelLayout>
      <a href="#" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h2>Nav Panel A</h2>
      <CategoryNav changeCategory={changeCategory} categories={categories} />
      <div>
        <h2 className="capitalize text-2xl">{categories[displayedCategory]}</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>Context Panel</h2>
      <h2>Bottom Panel</h2>
    </PanelLayout>
  )
}

export default App

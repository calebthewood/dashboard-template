import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PanelLayout from './components/layout/panel-layout'
import CategoryNav from './components/navigation/category-nav'

function App() {


  return (
    <PanelLayout>
      <h2>Logo Panel</h2>
      <h2>Nav Panel A</h2>
      <h2><CategoryNav /></h2>
      <h2><div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      </h2>
      <h2>Context Panel</h2>
      <h2>Bottom Panel</h2>
    </PanelLayout>
  )
}

export default App

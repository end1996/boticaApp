import './App.css'
import { SideMenu } from './components/shared/sidemenu/SideMenu'
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 sm:ml-64">
        <Outlet />
      </div>
    </div>
  )
}

export default App

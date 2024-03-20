import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div style={{ maxWidth: '1722px', width: '100%', margin: '0 auto' }}>
        <Outlet/>
    </div>
  )
}

export default App;
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header/>
      <div style={{ maxWidth: '1722px', width: '100%', margin: '0 auto', padding: '0 5px'}}>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
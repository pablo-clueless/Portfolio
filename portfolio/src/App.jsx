import { useStateContext } from './hooks'
import Router from './router'

const App = () => {
  const {mode} = useStateContext()

  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <Router />
    </div>
  )
}

export default App
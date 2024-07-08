
import ReactDOM from 'react-dom/client'

import './styles.css'
import { Provider } from 'react-redux'
import store from './store/store'
import PokeApp from './PokeApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
        <PokeApp/>
    </Provider>
  
)

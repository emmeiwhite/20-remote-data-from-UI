import { ToastContainer } from 'react-toastify'

import Form from './Form'
import Items from './Items'
import ItemsContextProvider from './ItemsContext'

const App = () => {
  return (
    <section className="section-center">
      <ItemsContextProvider>
        <ToastContainer position="top-center" />
        <Form />
        <Items />
      </ItemsContextProvider>
    </section>
  )
}
export default App

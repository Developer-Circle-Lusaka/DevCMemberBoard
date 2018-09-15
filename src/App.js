import React, { Component ,} from 'react'
import 'antd/dist/antd.css'
import {Provider} from 'react-redux'
import configStore from './config/store'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
const store= configStore()
class AppRouterComponent extends Component {


    render() {
        return (
       <div>
           <BrowserRouter>
            <Switch>
                <Route path='/'/>
                <Route path='/'/>
            </Switch>
           </BrowserRouter>

       </div>

           
        )
    }
}

const App=()=>(
    <Provider store={store}>
       <AppRouterComponent/>
    </Provider>
)


export default App
import React, { Component ,} from 'react'
import {Provider} from 'react-redux'
import configStore from './config/store'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import RegisterComponent from './components/pages/auth/Register'
import NavBar from './components/widgets/navigation/NavBar'
import UIkit from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';

const store= configStore()
class AppRouterComponent extends Component {


    render() {
        return (
          <span>

<NavBar/>
 <BrowserRouter>
            <Switch>
                <Route exact path='/register' component={RegisterComponent}/>
            </Switch>
           </BrowserRouter>
          </span>
          

    

           
        )
    }
}

const App=()=>(
    <Provider store={store}>
       <AppRouterComponent/>
    </Provider>
)


export default App
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useState} from "react";

import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import MainPage from "./components/MainPage.js";
import NewEntrance from "./components/NewEntrance.js";
import NewExit from "./components/NewExit.js";

function App(){
    const [user, setUser] = useState([])


    return(
        <>
            <BrowserRouter> 
			<Switch>
				<Route path="/" exact>
                    <Login />
				</Route>
                <Route path="/sign-up" exact>
                    <SignUp />
				</Route>
                <Route path="/main-page" exact>
                    <MainPage />
				</Route>
                <Route path="/entrance" exact>
                    <NewEntrance />
				</Route>
                <Route path="/exit" exact>
                    <NewExit />
				</Route>
			</Switch>
		    </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
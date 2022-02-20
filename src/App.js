import { Provider } from "react-redux";
import { Router } from "./components/Router";
import { store } from "./store";

const App = () => (
<Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router />
    </PersistGate>
</Provider>
);


export default App;



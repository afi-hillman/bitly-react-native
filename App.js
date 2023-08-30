import AppNavigator from "./src/navigation";
import AuthContextProvider from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <AppNavigator />
    </AuthContextProvider>
  );
};

export default App;

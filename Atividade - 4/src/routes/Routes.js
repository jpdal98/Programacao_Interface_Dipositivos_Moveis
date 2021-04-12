import Home from '../views/Home';
import Sobre from '../views/Sobre';
import Cadastro from '../views/Cadastro';
import IMC from '../views/IMC';
import Resultado from '../views/Resultado';
 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
    Sobre,
    Cadastro,
    IMC,
    Resultado
  },
  { initialRouteName: 'Home'}
  )
);

export default Routes;
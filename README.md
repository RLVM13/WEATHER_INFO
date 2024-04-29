# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Ejercicio WEATHER INFO
Vamos a practicar useEffect y asincronía con React

Un Componente WeatherList que recorra una lista de items con la información del pronóstico extendido de los próximos días.
Un Componente WeatherCard que contenga la información meteorológica de las próximas horas ese día (horario, temperatura, estado del tiempo (ej: clear, clouds, rain))
Un formulario con input + botón para buscar una ciudad en concreto.
Flujo de esta vista:
En esta vista se mostrará por defecto el pronóstico extendido de Madrid. Al introducir una nueva ciudad en el input de tipo texto y hacer click en el botón, la información se actualizará con los datos correspondientes a la ciudad buscada.
EXTRA 1: Agregar al componente una imágen que ilustre el estado del tiempo de cada día.
EXTRA 2: En la primera carga de datos de esta vista, reemplazar Madrid por la geolocalización actual del usuario.
TIP: usad el paquete de NPM UUID para manejar las keys de los diferentes elementos de la lista.

UUID
Sobre formularios
API Weather | 3-hour Forecast 5 days


PARA USAR ARCHIVOS .ENV HAY QUE SEGUIR 4 PASOS
----------------------------------------------
npm install dotenv --save
require('dotenv').config()

// contents of .env
REACT_APP_API_KEY = 'my-secret-api-key'

Finally, add .env to your .gitignore file so that Git ignores it and it never ends up on GitHub.
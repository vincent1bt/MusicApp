#Music App

App hecha con react que te entrega nuevos lanzamientos y la posibilidad de buscar algun artista, el servidor esta hecho con ruby y sinatra que se conecta a la [API](https://developer.spotify.com/) de spotify para obtener la información.

###Requerimientos

Dos variables de entorno:

- ENV["SP____CLIENT____SECRET"]
- ENV["SP____CLIENT____ID"]

con los valores que se obtienen de la api de spotify.

En la carpeta frontend:

- npm install
- webpack


####Librerias

- React
- Webpack
- Superagent
- jest (Para realizar pruebas a los componentes en react)
- enzyme (hace el ambiente de test mas amigable)
- babel
- sinatra
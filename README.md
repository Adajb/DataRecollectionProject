# Data Recollection Project

## Client

### Description

El proyecto "Data Collection Project" es una aplicación diseñada para facilitar la gestión de formularios y la visualización de respuestas de manera dinámica. Esta herramienta permite a los usuarios crear formularios personalizados, recopilar datos y analizar los resultados de forma eficiente. A continuación, se presenta el desarrollo del proyecto, centrándonos en el FRONTEND
Este proyecto esta creado con JavaScript utilizando `React.js` con las siguientes views:
```
Página de inicio.
Página de gestión de formulario.
Página de formulario.
Pagina de respuesta. 
```

### Setup
La configuración del proyecto fue la siguiente:

`Node.js`

Se utilizaron las siguientes librerías:
```json
"axios": "1.4.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-hook-form": "7.45.1",
"react-router-dom": "6.14.1"
```


### Prerequisite 
Para la variable. env es indispensable que utilices lo siguiente:
```
VITE_API_URL="http://localhost:8000"
```

### Usage 
Puedes correr este proyecto usando los siguientes comandos:
```ps
npm install 
npm run dev
```

## Server

### Description
El proyecto "Data Collection Project" es una aplicación diseñada para facilitar la gestión de formularios y la visualización de respuestas de manera dinámica. Esta herramienta permite a los usuarios crear formularios personalizados, recopilar datos y analizar los resultados de forma eficiente. A continuación, se presenta el desarrollo del proyecto, centrándonos en el backend.
Este proyecto esta creado con Python utilizando Django y DjangoRestFramework (DRF) con los siguientes endpoints:
```
GET /forms
POST /forms
PUT /forms/:id.
DELETE /forms/:id.
GET /responses.
POST /responses
```

### Setup
La configuración del proyecto fue la siguiente:

`Python 3.9`

Se utilizaron las siguientes librerías:
```txt
Django 4.2.3
Djangorestframework 3.14.0
drf-yasg 1.21.6
```

Para trabajar en Windows utiliza lo siguiente:
```ps
cd app # Change directory
py -m venv env # Create a virtual enviroment
pip install -r requirements.txt # Install Dependencies libraries
```

### Prerequisite 
Necesitaras el siguiente archivo para la variable de entorno `.env`
```
SECRET_KEY='django-insecure-yspj#lt5_crqtqxwr#1&+s6y9x$u38&-$6rls=!lztrih%kzk5'
DEBUG=True
```

### Usage 
Puedes correr este proyecto usando los siguientes comandos:
```ps
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
# Individual Project - Henry Foods
![comidas](https://github.com/Jpenagos32/PI-Food-main/assets/111212922/3530b10a-7c6c-41b0-9f9e-246a2c6f08d7)
## Objetivos del proyecto
Crear una aplicación web donde se puedan encontrar diferentes tipos de recetas de cocina, utilizando una API externa(https://spoonacular.com/food-api/console#Dashboard). Y a partir de ella, podemos entre otras cosas:

✅ Buscar recetas

✅ Filtrarlas por tipos de dietas.

✅ Ordenarlas por puntaje y orden alfabetico, de manera ascendente y descendente.

✅ Crear nuevas recetas propias

## Tecnologías utilizadas

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/71c3ab11-6fd1-4ec0-9072-4958bd0eb7d3' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/c1e91cd4-64ef-448b-babc-affda4bc8ce4' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/5dfa8c02-eda9-451e-b172-17bdfa3cbef4' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/56412e1d-072b-461f-9b96-d83abb926571' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/cf9a687e-6eb4-412c-a028-0f31fdb87178' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/ea57dff9-0237-4765-b8ee-69bb3e00eba5' width='64px'>

<img src='https://github.com/Jpenagos32/PI-Food-main/assets/111212922/8680dfcf-8d63-4caf-ad1e-0262f7c6a92d' width='64px'>


## Requisitos para ejecutar localmente

1. Instalar postgres
2. Crear una base de datos con el nombre "food"
3. Dentro de ./PI-Food-back cree un archivo .env con las credenciales, como se muestra a continuación:

```
DB_USER=usuariodepostgres
DB_PASSWORD=pasworddepostgres
DB_HOST=localhost
API_KEY=yourApiKey
```

Reemplazar ```usuario de postgres``` y ```password de postgres``` con tus propias credenciales para conectarte a postgres

## Instalación

Utilice el administrador de paquetes npm para instalar. (Recuerde usar este comando dentro de /PF-Food-front y dentro de /PF-Food-back)

```npm install```

## Ejecutar Local

- FrontEnt: dentro de /PF-Food-front

```npm start```

- BackEnd: dentro de /PF-Food-back

```npm start```

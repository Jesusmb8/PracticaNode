# PracticaNode

La API ha sido generada utilizando express:

    ```
    npx express-generator nodepop --ejs
    ```
1. Es necesario tener la BBDD de mongoDB levantada.
    - Para mac utilizamos: mongodb-macos-x86_64-6.0.4
    - Se puede levantar con:
        ```sh
        ./bin/mongod --dbpath ./data
        ```
2. Para inicializar la BBDD de ejemplo lanzamos:
    ```sh

    ```

3. Para levantar la api, instalamos las dependencias:
    ```sh
    npm install
    ```
    Después para la versión en desarrollo.
    ```sh
    npm run dev
    ```
    Para la versión en producción:
    ```sh
    npm run start
    ```
4. Para conectar con la api, remcomentamos utilizar Postman.
    Aquí algunso ejemplos:
    - [Query ordenada por precio](http://localhost:3030/api/anuncios?sort=precio)
        ```
        http://localhost:3030/api/anuncios?sort=precio
        ```
    - 


Notas:
- El filtro por tag, si indicamos varios aplica un OR. Parece más cómod que los criterios por tags sean los que se indican para poder buscar múltiples artículos buscando por sus tags.
- El filtro por artículo, no distingurá entre mayúsculas y minúsculuas.
    Busacará el texto en la descripción, en cualquier posición, aplicará un contiene.
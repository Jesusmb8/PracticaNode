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
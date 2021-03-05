# node-03-bases

* npm y package.json
* nodemon
* Separamos lógica de nuestro código en diferentes archivos
* Exportamos y requerimos los mismos
* Requerimos módulos de node
* Creamos archivos con el módulo fs
* Instalamos dependencias
* Utilizamos los paquetes de Yargs y Colors

```

Opciones:
  -b, --base        Es la base de la tabla de multiplicar   [número] [requerido]
  -l, --limite      Es el limite del multiplicador        [número] [defecto: 10]
  -v, --visualizar  Muestra tabla en la consola      [booleano] [defecto: false]
      --help        Muestra ayuda                                     [booleano]
      --version     Muestra número de versión                         [booleano]

```

### Para correr este código se debe :
* 1ro hacer npm install
* Las opciones serán visibles corriendo : node index --help

Ej : corriendo el comando -> node index --base 2 --limite 5 --visualizar se podrá ver la tabla del 2 hasta 2 * 5.
Esto a su vez hará que se cree un archivo .txt en la carpeta tablas, con la tabla correspondiente
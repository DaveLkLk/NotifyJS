
# NotifyJS v0.1

NotifyJS es una librería para crear notificaciones en el DOM donde cada una es independiente según su tipo de clase.




## Autor

- [@davidLkLk](https://github.com/daveLkLk)

## License
Este proyecto está licenciado bajo [DaveLkLK]

## Features

- Fácil de usar hasta 6 tipos de clases.
- Opción para usar notificaciones estáticas o temporales
- Permite modificar el título por defecto de la notificación.
- Permite establecer la descripción de la notificación.
- Permite modificar el tiempo de duración en cada notificación temporal.
## Deployment

Descargue el proyecto:

```bash
  git clone <https://github.com/DaveLkLk/NotifyJS.git>
```

Necesitará solo los archivos:
- notify.js
- notify.css
Los archivos adicionales son para probar su funcionamiento antes de integrarlo en su proyecto.


## Preguntas Y Respuestas

#### Cómo puedo integrar notifyJS a mi proyecto? 

Despues de descargar el proyecto, copie y pegue el archivo `notify.css` en la carpeta pública de su servidor, igualmente con el archivo `notify.js` donde agrupa sus **ficheros js**.

#### Cómo uso notifyJS en mi proyecto?

Para usar **`notifyJS`** importe la clase `NotifyModel` y cree una variable para instanciarla, el uso y ejemplos se muestran a continuación:


## Usos/Ejemplos

### En el HTML agregar como hijo directo del body:
```HTML
<div class="container_notify"></div>
```

### En su archivo JavaScript:
```javascript
import { NotifyModel } from '<ruta>/notify.js'

const Notify = new NotifyModel()

function ShowNotify() {
  Notify.title = 'mi título' // string <OPCIONAL>;
  Notify.description = 'descripción'; // string <REQUERIDO>
  Notify.classname = Notify.tipoClase.<CLASE>; // string <REQUERIDO>
  Notify.temporal = false || true // boolean <REQUERIDO>;
  Notify.time = 3000 // number <OPCIONAL>;
  Notify.showNotify(); // Método para rendereizar <REQUERIDO>;
}
ShowNotify()
```


## Support

Para cualquier consulta pueden contactarme a traves de mi email blueplanet98dev@gmail.com


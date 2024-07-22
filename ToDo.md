Corrección Sprint 1:

- en los listados para sort y order comprobar los valores permitidos (mirar mastercalss backend)

- Otros errores

* deleteUserModel no funcionará nunca si tenemos datos (FK al usuario que queremos eliminar)

-HWECHO se permite ejecutar createTaskFamilyController sin estar logueado (no se pasa por el middleware de ruta authenticateToken que comprueba el token en el header de la petición HTTP). Revisar en todo los endpont. Además, este endpont con el DB modificado no está bien.

- DB

* veo que de momento el DB no implementa:

  - la gestión de la repetición de task (ej cada semana). (no creo que tendreis tiempo, no lo implementaría en estas semanas de proyecto que quedan)
  - la gestión de autoevaluación

* Lo que viene requiere la modifica de algunos endpoint que trabajan sobre notes, tasks, family, colors:

* falta endpoint que devuelve la lista de colores
* en creación de un task se indicará la/las family y el color

- ORGANIZACIÓN

* hay una carpeta validations donde se defines eschemas Joi pero luego hay otros que se definen directamente en los controladores (como para signup). Ponerlos todos en validations

- POSTMAN

* en la colleción Postman habían peticiones sin body (como las de recuperación y reset password)

- CONSEJO \*

No implementar endpoint que no podréis gestionar en estas semanas de proyecto. Se pueden dejar para el futuro.

- Nota importante \*

- En los requisitos para obtener el apto no incluí:
  cambio contraseña - varios grupos no entendieron la diferencia entre cambio password y recuperación password.
- Joi en todos los endpoint - implementando Joi en algunos lo di como criterio válido

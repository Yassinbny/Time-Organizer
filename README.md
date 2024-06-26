/**
Para visualizar correctamente las pijadas de las anotaciones: install extension --> Better Comments

# Time-Organizer

Aplicación tipo agenda para organizar el tiempo y las tareas del día a día, enfocada en
personas con TDA (Trastorno por déficit de atención), aunque puede ser útil para cualquiera quien quiera
usarla.


* ! IMPORTANTE !!!!!! Sprint One!!!!

    * TODO --> Hasta el 04/07 


# SPRINT I --> Backend 

* Análisis

    **  ● Wireframe 

* Backend

        * // ● Creación repositorio en gitHub y configuración

    **  ● Creación de la base de datos con datos fijos ( familia tarea y usuario admin)

        * //   ● Creación de proyecto de Node y estructura inicial de carpetas

        * //   ● Creación del servidor con Express

    **   ● Creación de la conexión con la base de datos desde Node

    **   ● Middleware 404 not found

    **   ● Middleware gestión de errores

    **   ● Middleware parseo del body de la petición

    **   ● Middleware upload de files

    **   ● Middleware definición directorio recursos estáticos (imágenes)

    **   ● Middleware: cors

    **   ● Endpoint registro de usuarios

    **   ● Endpoint validación usuario

    **   ● Endpoint login de usuarios

    ● Endpoint recuperación contraseña

    ● Endpoint cambio contraseña

    ● Middleware verificación de autenticación de usuarios

    **   ● Endpoint lista familias tareas

    **   ● Endpoint creación de una tarea

    **   ● Endpoint para crear una nota (genérica o de tarea)

    **   ● Endpoint para eliminar una nota (genérica o de tarea)

    **   ● Endpoint para editar una nota (genérica o de tarea)

    **   ● Endpoint listado tareas con filtro/búsqueda y ordenación.

    **   ● Endpoint detalle tarea

    **   ● Endpoint para finalizar una tarea

    **   ● Endpoint para finalizar una subtarea

    **   ● Endpoint para deshabilitar/habilitar un usuario (solo administrator)

    **   ● Endpoint para eliminar un usuario con todas sus tareas (solo administrator)

    **   ● Colección de Postman con los endpoints implementados

    ● Creación de una breve documentación en un fichero README.md. 
        Esta documentación debe incluir al menos una breve descripción de la app, los pasos para arrancar el backend y el listado de los endpoints

    ● Testing y preparación del Sprint Review
    
* * Notas

  **  - Validar el body de la petición con Joi en todos los endpoints.




# CARACTERÍSTICAS MÍNIMAS:

* ! Recuerdo que el proyecto tendrá que tener como mínimo las siguientes características (además de utilizar las tecnologías del bootcamp): 

    * Gestión de usuario (login, registro, validación por e-email, cambio y recuperación password, modificación perfil)

    * Gestión de subida imagenes/files

    * Listado principal de los servicios/productos con filtro/búsqueda y ordenación

    * Detalle del servicio/producto

    * Valoración del servicio/producto (rating, like, …)

    * Gestión de mínimo dos tipos de usuarios (ejemplos: normal y admin, normal y experto, paciente y médico, …)





# LA PLATAFORMA PERMITE (*):


* * USUARIO NO REGISTRADO

    ● Visualizar la landing de la plataforma

    ● Registro (con envío de e-mail de validación)
        ○ e-mail
        ○ username
        ○ contraseña

    ● Login con enlace de recuperación contraseña


* * USUARIO REGISTRADO

    ● Visualización de las tareas en distintos formatos (lista,         calendario mes, calendario
    semana, …)

    ● Búsqueda / filtro por:
        ○ tarea (compra, gym, reunión)
        ○ familia (trabajo, estudios, casa)
        ○ día
        ○ mes
        ○ año

    ● Ordenación por horas, tareas, familias (solo en formato lista)

    ● Gestión del perfil (edición de datos)
        ○ e-mail
        ○ username
        ○ contraseña
        ○ avatar

    ● Creación y modifica tarea:
        ○ color
        ○ descripción
        ○ subtareas
        ○ anotaciones (rendimiento, observaciones, sensaciones, etc)
        ○ asignar un intervalo de tiempo a cada tarea y días que se repita la tarea a lo
        largo de la semana o mes
        ○ clasificar las tareas por familias

    ● Listado de las tareas finalizadas

    ● Las tareas de un intervalo superior a 30 min, finalizarán automáticamente

    ● Las tareas de un intervalo menor a 30 min y las subtareas se finalizarán manualmente

    ● Detalle de una tarea (con sus subtareas)

    ● Eliminación tarea

    ● Evaluación tarea una vez finalizada

    ● Aplazar o adelantar una o todas las tareas del día (semana, mes) simultáneamente

    ● Editar el fondo de la agenda (del día, semana, mes, año)

    ● Añadir, editar o eliminar las anotaciones

    ● Autoevaluación (del día, semana, mes, año) en forma de un gráfico

    ● Recuento de los objetivos alcanzados sobre los propuestos (del
    día, mes, año)


* * USUARIO ADMINISTRADOR

El usuario admin (se creará de forma fija desde código) y, una vez logueado, podrá:

    ● deshabilitar los usuarios inactivos (se le enviará un correo)

    ● rehabilitar un usuario

    ● eliminar un usuario con todas sus tareas


   
(*) El equipo puede añadir y/o modificar los requisitos para personalizar la plataforma y tomar las decisiones
adecuadas en las partes en las cuales no se entra en el detalle.
*/



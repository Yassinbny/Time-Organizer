/**


# Time-Organizer

TIME ORGANIZER: UNA AGENDA DIVERTIDA, PARA PERSONAS DISTRAÍDAS.
Aplicación tipo agenda motivadora para organizar el tiempo y las tareas del día a día, enfocada en
personas con TDA (Trastorno por déficit de atención), aunque puede ser útil para cualquiera que quiera
usarla.


# Los pasos para arrancar el Backend

    * Abre la terminal y navega hasta la carpeta raíz del proyecto (si ya no estás en ella).

    * Verifica si en la raíz existe el archivo package.json (contiene la configuración del proyecto y las dependencias necesarias).

    * Ejecuta el comando npm install o npm i (creará una carpeta "node_modules" que contiene todas las independencias instaladas).

    * Crea el archivo .env y copia en el la estructura del archivo .env.example. Los campos que faltan rellénalos con los datos necesarios.

    * Ejecuta el comando npm run initdb para crear las tablas necesarias en la base de datos.

    * Ejecuta el comando npm run dev para lanzar el servidor



# LISTA DE ENDPOINTS:


 * * Usuarios

    ● POST /api/users/sign-up → Registrar un nuevo usuario.

    ● GET /api/users/confirm/:validationCode → Validar un usuario recién registrado con un código.

    ● POST /api/users/sign-in → Login o inicio de sesión de usuario.

    ● GET /api/users/profile → Devolver el perfil del usuario.

    ● PUT /api/users/profile/username → Cambiar o actualizar el nombre de usuario. 

    ● POST /api/users/profile/avatar → Cambiar o actualizar el avatar.


 * * Usuario Administrador

    ● GET /api/users/profile/admin  → Devolver el perfil del administrador.

    ● GET /api/users/ → Devolver el listado de usuarios normales.

    ● PUT /api/users/:username/status → Desabilitar/Habilitar un usuario.

    ● DELETE /api/users/:user_id → Eliminar un usuario con todas sus tareas.


 * * Password

    ● PUT /api/users/password/reset → Cambiar o actualizar de contraseña.
    
    ● POST /api/users/password/recover → Recuperar contraseña.

    ● POST /api/users/change-password → Recuperar contraseña olvidada.


 * * Tareas

    ● GET /api/tasks/ → Listar tareas.

    ● GET /api/tasks/:idTask → Listar tareas con ID.

    ● POST /api/tasks/ → Crear una tarea.

    ● PATCH /api/tasks/:idTask → Editar una tarea.

    ● PATCH /api/tasks/:idTask/postpone → Posponer una tarea.

    ● PATCH /api/tasks/postponeAll → Posponer todas las tareas.

    ● POST /api/tasks/:idTask → Finalizar una tarea.

    ● PATCH /api/tasks/timePassed → Finalizar tarea a través del ID.

    ● POST /api/tasks/:idTask/rating → Valorar tareas finalizadas.
    
    ● DELETE /api/tasks/:idTask → Eliminar una tarea.



 * * SubTareas

    ● POST /api/tasks/:idTask/subtask → Crear una subtarea.

    ● POST /api/tasks/subtask/:idSubTask → Finalizar una subtarea.

    ● DELETE /api/tasks/subtask/:idSubTask → Eliminar una subtarea.

    ● DELETE /api/tasks/:idTask/subtask → Eliminar todas las subtareas.


 * * Notas

    ● POST /api/tasks/:idTask/notes → Crear una nota.

    ● PATCH /api/tasks/notes/:idNote → Editar una nota.

    ● DELETE /api/tasks/notes/:idNote → Eliminar una nota.   


 * * Familias

    ● GET /api/family/ → Listar las familias de las tareas.
 
    ● POST /api/family/:idTask → Crear una lista con las familias de las tareas.


 * * Anotaciones

    ● POST /api/annotations/ → Crear una anotación genérica.

    ● PATCH /api/annotations/:idAnnotation → Editar una anotación genérica.

    ● DELETE /api/annotations/:idAnnotation → Eliminar una anotación genérica.  


 * * Colores
   
    ● GET /api/colors/ → Listar colores.


 * * Imágenes
   
    ● GET /api/images/ → Subir imágenes.



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

/**

# TIME-ORGANIZER

TIME ORGANIZER: UNA AGENDA DIVERTIDA, PARA PERSONAS DISTRAÍDAS.
Aplicación tipo agenda motivadora para organizar el tiempo y las tareas del día a día, enfocada en
personas con TDA (Trastorno por déficit de atención), aunque puede ser útil para cualquiera que quiera
usarla.



# CÓMO ARRANCAR EL BACKEND


    * Abre la terminal y navega hasta la carpeta raíz del proyecto (si ya no estás en ella).

    * Verifica si en la raíz existe el archivo package.json (contiene la configuración del proyecto y las dependencias necesarias).

    * Ejecuta el comando npm install o npm i (creará una carpeta "node_modules" que contiene todas las independencias instaladas).

    * Crea el archivo .env y copia en el la estructura del archivo .env.example. Los campos que faltan rellénalos con los datos necesarios.

    * Ejecuta el comando npm run initdb para crear las tablas necesarias en la base de datos.

    * Ejecuta el comando npm run dev para lanzar el servidor



# TECNOLOGÍAS UTILIZADAS:


    ● Node.js y Express.js
    ● MySQL
    ● Postman



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

    ● POST /api/users/password/change → Confirmar código de recuperación de contraseña.


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



# DESARROLLADORES:


    ● Yassin Benyaiche
    ● Juan Coronado
    ● Roberto Muresan
    ● Inez Siepak
    ● Beatriz Tejero
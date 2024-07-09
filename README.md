/**
Para visualizar correctamente las pijadas de las anotaciones: install extension --> Better Comments

# Time-Organizer

Aplicación tipo agenda para organizar el tiempo y las tareas del día a día, enfocada en
personas con TDA (Trastorno por déficit de atención), aunque puede ser útil para cualquiera quien quiera
usarla.


* ! IMPORTANTE !!!!!! Sprint II !!!!

    * TODO --> Hasta el 18/07 


# SPRINT II --> Backend and Fronted

* Backend

● Endpoint listado usuarios (solo administrador)

● Endpoint actualización del perfil de usuario

** ● Endpoint para editar una tarea

● Endpoint para finalizar las tareas (ya pasadas) de intervalo superior a 30 minutos. Se llamará cuando desde Front se accede a la página de tareas

● Endpoint de eliminación tarea

** ● Endpoint de evaluación tarea una vez finalizada

● Endpoint para aplazar o adelantar una o todas las tareas del día
(semana, mes) simultáneamente

● Endpoint para personalizar el fondo de la agenda (imagen por día,
semana, mes, año)- no prioritario

** ● Endpoint listado tareas finalizadas (con datos para los gráficos de autoevaluación y de recuento de los objetivos alcanzados sobre los propuestos)

● Colección de Postman con todos los endpoints (incluido test “Page
not found” y lectura de un recurso estático)

* // * ● Actualización README.md


* Frontend (Time-Organizer-Fronted)

● Creación de proyecto de React con Vite y estructura inicial de
carpetas

● Creación de las páginas y de las rutas con React Router

● Formulario de registro

● Página de validación usuario

● Contexto para guardar la información del usuario logueado y su
token

● Formulario de login. Se deberá guardar el token y la información del usuario en el contexto

● Formulario recuperación contraseña

● Formulario de creación y modifica tarea

● Testing y preparación del Sprint Review

    
* * Notas

  **  ● Validar el body de la petición con Joi en todos los endpoints.

**   ● Se debe dar feedback al usuario, ya sea con textos o notificaciones, de los errores que devuelve la API

**  ● Aplicar la metodología mobile first




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



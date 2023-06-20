import Navigation from "@/components/Navigation"



export default function Home() {
  return (
    <main >

      <h1> Aki control de asistencia </h1>
      <p>
        Es una aplicacion movil diseñada con el objetivo de llevar constancia
        de las asistencias de los usuarios de un determinado grupo o actividad,
        permitiendo generar un reporte en formato xls en un rango de fecha dada.
      </p>

      <h2>funcionalidades:</h2>
      <ul>
        <li>
          Control de asistencia por grupos
        </li>
        <li>
          Creacion de reporte por grupos
        </li>
        <li>
          Importacion y exportacion de datos
        </li>
        <li>
          Busqueda
        </li>

      </ul>

      <h3>Descripcion de  pantallas</h3>
      <article>
        <h4>home:</h4>
        <p>Conformado por un panel de control, con las acciones principales de la
          aplicacion.</p>
        {/* <ul>
          <li>Crear grupos</li>
          <li>Asistencia</li>
          <li>Datos</li>
          <li>Busqueda</li>
          <li>Reportes</li>
          <li>Fotos</li>
        </ul> */}
        <Navigation></Navigation>
      </article>

      <article>
        <h4 id='newgroup'>Nuevo grupo:</h4>
        <p> Muestra un listado de los grupos creados. El boton flotante permite adiccionar grupos,
          despues de llenar formulario.
          Dando clic en el nombre de grupo  se obtiene la informacion de cada grupo
          cons las opciones de borrar o editar.
          Dando clic en el icono de persona se acede ala lista de usuarios para el
          grupo, El boton flotante permite adiccionar usuarios, despues de llenar formulario.
          Dando clic en el nombre de usuario  se obtiene la informacion de cada usuario
          cons las opciones de borrar o editar.</p>
      </article>

      <article>
        <h4 id='attendance'>Asistencias:</h4>

        <p> Muestra un listado de los grupos creados. En cada  grupo esta
          la lista de usuarios para llevar control de asistencia para dia actual actual, cada item de la lista
          esta conformada por un nombre de usuario y un checkbox para registrar la ausencia, faltas.
          Si el usaurio esta seleccionado y se hace click en el item se mostrara un recuadro
          que permitira registrar el motivo de la ausencia.

          En el app bar esta un boton de check para guardar cambios, en caso de que no se use esta opcion
          y se desee regresar a la pantalla anterior y se haya realizado cambios, se  mostrara un cuadro
          de dialogo que permitira guardar o descartar los cambios.

          El icono de ojo, muestra una pantalla con la misma funcionalidad que la anterior,pero en este caso
          se vera los usuarios de uno en uno, util para hacer llamado de asistencia.
        </p>

      </article>

      <article>
        <h4 id='report'>Informe: </h4>
        <p>Permite crear un informe de las asistencias de los usuarios de cada grupo,
          con datos como nombre, numero de identificacion, mes y cantidad de ausencias y asistencias,
          todo ello se guarda en un doc con formato xls.

          para la version freemiun hay un template por default, en la version premiun se
          puede adiccionar un template personalizado para cada grupo, es necsario decirle al
          programa donde mepieza la fila y columna para insertar datos.

          El informe se envia por correo, por ello es necesario adiccionar emails pra cada grupo
          en la  opcion de configuraciones.

          Tambien existe la posibilidad de adjuntar imagenes, o de enviarlas solas.
        </p>

      </article>

      <article>
        <h4 id='data'>Datos: </h4>
        <p> Permite importar o exportar datos de la base de datos.</p>
        <ul>
          <li>
            <div>

              <h5>
                Importar:
              </h5>
              <p>Permite seleccionar un archivo txt, con datos en formato csv para
                cargarlos en la base de datos.</p>
            </div>
          </li>
          <li>
            <div>
              <h5>
                exportar:
              </h5>
              <p>Permite enviar la informacion seleccionada en el formulario a una direccion de
                email, se envia un archivo.txt en formato csv.</p>
            </div>
          </li>
        </ul>

      </article>

      <article>
        <h4 id='search'>Buscar asistencias:</h4>
        <p>Permite buscar por grupo y fecha.
          Por defecto no se permite editar datos obtenidos. Para hacerlo es necesario activar la opcion
          editar busquedas en configuraciones.

        </p>
      </article>

      <article>
        <h4 id='photo'>Fotos: </h4>
        <p>Permite tomar imagenes, o escoger una imagen de galeria, o mostrar las imagenes existentes para
          cada grupo</p>
      </article>

      <article>
        <h4 id='menu'>Menu:</h4>
        <p>En el app bar de la pantalla principal, esta el icono de amburguesa, este muestra la opciones
          de internacionalizacion, tema, y configuraciones.
          Dentro de configuraciones se encuentran las opciones de  emails, y templates
          personalizados para informe, esta ultima solo en version pro, tambien hay un checkbox que
          permite activar la funcionalidad de editar las busquedas.</p>
      </article>

    </main >
  )
}

import Link from 'next/link'


const Navigation = () => {
    return (
        <ul>
            <li><Link href='#newgroup'>Crear grupos</Link> </li>
            <li><Link href='#attendance'> Asistencias</Link></li>
            <li><Link href='#data'>Datos</Link> </li>
            <li><Link href='#search'>Busquedas</Link> </li>
            <li><Link href='#report'>Informe</Link></li>
            <li><Link href='#photo'>Imagenes</Link></li>
            <li><Link href='#menu'>Menu</Link></li>
        </ul>
    )
}

export default Navigation
function Datos(props) {
    const {nombre, edad}=props.alumno;    
    const {nomcarrera, year}=props.carrera;
    return(
        <div>
            <h1>Datos Estudiantes</h1>
            <h1>nombre: {nombre}</h1>
            <h1>edad: {edad}</h1>
            <h1>carrera: {nomcarrera}</h1>
            <h1>año: {year}</h1>
            
        </div>
    )
    
}

export default Datos;
import { useEffect, useState } from "react";

export default function AlumnoFilter() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const arrAlumno = [
            { alumno: "Miguel Cardamone", edad: 35, id: 553 },
            { alumno: "Ezequiel Melendres", edad: 35, id: 503 },
            { alumno: "Luciano Pizarro", edad: 25, id: 253 },
            { alumno: "Facundo Arias", edad: 25, id: 421 },

        ];

        setTimeout(() => {

            setAlumnos(arrAlumno);
        }, 1500);
    }, [])

    console.log('Lista Original',alumnos);
    console.log('Lista Filtrada',alumnos.filter(alumno => alumno.edad > 29));
    

    return (
        <>
            {alumnos.length == 0
                ? "loading..."
                : alumnos.filter(alumno => alumno.edad > 29).map((alumno, index) => (
                        <p key={`ejemplo-key-2-${index}-${alumno.alumno}`}>

                            El alumno {alumno.alumno} tiene la edad de {alumno.edad} años. Su número de alumno es {alumno.id}.
                        </p>
                    ))}
        </>
    )
}
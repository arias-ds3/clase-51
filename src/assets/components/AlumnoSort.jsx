import { useEffect, useState } from "react";

export default function AlumnoSort() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const arrAlumno = [
            { alumno: "Miguel Cardamone", edad: 35, id: 553 },
            { alumno: "Ezequiel Melendres", edad: 30, id: 503 },
            { alumno: "Luciano Pizarro", edad: 25, id: 253 },
            { alumno: "Facundo Arias", edad: 25, id: 421 },

        ];

        setTimeout(() => {

            setAlumnos(arrAlumno);
        }, 1500);
    }, [])

    return (
        <>
            {alumnos.length == 0
                ? "loading..."
                : alumnos.slice()// Este método de JS nos creará una copia del array.
                    .sort((a, b) => a.edad - b.edad) // Ordenaremos los alumnos por edad de menor a mayor.
                    .map((alumno, index) => (
                        <p key={`ejemplo-key-2-${index}-${alumno.alumno}`}>

                            El alumno {alumno.alumno} tiene la edad de {alumno.edad} años. Su número de alumno es {alumno.id}.
                        </p>
                    ))}
        </>
    )
}
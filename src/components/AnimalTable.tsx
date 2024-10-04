import { useEffect, useState } from 'react';

interface EndangeredSpecies {
    id: number;
    name: string;
    habitat: string;
    threatLevel: string;
}

export function AnimalTable()
{
    const [species, setSpecies] = useState<EndangeredSpecies[]>([]);

    useEffect(() => {
        fetch('/json/endangered-species.json')
        .then((response) => response.json())
        .then((data) => setSpecies(data.endangeredSpecies));
    }, []);

    return (
        <section className="mb-5">
            <h2>Veszélyeztetett állatfajok</h2>
            <table className="table table-bordered">
                <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>Állatfaj</th>
                        <th>Élőhely</th>
                        <th>Veszélyeztetési fok</th>
                    </tr>
                </thead>
                <tbody>
                {species.map((animal) => (
                    <tr key={animal.id}>
                        <td>{animal.id}</td>
                        <td>{animal.name}</td>
                        <td>{animal.habitat}</td>
                        <td>{animal.threatLevel}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};
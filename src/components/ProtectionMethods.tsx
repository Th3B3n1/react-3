import { useEffect, useState } from 'react';

export function ProtectionMethods()
{
    const [methods, setMethods] = useState<string[]>([]);

    useEffect(() => {
        fetch('/json/protection-methods.json')
        .then((response) => response.json())
        .then((data) => setMethods(data.methods));
    }, []);

    return (
        <section className="mb-5">
            <h2>A környezet védelmének módjai</h2>
            <ul className="list-group">
            {methods.map((method, index) => (
                <li key={index} className="list-group-item">
                {method}
                </li>
            ))}
            </ul>
        </section>
    );
};
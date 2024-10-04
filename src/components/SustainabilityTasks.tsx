import { useEffect, useState } from 'react';

export function SustainabilityTasks()
{
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    fetch('/json/sustainability-tasks.json')
    .then((response) => response.json())
    .then((data) => setTasks(data.tasks));
  }, []);

  return (
    <section className="mb-5">
        <h2>Teendők a fenntarthatóság érdekében</h2>
        <ol className="list-group list-group-numbered">
            {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
                {task}
            </li>
            ))}
        </ol>
    </section>
  );
};
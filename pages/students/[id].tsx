import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface Student {
  id: string;
  name: string;
}
const students: Student[] = [
  { id: '1', name: 'Luz Barrios' },
  { id: '2', name: 'Vinicio Ricci' },
  { id: '3', name: 'Ale Santos' },
  { id: '4', name: 'Alejandro de Leon' },
  { id: '5', name: 'Diego Galan' },
];

export default function StudentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (id) {
      const student = students.find(s => s.id === id);

      if (student) {
        setName(student.name);
      } else {
        // mostrar aqui
        router.push('/404');
      }
    }
  }, [id, router]);

  return (
    <section>
      <h1>Student {id}</h1>
      <h2>{name}</h2>
    </section>
  );
}

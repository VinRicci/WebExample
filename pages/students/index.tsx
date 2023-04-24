import Link from 'next/link';

export default function StudentsPage() {
  return (
    <section>
      <h1>Students</h1>
      <ul>
        <li>
          <Link href="/students">Estudiantes</Link>
        </li>
        <li>
          <Link href="/students/1">Estudiante 1</Link>
        </li>
        <li>
          <Link href="/students/2">Estudiante 2</Link>
        </li>
        <li>
          <Link href="/students/3">Estudiante 3</Link>
        </li>
        <li>
          <Link href="/students/4">Estudiante 4</Link>
        </li>
        <li>
          <Link href="/students/5">Estudiante 5</Link>
        </li>
      </ul>
    </section>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Side ikke fundet</h1>
      <p className="mb-8 text-lg">Beklager, men siden du leder efter findes ikke.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Gå til forsiden
      </Link>
    </div>
  );
}

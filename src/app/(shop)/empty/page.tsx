import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function() {
  return (
    <div className="flex justify-center items-center h-[800px]">

      <IoCartOutline size={ 80 } className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>
        <p className="text-gray-500 text-center mt-2">
          ¡Agrega algunas bebidas energéticas increíbles!
        </p>

        <Link 
          href='/'
          className="text-blue-500 mt-2 text-4xl"
        >
          Ver bebidas
        </Link>

      </div>

    </div>
  );
}
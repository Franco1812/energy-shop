import { Title } from '@/components';

export default function() {
  return (
    <div>
      <Title title="Panel de Administración" subtitle="Gestión de Energy Shop" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Gestión de Bebidas</h3>
          <p className="text-gray-600 mb-4">Administra el inventario de bebidas energéticas</p>
          <button className="btn-primary">Ver Inventario</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Órdenes</h3>
          <p className="text-gray-600 mb-4">Revisa y gestiona las órdenes de clientes</p>
          <button className="btn-primary">Ver Órdenes</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Usuarios</h3>
          <p className="text-gray-600 mb-4">Administra los usuarios registrados</p>
          <button className="btn-primary">Ver Usuarios</button>
        </div>

      </div>
    </div>
  );
}
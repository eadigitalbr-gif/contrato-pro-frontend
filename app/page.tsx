export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ContratoPro
          </h1>
          <p className="text-xl text-gray-600">
            Contratos Digitais para Creators e Marcas
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Comece Agora
            </h2>
            
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                Sou Creator / Influencer
              </button>
              
              <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition">
                Sou Marca / Empresa
              </button>
            </div>
            
            <p className="text-center text-gray-500 mt-6 text-sm">
              Crie contratos profissionais em minutos
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

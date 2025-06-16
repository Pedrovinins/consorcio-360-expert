
import React, { useState } from 'react';
import { Search, Filter, Calculator, Building, Car, Home, DollarSign } from 'lucide-react';

interface ConsortiumGroup {
  id: string;
  name: string;
  institution: string;
  type: 'auto' | 'imovel' | 'outros';
  creditRange: string;
  term: number;
  adminFee: number;
  benefits: string[];
}

const Simulation = () => {
  const [searchFilters, setSearchFilters] = useState({
    institution: '',
    type: '',
    creditRange: '',
    term: '',
    searchText: ''
  });

  const [selectedGroup, setSelectedGroup] = useState<ConsortiumGroup | null>(null);
  const [showSimulationForm, setShowSimulationForm] = useState(false);

  const mockGroups: ConsortiumGroup[] = [
    {
      id: '1',
      name: 'Grupo Platinum Auto 2024',
      institution: 'Porto Seguro',
      type: 'auto',
      creditRange: 'R$ 30.000 - R$ 80.000',
      term: 60,
      adminFee: 18.5,
      benefits: ['Lance embutido', 'Redutor de parcela', 'Seguro incluso']
    },
    {
      id: '2',
      name: 'Consórcio Imóvel Gold',
      institution: 'Bradesco',
      type: 'imovel',
      creditRange: 'R$ 100.000 - R$ 500.000',
      term: 120,
      adminFee: 12.8,
      benefits: ['FGTS aceito', 'Lance livre', 'Parcela reduzida']
    },
    {
      id: '3',
      name: 'Veículos Premium 24',
      institution: 'Itaú',
      type: 'auto',
      creditRange: 'R$ 50.000 - R$ 120.000',
      term: 72,
      adminFee: 16.2,
      benefits: ['Lance embutido', 'Seguro auto', 'Parcela flexível']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'auto': return <Car className="w-5 h-5" />;
      case 'imovel': return <Home className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'auto': return 'Automóvel';
      case 'imovel': return 'Imóvel';
      default: return 'Outros';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Simulação de Consórcios</h1>
          <p className="text-gray-600 mt-1">Encontre e simule os melhores grupos disponíveis</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Buscar grupo ou bem
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchFilters.searchText}
                onChange={(e) => setSearchFilters({ ...searchFilters, searchText: e.target.value })}
                placeholder="Ex: Honda Civic, Casa, Apartamento..."
                className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instituição
            </label>
            <select
              value={searchFilters.institution}
              onChange={(e) => setSearchFilters({ ...searchFilters, institution: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              <option value="porto">Porto Seguro</option>
              <option value="bradesco">Bradesco</option>
              <option value="itau">Itaú</option>
              <option value="honda">Honda</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo
            </label>
            <select
              value={searchFilters.type}
              onChange={(e) => setSearchFilters({ ...searchFilters, type: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Todos</option>
              <option value="auto">Automóvel</option>
              <option value="imovel">Imóvel</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faixa de Crédito
            </label>
            <select
              value={searchFilters.creditRange}
              onChange={(e) => setSearchFilters({ ...searchFilters, creditRange: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Todas</option>
              <option value="30-80">R$ 30k - R$ 80k</option>
              <option value="80-150">R$ 80k - R$ 150k</option>
              <option value="150-300">R$ 150k - R$ 300k</option>
              <option value="300+">R$ 300k+</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
              <Filter className="w-4 h-4 mr-2" />
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockGroups.map((group) => (
          <div key={group.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    {getTypeIcon(group.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-gray-500">{group.institution}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {getTypeLabel(group.type)}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Faixa de Crédito:</span>
                  <span className="text-sm font-medium text-gray-900">{group.creditRange}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Prazo:</span>
                  <span className="text-sm font-medium text-gray-900">{group.term} meses</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Taxa Admin.:</span>
                  <span className="text-sm font-medium text-gray-900">{group.adminFee}%</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Benefícios:</div>
                <div className="flex flex-wrap gap-1">
                  {group.benefits.slice(0, 2).map((benefit, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                      {benefit}
                    </span>
                  ))}
                  {group.benefits.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      +{group.benefits.length - 2} mais
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => {
                    setSelectedGroup(group);
                    setShowSimulationForm(true);
                  }}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Simular
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simulation Form Modal */}
      {showSimulationForm && selectedGroup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Simulação de Consórcio</h2>
                <button
                  onClick={() => setShowSimulationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mt-1">{selectedGroup.name} - {selectedGroup.institution}</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Grupo Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Informações do Grupo</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Tipo:</span>
                    <span className="ml-2 font-medium">{getTypeLabel(selectedGroup.type)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Prazo:</span>
                    <span className="ml-2 font-medium">{selectedGroup.term} meses</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Taxa Admin:</span>
                    <span className="ml-2 font-medium">{selectedGroup.adminFee}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Crédito:</span>
                    <span className="ml-2 font-medium">{selectedGroup.creditRange}</span>
                  </div>
                </div>
              </div>

              {/* Simulation Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do Crédito
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="50.000"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Contratação
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="pf">Pessoa Física</option>
                    <option value="pj">Pessoa Jurídica</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parcela de Contemplação
                  </label>
                  <input
                    type="number"
                    placeholder="12"
                    min="1"
                    max={selectedGroup.term}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estratégia de Lance
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="fixo">Lance Fixo</option>
                    <option value="livre">Lance Livre</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor FGTS (opcional)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="0"
                      className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                  Calcular Simulação
                </button>
                <button
                  onClick={() => setShowSimulationForm(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Simulation;

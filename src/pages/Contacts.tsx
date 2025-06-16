
import React from 'react';
import { Users, UserPlus, Search, Phone, Mail, Building } from 'lucide-react';

const Contacts = () => {
  const mockContacts = [
    {
      id: '1',
      name: 'Ana Silva Costa',
      email: 'ana.costa@email.com',
      phone: '(11) 99999-8888',
      company: 'Costa Consultoria',
      position: 'Gerente Comercial',
      lastContact: '2 dias atrás'
    },
    {
      id: '2',
      name: 'Roberto Santos',
      email: 'roberto.santos@empresa.com',
      phone: '(11) 88888-7777',
      company: 'Santos & Filhos',
      position: 'Diretor',
      lastContact: '1 semana atrás'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contatos</h1>
          <p className="text-gray-600 mt-1">Gerencie sua base de contatos</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <UserPlus className="w-5 h-5 mr-2" />
          Novo Contato
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar contatos..."
            className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                  <p className="text-sm text-gray-500">{contact.position}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <Building className="w-4 h-4 mr-2" />
                {contact.company}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                {contact.email}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                {contact.phone}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">Último contato: {contact.lastContact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;

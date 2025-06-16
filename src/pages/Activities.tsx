
import React from 'react';
import { Calendar, Clock, Phone, Mail, Video, CheckCircle } from 'lucide-react';

const Activities = () => {
  const upcomingActivities = [
    {
      id: '1',
      title: 'Reunião com Maria Silva',
      type: 'meeting',
      time: '14:00',
      date: 'Hoje',
      contact: 'Maria Silva',
      status: 'scheduled'
    },
    {
      id: '2',
      title: 'Follow-up lead qualificado',
      type: 'call',
      time: '15:30',
      date: 'Hoje',
      contact: 'Carlos Oliveira',
      status: 'scheduled'
    },
    {
      id: '3',
      title: 'Enviar proposta revisada',
      type: 'email',
      time: '09:00',
      date: 'Amanhã',
      contact: 'Ana Costa',
      status: 'scheduled'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'meeting': return <Video className="w-5 h-5" />;
      case 'call': return <Phone className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'bg-blue-100 text-blue-600';
      case 'call': return 'bg-green-100 text-green-600';
      case 'email': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Atividades</h1>
          <p className="text-gray-600 mt-1">Gerencie sua agenda e tarefas</p>
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Nova Atividade
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Calendário</h3>
          
          <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Calendário interativo será implementado aqui</p>
              <p className="text-sm text-gray-400">Integração com biblioteca de calendário</p>
            </div>
          </div>
        </div>

        {/* Upcoming Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Próximas Atividades</h3>
          
          <div className="space-y-4">
            {upcomingActivities.map((activity) => (
              <div key={activity.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${getActivityColor(activity.type)}`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <span className="text-xs text-gray-500">{activity.date}</span>
                </div>
                
                <h4 className="font-medium text-gray-900 mb-2">{activity.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{activity.contact}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.time}
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
            Ver todas as atividades
          </button>
        </div>
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Hoje</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">5</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Esta Semana</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">23</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Concluídas</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">18</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Atrasadas</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
            </div>
            <Clock className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;

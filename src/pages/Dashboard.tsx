
import React from 'react';
import { 
  Users, 
  Target, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      name: 'Leads Ativos',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Oportunidades',
      value: '89',
      change: '+8%',
      changeType: 'positive',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      name: 'Receita do Mês',
      value: 'R$ 124.750',
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      name: 'Taxa de Conversão',
      value: '12.5%',
      change: '-2%',
      changeType: 'negative',
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Nova simulação criada',
      user: 'Maria Silva',
      time: '5 min atrás',
      type: 'simulation'
    },
    {
      id: 2,
      action: 'Lead convertido em oportunidade',
      user: 'João Santos',
      time: '15 min atrás',
      type: 'conversion'
    },
    {
      id: 3,
      action: 'Reunião agendada',
      user: 'Ana Costa',
      time: '30 min atrás',
      type: 'meeting'
    },
    {
      id: 4,
      action: 'Proposta enviada',
      user: 'Carlos Oliveira',
      time: '1 hora atrás',
      type: 'proposal'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Reunião com cliente - Auto Consórcio',
      time: '14:00',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Follow-up lead qualificado',
      time: '15:30',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Revisão proposta imóvel',
      time: '16:00',
      priority: 'low'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral do seu desempenho</p>
        </div>
        <div className="flex items-center space-x-3">
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Últimos 30 dias</option>
            <option>Últimos 7 dias</option>
            <option>Este mês</option>
            <option>Trimestre atual</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.changeType === 'positive' ? (
                      <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs mês anterior</span>
                  </div>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance de Vendas</h3>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-500 hover:text-gray-700">Leads</button>
              <button className="text-sm text-primary-600 font-medium">Oportunidades</button>
              <button className="text-sm text-gray-500 hover:text-gray-700">Vendas</button>
            </div>
          </div>
          
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Gráfico de performance será implementado aqui</p>
              <p className="text-sm text-gray-400">Integração com biblioteca de gráficos</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Atividades Recentes</h3>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.user}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
            Ver todas as atividades
          </button>
        </div>
      </div>

      {/* Tasks and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Próximas Tarefas</h3>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {task.time}
                    </div>
                  </div>
                </div>
                <button className="text-sm text-primary-600 hover:text-primary-700">
                  Ver
                </button>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Ver agenda completa
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Ações Rápidas</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
              <Target className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Nova Simulação</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
              <Users className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Adicionar Lead</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
              <Calendar className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Agendar Reunião</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Ver Relatórios</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

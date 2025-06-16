
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Target, 
  Calendar, 
  Send, 
  Settings,
  Calculator,
  TrendingUp,
  UserPlus,
  Building,
  Zap
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: BarChart3,
    description: 'Visão geral'
  },
  { 
    name: 'Simulações', 
    href: '/simulation', 
    icon: Calculator,
    description: 'Consórcios'
  },
  { 
    name: 'Leads', 
    href: '/leads', 
    icon: UserPlus,
    description: 'Novos contatos'
  },
  { 
    name: 'Contatos', 
    href: '/contacts', 
    icon: Users,
    description: 'Base de dados'
  },
  { 
    name: 'Oportunidades', 
    href: '/opportunities', 
    icon: Target,
    description: 'Pipeline vendas'
  },
  { 
    name: 'Atividades', 
    href: '/activities', 
    icon: Calendar,
    description: 'Agenda e tarefas'
  },
  { 
    name: 'Campanhas', 
    href: '/campaigns', 
    icon: Send,
    description: 'Marketing'
  },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: TrendingUp,
    description: 'Relatórios'
  },
  { 
    name: 'Automação', 
    href: '/automation', 
    icon: Zap,
    description: 'Workflows'
  },
  { 
    name: 'Configurações', 
    href: '/settings', 
    icon: Settings,
    description: 'Sistema'
  }
];

const Sidebar = ({ collapsed }: SidebarProps) => {
  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          {collapsed ? (
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">Consórcios 360</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors relative group ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Icon className={`${collapsed ? 'w-5 h-5' : 'w-5 h-5 mr-3'} flex-shrink-0`} />
                {!collapsed && (
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-400">{item.description}</span>
                  </div>
                )}
                
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50">
                    {item.name}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom section */}
        {!collapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="bg-primary-50 rounded-lg p-3">
              <div className="text-xs font-medium text-primary-700 mb-1">
                Upgrade para Pro
              </div>
              <div className="text-xs text-primary-600">
                Desbloquear recursos avançados
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

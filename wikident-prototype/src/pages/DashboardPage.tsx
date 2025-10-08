import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const tiles = [
    {
      id: 1,
      title: 'Kalendář',
      subtitle: 'Naplánujte návštěvy',
      icon: '📅',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700',
      path: '/calendar',
    },
    {
      id: 2,
      title: 'Pacienti',
      subtitle: 'Spravujte karty pacientů',
      icon: '👥',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700',
      path: '/patients',
    },
    {
      id: 3,
      title: 'Videa',
      subtitle: 'Vzdělávací obsah',
      icon: '📹',
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-700',
      path: '/videos', // Placeholder for future implementation
    },
    {
      id: 4,
      title: 'Finance',
      subtitle: 'Faktury a platby',
      icon: '💰',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-700',
      path: '/finance', // Placeholder for future implementation
    },
    {
      id: 5,
      title: 'Nastavení',
      subtitle: 'Konfigurace praxe',
      icon: '⚙️',
      bgColor: 'bg-gradient-to-br from-gray-500 to-gray-700',
      path: '/settings',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-500 p-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Wikident</h1>
              <p className="text-gray-400 text-sm">Rychlý přehled ordinace</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white tracking-wider">DASHBOARD</h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Přihlášen jako</p>
              <p className="text-white font-medium">Dana Hygienistka</p>
            </div>
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Dnešní objednávky</p>
              <p className="text-3xl font-bold text-white mt-2">8</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400 text-2xl">📋</span>
            </div>
          </div>
        </div>
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Aktivní pacienti</p>
              <p className="text-3xl font-bold text-white mt-2">342</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-purple-400 text-2xl">👤</span>
            </div>
          </div>
        </div>
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Tento týden</p>
              <p className="text-3xl font-bold text-white mt-2">31</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400 text-2xl">📊</span>
            </div>
          </div>
        </div>
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Nezaplacené faktury</p>
              <p className="text-3xl font-bold text-white mt-2">12</p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <span className="text-red-400 text-2xl">💳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.path}
            className={`${tile.bgColor} rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group block`}
          >
            <div className="relative z-10">
              <div className="text-5xl mb-4">{tile.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{tile.title}</h3>
              <p className="text-white/80 text-sm">{tile.subtitle}</p>
            </div>
            <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Rychlé akce</h3>
        <div className="flex space-x-4">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            + Nová objednávka
          </button>
          <button className="bg-dark-200 hover:bg-dark-100 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
            + Nový pacient
          </button>
          <button className="bg-dark-200 hover:bg-dark-100 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
            Poslat připomínku
          </button>
          <button className="bg-dark-200 hover:bg-dark-100 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
            Vytvořit fakturu
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Nedávná aktivita</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Jan Novák potvrdil termín na 14:00</span>
            </div>
            <span className="text-gray-500 text-sm">před 5 min</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Nová rezervace - Marie Svobodová</span>
            </div>
            <span className="text-gray-500 text-sm">před 15 min</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-300">Připomínka odeslána - 5 pacientů</span>
            </div>
            <span className="text-gray-500 text-sm">před 1 hod</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

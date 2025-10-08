import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-500 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Zpět na Dashboard
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-white">Nastavení</h1>
          </div>
        </div>

        {/* Settings Content */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="text-center text-gray-400">
            <h2 className="text-xl font-semibold mb-4">Nastavení aplikace</h2>
            <p>Zde budou nastavení aplikace Wikident.</p>
            <p className="mt-4 text-sm">Tato stránka bude implementována v budoucí verzi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

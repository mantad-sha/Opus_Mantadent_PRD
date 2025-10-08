import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PatientCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-500 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/patients"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Zpět na seznam pacientů
              </Link>
            </div>
            <h1 className="text-2xl font-bold text-white">Karta pacienta #{id}</h1>
          </div>
        </div>

        {/* Patient Card Content */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="text-center text-gray-400">
            <h2 className="text-xl font-semibold mb-4">Detail pacienta</h2>
            <p>Zde bude detailní karta pacienta s ID: {id}</p>
            <p className="mt-4 text-sm">Tato stránka bude implementována v budoucí verzi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCardPage;

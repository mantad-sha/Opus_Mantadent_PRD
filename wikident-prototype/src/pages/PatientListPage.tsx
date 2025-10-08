import React from 'react';
import { Link } from 'react-router-dom';

const PatientListPage: React.FC = () => {
  // Dummy patient data
  const patients = [
    {
      id: 1,
      name: 'Jan Novák',
      age: 45,
      lastVisit: '15.9.2025',
      nextVisit: '15.3.2026',
      phone: '+420 777 123 456',
      email: 'jan.novak@email.cz',
      totalVisits: 12,
      status: 'active',
      tags: ['#Alergie: Penicilin', '#Recall'],
      photo: '👨',
    },
    {
      id: 2,
      name: 'Marie Svobodová',
      age: 32,
      lastVisit: '10.9.2025',
      nextVisit: '10.3.2026',
      phone: '+420 776 234 567',
      email: 'marie.svobodova@email.cz',
      totalVisits: 8,
      status: 'active',
      tags: ['#Těhotná', '#VIP'],
      photo: '👩',
    },
    {
      id: 3,
      name: 'Pavel Dvořák',
      age: 67,
      lastVisit: '5.9.2025',
      nextVisit: '20.9.2025',
      phone: '+420 775 345 678',
      email: 'pavel.dvorak@email.cz',
      totalVisits: 24,
      status: 'active',
      tags: ['#Diabetik', '#Senior'],
      photo: '👴',
    },
    {
      id: 4,
      name: 'Eva Černá',
      age: 28,
      lastVisit: '1.9.2025',
      nextVisit: 'Neplánováno',
      phone: '+420 774 456 789',
      email: 'eva.cerna@email.cz',
      totalVisits: 3,
      status: 'inactive',
      tags: ['#Nový pacient'],
      photo: '👩‍🦰',
    },
    {
      id: 5,
      name: 'Tomáš Procházka',
      age: 51,
      lastVisit: '20.8.2025',
      nextVisit: '20.2.2026',
      phone: '+420 773 567 890',
      email: 'tomas.prochazka@email.cz',
      totalVisits: 15,
      status: 'active',
      tags: ['#Recall', '#Kuřák'],
      photo: '👨‍🦲',
    },
    {
      id: 6,
      name: 'Anna Krejčová',
      age: 39,
      lastVisit: '18.9.2025',
      nextVisit: '18.3.2026',
      phone: '+420 772 678 901',
      email: 'anna.krejcova@email.cz',
      totalVisits: 10,
      status: 'active',
      tags: ['#Recall'],
      photo: '👩‍🦳',
    },
    {
      id: 7,
      name: 'Petr Novotný',
      age: 22,
      lastVisit: '12.9.2025',
      nextVisit: '12.12.2025',
      phone: '+420 771 789 012',
      email: 'petr.novotny@email.cz',
      totalVisits: 5,
      status: 'active',
      tags: ['#Student', '#Ortodoncie'],
      photo: '👦',
    },
    {
      id: 8,
      name: 'Lucie Marková',
      age: 44,
      lastVisit: '8.9.2025',
      nextVisit: '8.3.2026',
      phone: '+420 770 890 123',
      email: 'lucie.markova@email.cz',
      totalVisits: 18,
      status: 'active',
      tags: ['#Recall', '#Perio'],
      photo: '👱‍♀️',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-500' : 'bg-gray-500';
  };

  const getTagColor = (tag: string) => {
    if (tag.includes('Alergie')) return 'bg-red-500/20 text-red-400 border-red-500/50';
    if (tag.includes('VIP')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
    if (tag.includes('Těhotná')) return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
    if (tag.includes('Diabetik')) return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
    if (tag.includes('Senior')) return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    if (tag.includes('Recall')) return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
    return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-500 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Pacienti</h1>
            <p className="text-gray-400">Celkem 342 aktivních pacientů</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              + Nový pacient
            </button>
            <button className="bg-dark-200 hover:bg-dark-100 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
              Import CSV
            </button>
            <button className="bg-dark-200 hover:bg-dark-100 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-600">
              Export
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Vyhledat pacienta podle jména, telefonu nebo emailu..."
                className="w-full bg-dark-400 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500"
              />
            </div>
            <select className="bg-dark-400 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500">
              <option>Všichni pacienti</option>
              <option>Aktivní</option>
              <option>Neaktivní</option>
              <option>Recall tento měsíc</option>
            </select>
            <select className="bg-dark-400 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500">
              <option>Seřadit podle</option>
              <option>Jméno A-Z</option>
              <option>Jméno Z-A</option>
              <option>Poslední návštěva</option>
              <option>Počet návštěv</option>
            </select>
          </div>
        </div>
      </div>

      {/* Patient Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary-500 transition-all cursor-pointer group"
          >
            {/* Patient Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                  {patient.photo}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {patient.name}
                  </h3>
                  <p className="text-gray-400">{patient.age} let</p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${getStatusColor(patient.status)}`}></div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {patient.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Patient Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Poslední návštěva:</span>
                <span className="text-white text-sm font-medium">{patient.lastVisit}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Příští návštěva:</span>
                <span className={`text-sm font-medium ${
                  patient.nextVisit === 'Neplánováno' ? 'text-gray-400' : 'text-primary-400'
                }`}>
                  {patient.nextVisit}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">Celkem návštěv:</span>
                <span className="text-white text-sm font-medium">{patient.totalVisits}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-400">📞</span>
                <span className="text-gray-300 text-sm">{patient.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">✉️</span>
                <span className="text-gray-300 text-sm">{patient.email}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link 
                to={`/patients/${patient.id}`}
                className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Zobrazit kartu
              </Link>
              <button className="flex-1 bg-dark-400 hover:bg-dark-300 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                Nová objednávka
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center space-x-2">
        <button className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
          ←
        </button>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg">
          1
        </button>
        <button className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
          2
        </button>
        <button className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
          3
        </button>
        <span className="text-gray-500">...</span>
        <button className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
          12
        </button>
        <button className="px-4 py-2 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 transition-colors">
          →
        </button>
      </div>

      {/* Stats Bar */}
      <div className="mt-8 bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Celkem pacientů</p>
            <p className="text-2xl font-bold text-white">342</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Aktivní</p>
            <p className="text-2xl font-bold text-green-400">298</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Recall tento měsíc</p>
            <p className="text-2xl font-bold text-blue-400">45</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Noví tento měsíc</p>
            <p className="text-2xl font-bold text-purple-400">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientListPage;

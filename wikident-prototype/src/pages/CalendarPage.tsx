import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
// Removed CalendarApi import - not needed in v6
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { dentalEvents } from '../dummy-data';
import './CalendarPage.css';

const CalendarPage: React.FC = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [currentView, setCurrentView] = useState<string>('timeGridWeek');
  const [currentDateRange, setCurrentDateRange] = useState<string>('22. - 26. Září 2025');
  const [selectedEventIds, setSelectedEventIds] = useState<Set<string>>(new Set());

  // Handler functions to control the calendar
  const getApi = () => calendarRef.current?.getApi();  // ✅ FIXED - removed type annotation
  
  const updateDateRange = () => {
    const api = getApi();
    if (api) {
      const view = api.view;
      const start = view.activeStart;
      const end = view.activeEnd;
      
      // Format the date range based on the view type
      if (view.type === 'timeGridWeek') {
        const startDay = start.getDate();
        const endDay = new Date(end.getTime() - 1).getDate(); // Subtract 1 ms to get the last day
        const month = start.toLocaleDateString('cs-CZ', { month: 'long' });
        const year = start.getFullYear();
        setCurrentDateRange(`${startDay}. - ${endDay}. ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`);
      } else if (view.type === 'timeGridDay') {
        const day = start.getDate();
        const month = start.toLocaleDateString('cs-CZ', { month: 'long', weekday: 'long' });
        const year = start.getFullYear();
        setCurrentDateRange(`${month.charAt(0).toUpperCase() + month.slice(1)} ${day}, ${year}`);
      } else if (view.type === 'dayGridMonth') {
        const month = start.toLocaleDateString('cs-CZ', { month: 'long' });
        const year = start.getFullYear();
        setCurrentDateRange(`${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`);
      }
    }
  };
  
  const handleViewChange = (viewName: string) => {
    getApi()?.changeView(viewName);
    setCurrentView(viewName);
    setTimeout(updateDateRange, 0); // Update date range after view change
  };
  
  const handlePrev = () => {
    getApi()?.prev();
    setTimeout(updateDateRange, 0);
  };
  
  const handleNext = () => {
    getApi()?.next();
    setTimeout(updateDateRange, 0);
  };
  
  const handleToday = () => {
    getApi()?.today();
    setTimeout(updateDateRange, 0);
  };

  // Update date range when component mounts
  useEffect(() => {
    // Small delay to ensure calendar is fully initialized
    setTimeout(updateDateRange, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-500 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-dark-300/50 backdrop-blur-sm border-r border-gray-700 p-6">
        <Link to="/" className="flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <span>←</span>
          <span>Zpět na Dashboard</span>
        </Link>

        {/* Mini Calendar */}
        <div className="bg-dark-400/50 rounded-xl p-4 mb-6">
          <h3 className="text-white font-semibold mb-3">Září 2025</h3>
          <div className="grid grid-cols-7 gap-1 text-xs">
            {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day) => (
              <div key={day} className="text-gray-500 text-center py-1">
                {day}
              </div>
            ))}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`text-center py-1 rounded cursor-pointer hover:bg-dark-300 ${
                  i >= 18 && i <= 22 ? 'bg-primary-500/20 text-primary-400' : 'text-gray-400'
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* To-Do List */}
        <div className="bg-dark-400/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Úkoly</h3>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-300 text-sm">Zavolat pacientce Novákové ohledně termínu</span>
            </div>
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-300 text-sm">Objednat dentální materiál</span>
            </div>
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-300 text-sm">Poslat recall 5 pacientům</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white" onClick={handlePrev}>←</button>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors" onClick={handleToday}>
                Dnes
              </button>
              <button className="text-gray-400 hover:text-white" onClick={handleNext}>→</button>
              <h2 className="text-xl font-semibold text-white">{currentDateRange}</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-dark-400 rounded-lg">
                <button 
                  className={`px-4 py-2 ${currentView === 'timeGridDay' ? 'bg-primary-500 text-white rounded-lg' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => handleViewChange('timeGridDay')}
                >
                  Den
                </button>
                <button 
                  className={`px-4 py-2 ${currentView === 'timeGridWeek' ? 'bg-primary-500 text-white rounded-lg' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => handleViewChange('timeGridWeek')}
                >
                  Týden
                </button>
                <button 
                  className={`px-4 py-2 ${currentView === 'dayGridMonth' ? 'bg-primary-500 text-white rounded-lg' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => handleViewChange('dayGridMonth')}
                >
                  Měsíc
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-white">🔍</button>
                <button className="p-2 text-gray-400 hover:text-white">⚙️</button>
                <button className="p-2 text-gray-400 hover:text-white">🔮</button>
                <button className="p-2 text-gray-400 hover:text-white">🔒</button>
              </div>
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
                + Nová objednávka
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Grid with FullCalendar */}
        <div className="bg-dark-300/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden p-4">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            events={dentalEvents}
            headerToolbar={false}
            height="auto"
            slotMinTime="08:00:00"
            slotMaxTime="19:00:00"
            slotDuration="00:30:00"
            allDaySlot={false}
            weekends={false}
            editable={true}
            eventDrop={(dropInfo) => {
              console.log('Event dropped:', dropInfo.event.title, 'new time:', dropInfo.event.start);
              // You can add logic here to update the event in your data source
            }}
            eventResize={(resizeInfo) => {
              console.log('Event resized:', resizeInfo.event.title, 'new duration:', resizeInfo.event.start, '-', resizeInfo.event.end);
              // You can add logic here to update the event duration in your data source
            }}
            eventClick={(clickInfo) => {
              const eventId = clickInfo.event.id;
              const newSelectedIds = new Set(selectedEventIds);
              if (newSelectedIds.has(eventId)) {
                newSelectedIds.delete(eventId);
              } else {
                newSelectedIds.add(eventId);
              }
              setSelectedEventIds(newSelectedIds);
            }}
            eventContent={(eventInfo) => {
              // Custom event rendering for day view
              const event = eventInfo.event;
              const extendedProps = event.extendedProps as any;
              const startTime = event.start?.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
              const endTime = event.end?.toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' });
              const isSelected = selectedEventIds.has(event.id);
              
              // Define appointment type colors
              const getAppointmentColor = (type: string) => {
                const typeColors: { [key: string]: string } = {
                  'Recall': 'bg-green-500',
                  'Cleaning': 'bg-purple-500',
                  'Urgent': 'bg-red-500',
                  'Emergency': 'bg-red-500',
                  'Root Canal': 'bg-red-500',
                  'Extraction': 'bg-red-500',
                  'Consult': 'bg-blue-500',
                  'Orthodontic': 'bg-blue-500',
                  'Implant': 'bg-blue-500',
                  'Crown': 'bg-yellow-500',
                  'Crown Prep': 'bg-yellow-500',
                  'Filling': 'bg-indigo-500',
                  'Bridge': 'bg-indigo-500',
                  'Veneer': 'bg-pink-500',
                };
                return typeColors[type] || 'bg-gray-500';
              };
              
              // Check if we're in day view
              const isTimeGridDay = eventInfo.view.type === 'timeGridDay';
              
              if (isTimeGridDay) {
                // Custom horizontal row design for day view
                return (
                  <div className={`flex items-center w-full h-full px-3 py-2 bg-dark-400/50 backdrop-blur-sm hover:bg-dark-400/70 transition-all cursor-pointer ${isSelected ? 'selected-event' : ''}`}>
                    {/* Patient Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden mr-3 flex-shrink-0">
                      {extendedProps.avatarUrl ? (
                        <img 
                          src={extendedProps.avatarUrl} 
                          alt={extendedProps.patientName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-lg font-semibold">
                          {extendedProps.patientName?.charAt(0) || 'P'}
                        </div>
                      )}
                    </div>
                    
                    {/* Patient Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        {/* Name and Age */}
                        <span className="text-white font-medium truncate">
                          {extendedProps.patientName} ({extendedProps.age})
                        </span>
                        
                        {/* Time Range */}
                        <span className="text-gray-400 text-sm whitespace-nowrap">
                          {startTime} - {endTime}
                        </span>
                        
                        {/* Appointment Type Badge */}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getAppointmentColor(extendedProps.appointmentType)}`}>
                          {extendedProps.appointmentType}
                        </span>
                      </div>
                    </div>
                    
                    {/* Delay Messenger Buttons */}
                    <div className="flex items-center gap-2 ml-auto">
                      <button 
                        className="px-3 py-1 bg-dark-300 hover:bg-dark-200 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-all border border-gray-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('5 min delay');
                        }}
                      >
                        5 min
                      </button>
                      <button 
                        className="px-3 py-1 bg-dark-300 hover:bg-dark-200 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-all border border-gray-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('10 min delay');
                        }}
                      >
                        10 min
                      </button>
                    </div>
                  </div>
                );
              } else {
                // Default rendering for week/month views - compact version
                return (
                  <div className={`w-full h-full px-2 py-1 ${isSelected ? 'selected-event' : ''}`}>
                    <div className="text-white text-xs font-semibold truncate">
                      {extendedProps.patientName}
                    </div>
                    <div className="text-gray-300 text-xs truncate">
                      {extendedProps.appointmentType}
                    </div>
                    {eventInfo.timeText && (
                      <div className="text-gray-400 text-xs">
                        {eventInfo.timeText}
                      </div>
                    )}
                  </div>
                );
              }
            }}
          />
        </div>

        {/* Bottom Action Bar - Shows when items are selected */}
        {selectedEventIds.size > 0 && (
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 mb-6 bg-dark-300/90 backdrop-blur-sm text-white p-4 rounded-xl shadow-2xl border border-gray-600 flex items-center gap-4 z-50">
            <span className="font-semibold text-lg">
              {selectedEventIds.size} {selectedEventIds.size === 1 ? 'objednávka vybrána' : 'objednávky vybrány'}
            </span>
            <div className="h-8 w-px bg-gray-600 mx-2"></div>
            <button 
              onClick={() => setSelectedEventIds(new Set())}
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Zrušit výběr
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors font-medium">
              Posunout
            </button>
            <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors font-medium">
              Vlastní zpráva
            </button>
            <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors font-medium">
              Zrušit objednávku
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;

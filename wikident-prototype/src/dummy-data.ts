export interface DentalEvent {
  id: string;
  title: string;
  patientName: string;
  age: number;
  appointmentType: string;
  avatarUrl?: string;
  start: string;
  end: string;
  className?: string;
  classNames?: string[];
}

export const dentalEvents: DentalEvent[] = [
  // Monday, September 22, 2025
  {
    id: "1",
    title: "Sarah Johnson (35)",
    patientName: "Sarah Johnson",
    age: 35,
    appointmentType: "Cleaning",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    start: "2025-09-22T09:00:00",
    end: "2025-09-22T09:45:00",
    classNames: ["cleaning"]
  },
  {
    id: "2",
    title: "Michael Chen (42)",
    patientName: "Michael Chen",
    age: 42,
    appointmentType: "Crown Prep",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    start: "2025-09-22T10:00:00",
    end: "2025-09-22T11:30:00",
    classNames: ["checkup"]
  },
  {
    id: "3",
    title: "Emma Wilson (28)",
    patientName: "Emma Wilson",
    age: 28,
    appointmentType: "Recall",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    start: "2025-09-22T13:00:00",
    end: "2025-09-22T13:30:00",
    classNames: ["recall"]
  },
  {
    id: "4",
    title: "James Martinez (57)",
    patientName: "James Martinez",
    age: 57,
    appointmentType: "Root Canal",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    start: "2025-09-22T14:00:00",
    end: "2025-09-22T15:30:00",
    classNames: ["urgent"]
  },
  
  // Tuesday, September 23, 2025
  {
    id: "5",
    title: "Olivia Brown (31)",
    patientName: "Olivia Brown",
    age: 31,
    appointmentType: "Filling",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    start: "2025-09-23T08:30:00",
    end: "2025-09-23T09:30:00",
    classNames: ["checkup"]
  },
  {
    id: "6",
    title: "William Davis (45)",
    patientName: "William Davis",
    age: 45,
    appointmentType: "Cleaning",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    start: "2025-09-23T10:00:00",
    end: "2025-09-23T10:45:00",
    classNames: ["cleaning"]
  },
  {
    id: "7",
    title: "Ava Garcia (16)",
    patientName: "Ava Garcia",
    age: 16,
    appointmentType: "Orthodontic",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    start: "2025-09-23T11:00:00",
    end: "2025-09-23T11:45:00",
    classNames: ["consult"]
  },
  {
    id: "8",
    title: "Noah Rodriguez (39)",
    patientName: "Noah Rodriguez",
    age: 39,
    appointmentType: "Emergency",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    start: "2025-09-23T12:00:00",
    end: "2025-09-23T12:45:00",
    classNames: ["urgent"]
  },
  {
    id: "9",
    title: "Isabella Miller (52)",
    patientName: "Isabella Miller",
    age: 52,
    appointmentType: "Recall",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    start: "2025-09-23T14:30:00",
    end: "2025-09-23T15:00:00",
    classNames: ["recall"]
  },
  
  // Wednesday, September 24, 2025
  {
    id: "10",
    title: "Liam Thompson (61)",
    patientName: "Liam Thompson",
    age: 61,
    appointmentType: "Extraction",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    start: "2025-09-24T09:00:00",
    end: "2025-09-24T10:00:00",
    classNames: ["urgent"]
  },
  {
    id: "11",
    title: "Sophia Anderson (24)",
    patientName: "Sophia Anderson",
    age: 24,
    appointmentType: "Cleaning",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    start: "2025-09-24T10:30:00",
    end: "2025-09-24T11:15:00",
    classNames: ["cleaning"]
  },
  {
    id: "12",
    title: "Mason Taylor (48)",
    patientName: "Mason Taylor",
    age: 48,
    appointmentType: "Bridge",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    start: "2025-09-24T13:00:00",
    end: "2025-09-24T14:00:00",
    classNames: ["checkup"]
  },
  {
    id: "13",
    title: "Charlotte Moore (37)",
    patientName: "Charlotte Moore",
    age: 37,
    appointmentType: "Recall",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    start: "2025-09-24T15:00:00",
    end: "2025-09-24T15:30:00",
    classNames: ["recall"]
  },
  
  // Thursday, September 25, 2025
  {
    id: "14",
    title: "Ethan Jackson (55)",
    patientName: "Ethan Jackson",
    age: 55,
    appointmentType: "Crown",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
    start: "2025-09-25T08:00:00",
    end: "2025-09-25T09:00:00",
    classNames: ["checkup"]
  },
  {
    id: "15",
    title: "Amelia White (29)",
    patientName: "Amelia White",
    age: 29,
    appointmentType: "Cleaning",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    start: "2025-09-25T09:30:00",
    end: "2025-09-25T10:15:00",
    classNames: ["cleaning"]
  },
  {
    id: "16",
    title: "Benjamin Harris (44)",
    patientName: "Benjamin Harris",
    age: 44,
    appointmentType: "Implant",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
    start: "2025-09-25T11:00:00",
    end: "2025-09-25T12:00:00",
    classNames: ["consult"]
  },
  {
    id: "17",
    title: "Mia Martin (33)",
    patientName: "Mia Martin",
    age: 33,
    appointmentType: "Recall",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
    start: "2025-09-25T14:00:00",
    end: "2025-09-25T14:30:00",
    classNames: ["recall"]
  },
  {
    id: "18",
    title: "Lucas Lee (26)",
    patientName: "Lucas Lee",
    age: 26,
    appointmentType: "Urgent",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
    start: "2025-09-25T16:00:00",
    end: "2025-09-25T16:45:00",
    classNames: ["urgent"]
  },
  
  // Friday, September 26, 2025
  {
    id: "19",
    title: "Harper Walker (41)",
    patientName: "Harper Walker",
    age: 41,
    appointmentType: "Cleaning",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
    start: "2025-09-26T09:00:00",
    end: "2025-09-26T09:45:00",
    classNames: ["cleaning"]
  },
  {
    id: "20",
    title: "Daniel Young (38)",
    patientName: "Daniel Young",
    age: 38,
    appointmentType: "Veneer",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
    start: "2025-09-26T10:00:00",
    end: "2025-09-26T11:30:00",
    classNames: ["checkup"]
  },
  {
    id: "21",
    title: "Emily Allen (27)",
    patientName: "Emily Allen",
    age: 27,
    appointmentType: "Recall",
    avatarUrl: "https://i.pravatar.cc/150?img=21",
    start: "2025-09-26T13:00:00",
    end: "2025-09-26T13:30:00",
    classNames: ["recall"]
  },
  {
    id: "22",
    title: "Robert Smith (50)",
    patientName: "Robert Smith",
    age: 50,
    appointmentType: "Consult",
    avatarUrl: "https://i.pravatar.cc/150?img=22",
    start: "2025-09-26T14:00:00",
    end: "2025-09-26T15:00:00",
    classNames: ["consult"]
  }
];
export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  role: string;
  city: string;
  side: 'groom' | 'bride';
  photo: string;
}

export const familyMembers: FamilyMember[] = [
  // Groom's Family
  {
    id: '1',
    name: "Ahmed Hassan",
    relation: "Father",
    role: "🎩 Wedding Host",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '2',
    name: "Fatima Hassan",
    relation: "Mother", 
    role: "👑 Chief Organizer",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b602?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '3',
    name: "Omar Hassan",
    relation: "Brother",
    role: "🎵 Music Coordinator", 
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '4',
    name: "Ayesha Malik",
    relation: "Sister",
    role: "🌸 Decoration Lead",
    city: "Islamabad", 
    side: "groom",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '5',
    name: "Bilal Ahmed",
    relation: "Cousin",
    role: "📸 Photography",
    city: "Karachi",
    side: "groom", 
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '6',
    name: "Zainab Khan",
    relation: "Aunt",
    role: "🍽️ Catering Manager",
    city: "Faisalabad",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },

  // Bride's Family  
  {
    id: '7',
    name: "Muhammad Ali",
    relation: "Father",
    role: "🏡 Venue Coordinator",
    city: "Lahore",
    side: "bride",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '8',
    name: "Khadija Ali",
    relation: "Mother",
    role: "💐 Floral Designer", 
    city: "Lahore",
    side: "bride",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '9',
    name: "Hassan Ali", 
    relation: "Brother",
    role: "🚗 Transportation",
    city: "Karachi",
    side: "bride",
    photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '10',
    name: "Mariam Sheikh",
    relation: "Sister", 
    role: "💄 Beauty Coordinator",
    city: "Lahore",
    side: "bride",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '11',
    name: "Usman Tariq",
    relation: "Cousin",
    role: "🎁 Gift Coordinator",
    city: "Islamabad",
    side: "bride",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '12',
    name: "Rubina Begum",
    relation: "Grandmother",
    role: "🤲 Prayers & Blessings",
    city: "Lahore", 
    side: "bride",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

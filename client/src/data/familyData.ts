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
    name: "Barkat Ali Khan",
    relation: "Father",
    role: "🎩 Wedding Host & Family Patriarch",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '2',
    name: "Mumtaz Begum",
    relation: "Mother", 
    role: "👑 Chief Organizer & Heart of the Celebration",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b602?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '3',
    name: "Rehana",
    relation: "Eldest Sister",
    role: "🧠 The Wisdom Keeper & Eldest Sister of Grace", 
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '4',
    name: "Irfan",
    relation: "Eldest Brother",
    role: "🏡 Head of Hospitality & Eldest Brother",
    city: "Islamabad", 
    side: "groom",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '5',
    name: "Sadia",
    relation: "Sister",
    role: "💄 Style Consultant & Sister of Sass",
    city: "Karachi",
    side: "groom", 
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '6',
    name: "Iffat",
    relation: "Sister",
    role: "🎊 Guest Coordinator & Vibe Curator",
    city: "Faisalabad",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '7',
    name: "Amina",
    relation: "Sister",
    role: "⚖️ Event Flow Manager & Peacekeeper",
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '8',
    name: "Khawar",
    relation: "Brother",
    role: "💻 Technology & Logistics Head",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '9',
    name: "Khurram",
    relation: "Youngest Brother",
    role: "🎵 Music Coordinator & Energy Booster",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '10',
    name: "Maliha",
    relation: "Youngest Sister",
    role: "⭐ Little Star of the Wedding",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '11',
    name: "Samina",
    relation: "Sister-in-Law",
    role: "👗 Style & Traditions Advisor",
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '12',
    name: "Gul-e-Lala",
    relation: "Niece",
    role: "🌺 Flower Girl & Junior Bridesmaid",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: '13',
    name: "ShahJahan",
    relation: "Nephew",
    role: "🎩 Junior Host & Entrance Coordinator",
    city: "Islamabad",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '14',
    name: "Hassan",
    relation: "Nephew",
    role: "📸 Photography Assistant & Smile Spreader",
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '15',
    name: "Saim",
    relation: "Nephew",
    role: "🍪 Snack Patrol Officer & Mischief Manager",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '16',
    name: "Saad",
    relation: "Nephew",
    role: "🍪 Snack Patrol Officer & Mischief Manager",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '17',
    name: "Anaya",
    relation: "Niece",
    role: "💄 Junior Stylist & Bridesmaid Assistant",
    city: "Faisalabad",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '18',
    name: "Haniya",
    relation: "Niece",
    role: "🎁 Gift Table Guardian",
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '19',
    name: "Aini",
    relation: "Niece",
    role: "📱 Junior Social Media Coordinator",
    city: "Islamabad",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '20',
    name: "Zahra",
    relation: "Niece",
    role: "🔍 Décor Inspection Officer",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '21',
    name: "Baneen",
    relation: "Niece",
    role: "🤗 Bride's Energy Buddy & Emergency Hug Giver",
    city: "Lahore",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: '22',
    name: "Zimal",
    relation: "Niece",
    role: "😄 Giggle Generator & Happiness Distributor",
    city: "Karachi",
    side: "groom",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
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

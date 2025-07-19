export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  role: string;
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
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BarkatAli&backgroundColor=b6e3f4,c0aede,d1d4f9&clothingColor=262e33,3c4043,5199e4&eyeColor=4178e0,48466d,516bc5&hairColor=0f0908,724133,d2c4b6&skinColor=edb98a,f8d25c,fd9841&top=eyepatch,hat,hijab,turban"
  },
  {
    id: '2',
    name: "Mumtaz Begum",
    relation: "Mother", 
    role: "👑 Chief Organizer & Heart of the Celebration",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MumtazBegum&backgroundColor=ffeaa7,fab1a0,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=00b894,74b9ff&skinColor=edb98a&top=hijab,winterHat2&accessories=prescription02"
  },
  {
    id: '3',
    name: "Rehana",
    relation: "Eldest Sister",
    role: "🧠 The Wisdom Keeper & Eldest Sister of Grace", 
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rehana&backgroundColor=c0aede,d1d4f9,ffeaa7&clothingColor=74b9ff,00b894,6c5ce7&eyeColor=2d3436&hairColor=d63031&skinColor=edb98a&top=longHairStraight,hijab&accessories=prescription01"
  },
  {
    id: '4',
    name: "Irfan",
    relation: "Eldest Brother",
    role: "🏡 Head of Hospitality & Eldest Brother",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Irfan&backgroundColor=74b9ff,0984e3,00b894&clothingColor=2d3436,636e72&eyeColor=00b894&hairColor=2d3436&skinColor=edb98a&top=shortHairShortFlat&facialHair=beardMedium"
  },
  {
    id: '5',
    name: "Sadia",
    relation: "Sister",
    role: "💄 Style Consultant & Sister of Sass",
    side: "groom", 
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia&backgroundColor=fd79a8,fdcb6e,e17055&clothingColor=e84393,fd79a8&eyeColor=2d3436&hairColor=a29bfe&skinColor=edb98a&top=longHairCurvy&accessories=sunglasses"
  },
  {
    id: '6',
    name: "Iffat",
    relation: "Sister",
    role: "🎊 Guest Coordinator & Vibe Curator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Iffat&backgroundColor=00b894,81ecec,a29bfe&clothingColor=00cec9,55a3ff&eyeColor=00b894&hairColor=6c5ce7&skinColor=edb98a&top=longHairBigHair&accessories=wayfarers"
  },
  {
    id: '7',
    name: "Amina",
    relation: "Sister",
    role: "⚖️ Event Flow Manager & Peacekeeper",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amina&backgroundColor=fab1a0,e17055,fdcb6e&clothingColor=00b894,74b9ff&eyeColor=2d3436&hairColor=00b894&skinColor=edb98a&top=hijab,longHairStraight2"
  },
  {
    id: '8',
    name: "Khawar",
    relation: "Brother",
    role: "💻 Technology & Logistics Head",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khawar&backgroundColor=0984e3,74b9ff,00cec9&clothingColor=2d3436,636e72&eyeColor=0984e3&hairColor=2d3436&skinColor=edb98a&top=shortHairShortWaved&accessories=prescription02&facialHair=goatee"
  },
  {
    id: '9',
    name: "Khurram",
    relation: "Youngest Brother",
    role: "🎵 Music Coordinator & Energy Booster",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khurram&backgroundColor=fdcb6e,e17055,fd79a8&clothingColor=e84393,fd79a8&eyeColor=00b894&hairColor=d63031&skinColor=edb98a&top=shortHairShortCurly&accessories=sunglasses"
  },
  {
    id: '10',
    name: "Maliha",
    relation: "Youngest Sister",
    role: "⭐ Little Star of the Wedding",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maliha&backgroundColor=ffeaa7,fab1a0,a29bfe&clothingColor=fd79a8,fdcb6e&eyeColor=2d3436&hairColor=e84393&skinColor=edb98a&top=longHairMiaWallace&accessories=blank"
  },
  {
    id: '11',
    name: "Samina",
    relation: "Sister-in-Law",
    role: "👗 Style & Traditions Advisor",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samina&backgroundColor=81ecec,00cec9,55a3ff&clothingColor=6c5ce7,a29bfe&eyeColor=00b894&hairColor=74b9ff&skinColor=edb98a&top=hijab,longHairBun&accessories=prescription01"
  },
  {
    id: '12',
    name: "Gul-e-Lala",
    relation: "Niece",
    role: "🌺 Flower Girl & Junior Bridesmaid",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuleLala&backgroundColor=ffeaa7,fd79a8,fab1a0&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=e84393&skinColor=edb98a&top=longHairCurly&accessories=blank"
  },
  {
    id: '13',
    name: "ShahJahan",
    relation: "Nephew",
    role: "🎩 Junior Host & Entrance Coordinator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=ShahJahan&backgroundColor=74b9ff,0984e3,00b894&clothingColor=2d3436,636e72&eyeColor=0984e3&hairColor=2d3436&skinColor=edb98a&top=shortHairShortFlat&accessories=blank"
  },
  {
    id: '14',
    name: "Hassan",
    relation: "Nephew",
    role: "📸 Photography Assistant & Smile Spreader",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan&backgroundColor=00b894,81ecec,a29bfe&clothingColor=00cec9,55a3ff&eyeColor=00b894&hairColor=6c5ce7&skinColor=edb98a&top=shortHairShortWaved&accessories=blank"
  },
  {
    id: '15',
    name: "Saim",
    relation: "Nephew",
    role: "🍪 Snack Patrol Officer & Mischief Manager",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saim&backgroundColor=fdcb6e,e17055,fd79a8&clothingColor=e84393,fd79a8&eyeColor=00b894&hairColor=d63031&skinColor=edb98a&top=shortHairShortCurly&accessories=blank"
  },
  {
    id: '16',
    name: "Saad",
    relation: "Nephew",
    role: "🍪 Snack Patrol Officer & Mischief Manager",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Saad&backgroundColor=fab1a0,e17055,fdcb6e&clothingColor=00b894,74b9ff&eyeColor=2d3436&hairColor=00b894&skinColor=edb98a&top=shortHairShortFlat&accessories=blank"
  },
  {
    id: '17',
    name: "Anaya",
    relation: "Niece",
    role: "💄 Junior Stylist & Bridesmaid Assistant",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anaya&backgroundColor=a29bfe,6c5ce7,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=a29bfe&skinColor=edb98a&top=longHairBigHair&accessories=blank"
  },
  {
    id: '18',
    name: "Haniya",
    relation: "Niece",
    role: "🎁 Gift Table Guardian",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Haniya&backgroundColor=81ecec,00cec9,55a3ff&clothingColor=6c5ce7,a29bfe&eyeColor=00b894&hairColor=74b9ff&skinColor=edb98a&top=longHairStraight&accessories=blank"
  },
  {
    id: '19',
    name: "Aini",
    relation: "Niece",
    role: "📱 Junior Social Media Coordinator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aini&backgroundColor=ffeaa7,fab1a0,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=e84393&skinColor=edb98a&top=longHairMiaWallace&accessories=blank"
  },
  {
    id: '20',
    name: "Zahra",
    relation: "Niece",
    role: "🔍 Décor Inspection Officer",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zahra&backgroundColor=c0aede,d1d4f9,ffeaa7&clothingColor=74b9ff,00b894,6c5ce7&eyeColor=2d3436&hairColor=d63031&skinColor=edb98a&top=longHairStraight2&accessories=blank"
  },
  {
    id: '21',
    name: "Hajra",
    relation: "Niece",
    role: "🎨 Creative Arts & Crafts Coordinator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hajra&backgroundColor=ffeaa7,fab1a0,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=e84393&skinColor=edb98a&top=longHairStraightStrand&accessories=blank"
  },
  {
    id: '22',
    name: "Baneen",
    relation: "Niece",
    role: "🤗 Bride's Energy Buddy & Emergency Hug Giver",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Baneen&backgroundColor=00b894,81ecec,a29bfe&clothingColor=00cec9,55a3ff&eyeColor=00b894&hairColor=6c5ce7&skinColor=edb98a&top=longHairCurvy&accessories=blank"
  },
  {
    id: '23',
    name: "Zimal",
    relation: "Niece",
    role: "😄 Giggle Generator & Happiness Distributor",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zimal&backgroundColor=fdcb6e,e17055,fd79a8&clothingColor=e84393,fd79a8&eyeColor=00b894&hairColor=d63031&skinColor=edb98a&top=longHairCurly&accessories=blank"
  },

  // Bride's Family  
  {
    id: '24',
    name: "Ashraf",
    relation: "Father",
    role: "🏡 Wedding Host & Family Head",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ashraf&backgroundColor=74b9ff,0984e3,00b894&clothingColor=2d3436,636e72&eyeColor=0984e3&hairColor=2d3436&skinColor=edb98a&top=shortHairShortFlat&facialHair=beardMedium&accessories=blank"
  },
  {
    id: '25',
    name: "Bride's Mother",
    relation: "Mother",
    role: "👑 Chief Organizer & Mother of the Bride", 
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrideMother&backgroundColor=ffeaa7,fab1a0,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=00b894,74b9ff&skinColor=edb98a&top=hijab,longHairStraight&accessories=prescription01"
  },
  {
    id: '26',
    name: "Mahpara", 
    relation: "Sister",
    role: "💄 Beauty & Style Coordinator",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahpara&backgroundColor=a29bfe,6c5ce7,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=a29bfe&skinColor=edb98a&top=longHairBigHair&accessories=wayfarers"
  },
  {
    id: '27',
    name: "Rabia",
    relation: "Sister", 
    role: "🌸 Decoration & Event Manager",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rabia&backgroundColor=00b894,81ecec,a29bfe&clothingColor=00cec9,55a3ff&eyeColor=00b894&hairColor=6c5ce7&skinColor=edb98a&top=longHairCurvy&accessories=blank"
  },
  {
    id: '28',
    name: "Afia",
    relation: "Sister",
    role: "🎊 Guest Relations & Hospitality",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Afia&backgroundColor=ffeaa7,fab1a0,fd79a8&clothingColor=e84393,fd79a8,fdcb6e&eyeColor=2d3436&hairColor=e84393&skinColor=edb98a&top=longHairStraight2&accessories=prescription02"
  },
  {
    id: '29',
    name: "Izaan",
    relation: "Daughter",
    role: "🌺 Junior Bridesmaid & Flower Assistant",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Izaan&backgroundColor=fdcb6e,e17055,fd79a8&clothingColor=e84393,fd79a8&eyeColor=00b894&hairColor=d63031&skinColor=edb98a&top=longHairCurly&accessories=blank"
  },
  {
    id: '30',
    name: "Rajab",
    relation: "Nephew",
    role: "🎩 Junior Host & Ring Bearer",
    side: "bride",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajab&backgroundColor=fab1a0,e17055,fdcb6e&clothingColor=00b894,74b9ff&eyeColor=2d3436&hairColor=00b894&skinColor=edb98a&top=shortHairShortFlat&accessories=blank"
  },

  // Brothers-in-Law
  {
    id: '31',
    name: "Abdul Rauf",
    relation: "Brother-in-Law",
    role: "🤝 Family Relations Coordinator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=AbdulRauf&backgroundColor=74b9ff,0984e3,00b894&clothingColor=2d3436,636e72&eyeColor=0984e3&hairColor=2d3436&skinColor=edb98a&top=shortHairShortFlat&facialHair=beardLight&accessories=blank"
  },
  {
    id: '32',
    name: "Sami Ullah",
    relation: "Brother-in-Law",
    role: "🏆 Entertainment Coordinator",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=SamiUllah&backgroundColor=00b894,81ecec,a29bfe&clothingColor=00cec9,55a3ff&eyeColor=00b894&hairColor=6c5ce7&skinColor=edb98a&top=shortHairShortWaved&facialHair=moustacheFancy&accessories=wayfarers"
  },
  {
    id: '33',
    name: "Asad",
    relation: "Brother-in-Law",
    role: "🍽️ Food & Refreshments Manager",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Asad&backgroundColor=fdcb6e,e17055,fd79a8&clothingColor=e84393,fd79a8&eyeColor=00b894&hairColor=d63031&skinColor=edb98a&top=shortHairShortCurly&facialHair=beardMedium&accessories=blank"
  },
  {
    id: '34',
    name: "Shahid",
    relation: "Brother-in-Law",
    role: "🚙 Logistics & Transport Support",
    side: "groom",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahid&backgroundColor=fab1a0,e17055,fdcb6e&clothingColor=00b894,74b9ff&eyeColor=2d3436&hairColor=00b894&skinColor=edb98a&top=shortHairShortFlat&facialHair=goatee&accessories=prescription01"
  }
];

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import CountdownTimer from '@/components/CountdownTimer';
import QuranicVerse from '@/components/QuranicVerse';
import FamilyCard from '@/components/FamilyCard';
import MessageCard from '@/components/MessageCard';
import { familyMembers } from '@/data/familyData';
import { familyMessages } from '@/data/messagesData';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [familyFilter, setFamilyFilter] = useState('all');

  const filteredGroomFamily = useMemo(() => {
    const groomMembers = familyMembers.filter(member => member.side === 'groom');
    if (familyFilter === 'all') return groomMembers;
    return groomMembers.filter(member => member.side === familyFilter);
  }, [familyFilter]);

  const filteredBrideFamily = useMemo(() => {
    const brideMembers = familyMembers.filter(member => member.side === 'bride');
    if (familyFilter === 'all') return brideMembers;
    return brideMembers.filter(member => member.side === familyFilter);
  }, [familyFilter]);

  const renderHomeTab = () => (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Ahsan and Sobia</h1>
        <p className="text-xl opacity-80 mb-10">Celebrating Love, Unity, and New Beginnings</p>
      </section>

      <div className="container mx-auto px-4">
        {/* Quranic Verse */}
        <QuranicVerse />

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Welcome Message */}
        <section className="quranic-verse">
          <h3 className="text-center mb-6 text-2xl font-semibold" style={{ color: 'var(--accent-pink)' }}>
            Welcome to Our Celebration
          </h3>
          <p className="text-center text-lg leading-relaxed">
            We are overjoyed to share this special moment with our beloved family and friends. 
            Your presence makes our celebration complete and fills our hearts with immense joy. 
            Together, let's create beautiful memories that will last a lifetime.
          </p>
        </section>
      </div>
    </div>
  );

  const renderFamilyTab = (side: 'groom' | 'bride') => {
    const filteredMembers = side === 'groom' ? filteredGroomFamily : filteredBrideFamily;
    const title = side === 'groom' ? "Groom's Family" : "Bride's Family";
    const subtitle = side === 'groom' ? "Meet the wonderful family of Ahsan" : "Meet the lovely family of Sobia";

    return (
      <div className="fade-in">
        <section className="hero-section">
          <h1 className="hero-title">{title}</h1>
          <p className="text-xl opacity-80 mb-10">{subtitle}</p>
        </section>

        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <select
              className="filter-dropdown"
              value={familyFilter}
              onChange={(e) => setFamilyFilter(e.target.value)}
            >
              <option value="all">All Family Members</option>
              <option value="groom">Groom's Side</option>
              <option value="bride">Bride's Side</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <FamilyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMessagesTab = () => (
    <div className="fade-in">
      <section className="hero-section">
        <h1 className="hero-title">Family Messages</h1>
        <p className="text-xl opacity-80 mb-10">Heartfelt wishes from our loved ones</p>
      </section>

      <div className="container mx-auto px-4">
        {familyMessages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeTab();
      case 'groom-family':
        return renderFamilyTab('groom');
      case 'bride-family':
        return renderFamilyTab('bride');
      case 'messages':
        return renderMessagesTab();
      default:
        return renderHomeTab();
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main>
        {renderActiveTab()}
      </main>

      {/* Footer */}
      <footer className="wedding-footer">
        <div className="container mx-auto px-4">
          <p className="m-0 font-medium">© 2025 AhsanKiShadi. Made with ❤️ by Khawar</p>
        </div>
      </footer>
    </div>
  );
}

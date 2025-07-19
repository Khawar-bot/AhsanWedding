import { FamilyMember } from '@/data/familyData';

interface FamilyCardProps {
  member: FamilyMember;
}

export default function FamilyCard({ member }: FamilyCardProps) {
  return (
    <div className="family-card">
      <img
        src={member.photo}
        alt={member.name}
        className="family-photo"
      />
      <h4 className="family-name">{member.name}</h4>
      <p className="family-relation">{member.relation}</p>
      <span className="family-role">{member.role}</span>
    </div>
  );
}

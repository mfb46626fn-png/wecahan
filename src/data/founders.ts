export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

export const founders: Founder[] = [
  {
    id: "can-akar",
    name: "M. Can Akar",
    role: "Co-Founder",
    bio: "Focuses on bridging the gap between complex engineering and practical digital solutions.",
  },
  {
    id: "hakan-asci",
    name: "Hakan Aşcı",
    role: "Co-Founder",
    bio: "Specializes in architecting scalable business systems and operational infrastructures.",
  },
];

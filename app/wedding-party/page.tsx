import { SectionShell } from "@/components/SectionShell";

const partyMembers = [
  {
    name: "Jose Fernandes (Father of the Bride)",
    bracketOnNewLine: true,
    photo: "Jose Fernandes.jpg",
    note: "My dad whom I adore has been a pillar of support all my life. He has battled all odds to raise two loving kids in spite of tough times. I reconize all the sacirifce and the hardships you had to go through to give me a good education and a lovely chance at life. I love you and appreciate all your input in my life. My parents have given me the greatest gift of all, teaching me and bringing me up on the word of GOD."
  },
  {
    name: "Gwendolyn Fernandes (Mother of the Bride)",
    bracketOnNewLine: true,
    photo: "Gwendolyn Fernandes.jpg",
    note: "My mother is my inspiration in life—a woman of strength and grace who raised my brother and me while my father worked at sea. She worked at KEM, a world-renowned institute in medicine as the head of surgical pathology for over 30 years. Your life of balancing work as well as teaching us eveything, right from our little days of school will always be remembered and cherished."
  },
  {
    name: "Harrison Paul (Father of the Groom)",
    bracketOnNewLine: true,
    photo: "Harrison Paul.jpg",
    note: ""
  },
  {
    name: "Nancy Paul (Mother of the Groom)",
    bracketOnNewLine: true,
    photo: "Nancy Paul.jpg",
    note: ""
  },
  {
    name: "Thomas Noronha (Uncle of the Bride)",
    bracketOnNewLine: true,
    photo: "Thomas Noronha.jpg",
    note: "My Mothers's brother-in-law, is the fun uncle in the family everyone loves. He has taught me so much. Always impresses you with the most random yet fascinating knowledge about anything you mention. Beyond the laughs, he’s shown me how to truly live, balancing responsibilities, family, and joy with ease. He is best know for the kindness and wisdom he shares so generously."
  },
  {
    name: "Giselle Noronha (Aunt of the Bride)",
    bracketOnNewLine: true,
    photo: "Giselle Noronha.jpg",
    note: "My mother’s sister, we have a lot of fond memories together. Our vacations to Goa were always special, filled with adventures and beaches. What stands out most are her wonderful Saturday Speech & Drama classes, which she conducted so passionately. She taught my brother and me how to present ourselves and speak, and carry proper table manners. She has always been someone I turn to right after my parents."
  },
  {
    name: "Pastor Mary (Wedding Officiator)",
    photo: "Pastor Mary.jpg",
    note: ""
  },
  {
    name: "Krisha Marolia (Maid of Honor)",
    photo: "Krisha Marolia.jpg",
    note: "the bride's best friend and her maid of honor. Krisha has known Ella for 14 years, and they've been through junior college, med school, and residency together. They have been the best of friends through all the seasons of life. She is a loving and caring friend unlike any other. She's unable to make it due to visa issues, but she holds a special place in Ella's heart"
  },
  {
    name: "Allen Paul (Best Man)",
    photo: "Allen Paul.jpg",
    note: "My cooler younger brother, six years behind biologically but still ahead of me in style. We share most of the same tastes, especially in music thanks to our parents. He's a Christ follower, a worship team guitarist and bassist, and the obvious choice for my best man."
  },
  {
    name: "Isaiah Fernandes (Groomsman)",
    photo: "Isaiah Fernandes.jpg",
    note: "My charming and handsome younger brother who really loves JESUS. He has grown up so well before my eyes and I am absolutely fond of him. He'll always be the same kind, determined soul I've been proud to call my brother."
  },
  {
    name: "Nerlin Peris (Bridesmaid)",
    photo: "Nerlin Peris.jpg",
    note: "Nerlin is a friend who pursued Ella and persisted in showing her that she was not just a student, but over a period of time became one of her closest friends. She has been a person who made living in Miraj far more enjoyable than it should have been, and has been her friend and confidant and been so loving for so many years."
  },
  {
    name: "Kiara Noronha (Bridesmaid)",
    photo: "Kiara Noronha.jpeg",
    note: "Kiara is fun-loving and incredibly caring, always pulling me in to play games and make new memories together. She’s the most loving sister I could’ve asked for sweet, kind, and peaceful at heart. And to top it off, she makes a dangerously good zero sugar chocolate cake. :3"
  }
] as const;

function NameWithBracketHighlight({
  text,
  bracketOnNewLine = false
}: {
  text: string;
  bracketOnNewLine?: boolean;
}) {
  const match = text.match(/^(.*?)\s*(\([^)]*\))$/);
  const baseText = match ? match[1] : text;
  const bracketText = match ? match[2] : null;
  const bracketDisplayText = bracketText ? (bracketOnNewLine ? bracketText : ` ${bracketText}`) : null;

  return (
    <>
      <span>{baseText}</span>
      {bracketDisplayText ? (
        <span className={`text-[#cabda1] ${bracketOnNewLine ? "block" : ""}`}>{bracketDisplayText}</span>
      ) : null}
    </>
  );
}

export default function WeddingPartyPage() {
  return (
    <SectionShell title="The family & wedding party" subtitle="The people standing with us on this day.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {partyMembers.map((member) => (
          <li key={member.name} className="rounded-xl border border-[#541a28]/30 bg-white p-4">
            <div className="mb-4 overflow-hidden rounded-lg border border-[#541a28]/30 bg-[#f9f5ef]">
              <img
                src={`/api/wedding-image?name=${encodeURIComponent(member.photo)}`}
                alt={member.name}
                className="h-64 w-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#541a28]">
              <NameWithBracketHighlight text={member.name} bracketOnNewLine={member.bracketOnNewLine} />
            </h2>
            <p className="mt-2 text-justify text-ink/85">{member.note}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

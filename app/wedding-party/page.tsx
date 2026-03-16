import { SectionShell } from "@/components/SectionShell";

const partyMembers = [
  {
    name: "Jose Fernandes (Father of the Bride)",
    bracketOnNewLine: true,
    photo: "Jose Fernandes.jpg",
    note: "My dad whom I adore has been the pillar of support all my life. He has battled all odds to raise two loving kids in spite of tough times. I reconize all the sacrifice and the hardships you had to go through to give me a good education and the best life has to offer. I love you and appreciate all your input in my life. My parents have given me the greatest gift of all. Teaching me and bringing me up on the word of GOD. - Ella"
  },
  {
    name: "Gwendolyn Fernandes (Mother of the Bride)",
    bracketOnNewLine: true,
    photo: "Gwendolyn Fernandes.jpg",
    note: "My mother is my inspiration in life, a woman of strength and grace who raised my brother and me while my father worked abroad. The sacrifices you made & the support & faith you have always had in me made me a Surgeon. You taught as everything, right from preschool till high school. You also taught us the word of GOD and I will always be most grateful to you. - Ella."
  },
  {
    name: "Harrison Paul (Father of the Groom)",
    bracketOnNewLine: true,
    photo: "Harrison Paul.jpg",
    note: "Raising a family while moving between three different countries is no small feat, but my dad somehow made Taiwan and the US feel like home. He has been a role model to me and Allen—both as a Christ‑follower and as a loving father. He sparked my love for traveling and discovering what the world has to offer, and he continues to be our steady source of support and encouragement. -Kelvin"
  },
  {
    name: "Nancy Paul (Mother of the Groom)",
    bracketOnNewLine: true,
    photo: "Nancy Paul.jpg",
    note: "Visitors never leave our home without complimenting my mom’s cooking, and I especially came to appreciate her meals after four years of dorm‑food survival. She lives a Christ‑centered life and cares deeply for everyone God places in her path. No matter where we are, she has a way of making any place feel like home. -Kelvin"
  },
  {
    name: "Thomas & Giselle Noronha (Uncle/Aunt of the Bride)",
    bracketOnNewLine: true,
    photo: "Thomas Noronha.jpg",
    note: "Thomas Noronha: The fun uncle in the family, he loves his family and always supported me and did a 1000 small things for me to help me with life and my career.\nGiselle Noronha: A loving aunt and a teacher and family to us. She has cared for me like a daughter and always made our days special for years. Her Speech & Drama classes, the Goa trips and the kalina weekends are very fond memories to me."
  },
  // {
  //   name: "Pastor Mary (Wedding Officiator)",
  //   photo: "Pastor Mary.jpg",
  //   note: ""
  // },
  {
    name: "Krisha Marolia (Maid of Honor)",
    photo: "Krisha Marolia.jpeg",
    note: "The bride's best friend and MOM and her maid of honor. She's known Ella for 14 years, and they've been through junior college, med school, and residency together. They have been the best of friends through all the seasons of life. She is a loving and caring friend unlike any other. She's unable to make it sadly, but holds a special place in my's heart."
  },
  {
    name: "Allen Paul (Best Man)",
    photo: "Allen Paul.jpg",
    note: "My cooler younger brother, six years behind biologically but still ahead of me in style. We share most of the same tastes, especially in music thanks to our parents. He's a Christ follower, a worship team guitarist and bassist, and the obvious choice for my best man."
  },
  {
    name: "Isaiah Fernandes (Groomsman, brother of the bride)",
    photo: "Isaiah Fernandes.jpg",
    note: "Isaiah is my younger brother. He is four years younger, but has now grown taller and believes he is older. (Delusional belief). Isaiah is the brother who has stood by her through thick and thin. He is confident, charming, handsome, loving, a man of God and is the best brother she could have ever asked for. He has been her best friend and has stood steadily by her in the best and in the very worst of times. He is a blessing to everyone and she cannot imagine what life would have been for her without him."
  },
  {
    name: "Nerlin Peris (Bridesmaid)",
    photo: "Nerlin Peris.jpeg",
    note: "Nerlin is a friend who pursued Ella and persisted in showing her that she was not just a student, but over a period of time became one of her closest friends. She has been a person who made living in Miraj far more enjoyable than it should have been, and has been her loving confidant for so many years."
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
    <SectionShell title="Our family & Wedding party" subtitle="The people standing with us on this day.">
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
              <NameWithBracketHighlight
                text={member.name}
                bracketOnNewLine={"bracketOnNewLine" in member ? member.bracketOnNewLine : false}
              />
            </h2>
            <p className="mt-2 whitespace-pre-line text-justify text-ink/85">{member.note}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

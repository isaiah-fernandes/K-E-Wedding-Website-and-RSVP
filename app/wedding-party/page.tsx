import { SectionShell } from "@/components/SectionShell";

const partyMembers = [
  {
    name: "Jose Fernandes (Father of the Bride)",
    bracketOnNewLine: true,
    photo: "Jose Fernandes.jpg",
    note: "My dad whom I adore has been the pillar of support all my life. He has battled all odds to raise two loving kids in spite of tough times. I recognize all the sacrifice and the hardships you had to go through to give me a good education and the best life has to offer. I love you and appreciate all your input in my life. My parents have given me the greatest gift of all that is teaching me and bringing me up on the word of GOD. - Ella"
  },
  {
    name: "Dr. Gwendolyn Fernandes (Mother of the Bride)",
    bracketOnNewLine: true,
    photo: "Gwendolyn Fernandes.jpg",
    note: "My mother is my inspiration in life, a woman of strength and grace who raised my brother and me while my father worked abroad. The sacrifices you made & the support & faith you have always had in me made me a surgeon. You taught us everything, right from preschool till high school. You also taught us the word of GOD and I will always be most grateful to you. - Ella."
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
    note: "Thomas Noronha: The fun uncle in the family, he loves his family and always supported me and did a 1000 small things for me to help me with life and my career.\nGiselle Noronha: A loving aunt and a teacher and family to us. She has cared for me like a daughter and always made our days special for years. Her Speech & Drama classes, the Goa trips and the kalina weekends are very fond memories to me. -Ella"
  },
  {
    name: "Pastor Mary (Wedding Officiator)",
    photo: "Pastor Mary.jpg",
    note: "I’m Pastor Mary, and I am truly honored to be Kelvin and Ella’s officiant for the most anticipated wedding of the year! I met Kelvin when I came to GraceWay Church in February of 2023. He was in a Bible study of a few young people around his age, and no matter what question, issue, or crazy story came up, he was calm and thoughtful in his responses, always with a well-timed joke to boot. He continues to be the glue to every social group, and I have yet to meet someone who doesn’t get along with Kelvin! We always knew it would be a special woman to touch his heart, so when he mentioned someone particularly captivating, I couldn’t wait to meet her. And indeed, Ella is special - she is  smart and precocious, able to keep step with Kelvin and truly be his partner in crime - or at least in life! I can’t wait to share this beautiful occasion, lead us through a meaningful ceremony, and join in God’s blessing over this union! Let’s make some unforgettable memories together."
  },
  {
    name: "Krisha Marolia (Maid of Honor)",
    photo: "Krisha Marolia.jpeg",
    note: "The bride's best friend and her maid of honor. She's known Ella for 14 years, and they've been through junior college, med school, and residency together. They have been the best of friends through all the seasons of life. She is a loving and caring friend unlike any other. She's unable to make it sadly, but holds a special place in my's heart. -Isaiah"
  },
  {
    name: "Allen Paul (Best Man)",
    photo: "Allen Paul.jpg",
    note: "My cooler younger brother, six years behind biologically but still ahead of me in style. We share most of the same tastes, especially in music thanks to our parents. He's a Christ follower, a worship team guitarist and bassist, and the obvious choice for my best man. -Kelvin"
  },
  {
    name: "Isaiah Fernandes (Groomsman, brother of the bride)",
    photo: "Isaiah Fernandes.jpg",
    note: "Isaiah is my younger brother. He is four years younger, but has now grown taller and believes he is older. (Delusional belief). Isaiah is the brother who has stood by her through thick and thin. He is confident, charming, handsome, loving, a man of God and is the best brother she could have ever asked for. He has been her best friend and has stood steadily by her in the best and in the very worst of times. He is a blessing to everyone and she cannot imagine what life would have been for her without him. -Ella"
  },
  {
    name: "Nerlin Peris (Bridesmaid)",
    photo: "Nerlin Peris.jpeg",
    note: "Nerlin is a friend who pursued Ella and persisted in showing her that she was not just a student, but over a period of time became one of her closest friends. She has been a person who made living in Miraj far more enjoyable than it should have been, and has been her loving confidant for so many years. -Isaiah"
  },
  {
    name: "Kiara Noronha (Bridesmaid)",
    photo: "Kiara Noronha.jpeg",
    note: "Kiara is fun-loving and incredibly caring, always pulling me in to play games and make new memories together. She’s the most loving sister I could’ve asked for sweet, kind, and peaceful at heart. And to top it off, she makes a dangerously good zero sugar chocolate cake. :3 - Ella"
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

import { SectionShell } from "@/components/SectionShell";

const coupleQa = [
  {
    question: "Who is more intense?",
    answer: "Ella"
  },
  {
    question: "What does a normal converstation sound like?",
    answer:
      "Kelvin: \"technically speaking...\"\nElla: \"Clinically Speaking...\"\nBoth: 45-minute debate about something that did not matter."
  },
  {
    question: "What's their idea of a conversation?",
    answer:
      "Kelvin: \"Let me explain Semiconductors and the physics behind it.\"\nElla: \" Let me explain appendectomy & how much post op bleeding is tolerable.\"\nBoth: Somehow still impressed"
  },
  {
    question: "Who takes longer to get ready?",
    answer: "Official answer: Kelvin"
  },
  {
    question: "Who is the nicer one?",
    answer: "Kelvin"
  },
  {
    question: "Who is the more patient one?",
    answer: "Kelvin"
  },
  {
    question: "Who is more stubborn?",
    answer: "Both are equally stubborn, but more so Ella"
  },
  {
    question: "Who takes much longer to get ready?",
    answer: "Its still Kelvin"
  },
  {
    question: "Who is the more dramatic one?",
    answer: "About real problems: Neither \n About Food being late: Kelvin  \n  About clothing: Ella"
  },
  {
    question: "Who explains their job better?",
    answer:
      "Kelvin: goes on about telling you something you won't understand on silicon chips.\nElla: procedes to tell you a horror story on a patient she operated. \n Family understands Neither"
  },
  {
    question: "What do they discuss on a three hour call?",
    answer:
      "Kelvin: let me tell you about the history of silicon valley.\nElla: Let me show you how to learn to read an Xray even though you will never ever need it."
  },
  {
    question: "",
    answer: "Kelvin: Let me tell you what the differnece between the i5 and i9 intel chip\nElla: Does this xray I sent you on whatsapp have a pneumothorax?"
  },
  {
    question: "Who gives the longer TED talks on literally anything?",
    answer: "Ella"
  },

] as const;

export default function MeetTheCouplePage() {
  return (
    <SectionShell title="Meet the Couple" subtitle="How our story started and where it is going.">
      <div className="space-y-8 [&_p]:text-justify">

        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Jesus</h2>
          <p className="text-ink/85">
            Our God and closest friend, the One who brought us together in such a miraculous way. We are forever grateful for how He placed us at the right place at the right time. 
            Through Him, we’ve learned what it truly means to love others, and those lessons have shaped both of us deeply. 
            The love you see in this union is simply a reflection of the love Jesus has for us, and we hope you get to experience that love in your own lives. - Kelvin & Ella. 
          </p>
        </article>
      
        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Ellerhea Fernandes</h2>
          <p className="text-ink/85">
            Ella has a fantastic sense of humor and just enough sarcasm to keep everyone on their toes. I genuinely feel for the many unsuspecting souls who have fallen for her pranks. 
            When she’s not caring for patients, she somehow has the energy to start an unofficial football team (soccer for the Americans) after getting disappointed by Arsenal bottling another season. 
            What I admire most is her unwavering pursuit of Christ and the joy with which she shares how God has shaped her life. - Kelvin
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Kelvin Paul</h2>
          <p className="text-ink/85">
            Kelvin is an amazing and lovable man of God who cares deeply for his family and friends. For those who don’t know him yet, he’s 5'11”, works as a Product Engineer at Siemens, and for reasons still unknown to most humans, loves running marathons. Voluntarily. Repeatedly.
            He doesn’t just enjoy running; he will happily give you many unsolicited lectures on shoes and training strategies. And before you know it, he’ll probably convince you to sign up for a 5K, too.
            In his free time, he enjoys watching other people run (yes, really) and hiking mountains like he’s preparing for a side quest.
          </p>
          <p className="text-ink/85">
            He’s basically so very nice it somehow makes me look meaner by comparison. He loves memes and will never let you forget an embarrassing moment. Kelvin runs on industrial quantities of coffee and claims that he desires a weekend of doing absolutely nothing, yet in all the time I’ve known him, I have never once seen him accomplish a “do nothing” evening. I’m convinced it’s impossible for him.
            I know if you looked deep into his soul, you’d find a man who loves Christ, espressos, shoes, and good vibes. 
            - Ellerhea

          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Our Story</h2>
          <p className="text-ink/85">
            Ella had just begun her medical rotation in Miami when she met Kelvin, and they
            instantly felt that God had brought their paths together. Their bond grew through long,
            heartfelt conversations about their childhoods, college years, and Gods faithfulness in
            their lives. Before long, they knew they were meant for each other and got engaged.
          </p>
        </article>

        <article className="space-y-3">
          <h2 className="text-2xl font-semibold text-[#cabda1]">Get to know the couple</h2>
          {coupleQa.map((item, idx) => (
            <div key={`${item.question}-${idx}`} className="space-y-0">
              {item.question ? (
                <h3 className="text-xl font-semibold text-[#541a28]">{item.question}</h3>
              ) : null}
              <p className="mt-0 whitespace-pre-line text-black leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </article>
      </div>
    </SectionShell>
  );
}





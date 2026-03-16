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
    answer: "Kelvin: Let me tell you what the differnece between the i5 and i9 intel chip\nElla: Does this xray I sent you on wahtsapp have a Pneumothorax"
  },
  {
    question: "Who gives the longer ted talks on literally anything?",
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
            Our GOD and best friend, the one who bought us together miraculously and we are
            forever grateful for him for helping us be at the right place at the right time.
            He has really shown us how to love others, something which has spoken volumes to the both of us. 
            The love you see in this holy union is a reflection of the love Jesus has for the church, and we hope y'all get to experience it as well. 
          </p>
        </article>
      
        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Ellerhea Fernandes</h2>
          <p className="text-ink/85">
            Ella has a fantastic sense of humor and just enough sarcasm to keep everyone on their
            toes. I genuinely feel for the many unsuspecting souls who have fallen for her pranks.
            When shes not caring for patients, she somehow has the energy to start an unofficial
            football team (soccer for the Americans). But what I admire most is her unwavering
            pursuit of Christ and the joy with which she shares how God has shaped her life. -
            Kelvin
          </p>
        </article>

        <article className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#541a28]">Kelvin Paul</h2>
          <p className="text-ink/85">
            Kelvin is an amazing and lovable man of GOD who loves his family and friends. For all of you who do not know him, he is 511 and works as a semiconductor product engineer for Siemens. He for reasons unknown to most mankind loves running marathons. Voluntarily. Reapeatedly. He just doesnt like running, he will give you an unsolicited talk on shoes and training regimens. Soon enough he will somehow convince you to sign up for atleast a 5k. In his free time, he loves watching other people run and hikes mountains like hes training for a side quest. He is the human equivalent of a goldetn retriever/border collie and makes me seem less nice by comparison. He loves memes and wont let you live down and embarassing moment ever. Did I mention he also runs entirely on industrial quantities of coffe? He truly believes that he desires a weekend where he will do nothing but watch paint dry. I have never seen him do a "do nothing" evening. I do not believe such a weekend is possible for him. He is obssessed with his heartrate, drinks Peligrino to unwind and loves all his subscriptions especially his regal cinema pass. Im convinced if you look deep into his soul, you'll find a man who loves Christ, expressos and shoes and good vibes - Ellerhea
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

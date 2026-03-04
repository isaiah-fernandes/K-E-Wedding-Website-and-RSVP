import { SectionShell } from "@/components/SectionShell";

const coupleQa = [
  {
    question: "Who is more intense?",
    answer: "Do they both pretend they're not, absolutely!"
  },
  {
    question: "What does a normal converstation sound like?",
    answer:
      "Him: \"technically speaking...\"\nHer: \"Clinically Speaking...\"\nBoth: 45-minute debate about something that did not matter."
  },
  {
    question: "What's their idea of a conversation?",
    answer:
      "He: \"Let me explain transistro scaling.\"\nHer: \" Let me explain portal triads.\"\nBoth: Somehow still impressed"
  },
  {
    question: "Their arguments?",
    answer: "He says: \"let approach this logically\"\nshe says: \"I am the logic.\""
  },
  {
    question: "Who takes longer to get ready?",
    answer: "Official answer: kelvin"
  },
  {
    question: "Who is the nicer one?",
    answer: "Kelvin"
  },
  {
    question: "Who is the more patient one?",
    answer: "kelvin"
  },
  {
    question: "Who is more stubborn?",
    answer: "yes"
  },
  {
    question: "Who takes much longer to get ready?",
    answer: "its, still kelvin"
  },
  {
    question: "Who is the more dramatic one?",
    answer: "Food being late: kelvin"
  },
  {
    question: "Who explains their job better?",
    answer:
      "Kelvin: goes on about telling you something you won't understand on silicon waffers.\nElla: procedes to tell you a horror srtory about one patient. family does not get it either"
  },
  {
    question: "What do they discuss on a three hour call?",
    answer:
      "Kelvin: let me tell you about the history of silicon valley.\nElla: Let me show you how to learn to read an X ray even though you will never use it."
  },
  {
    question: "",
    answer: "Kelvin: The difference between i5 and i9 intel chip\nElla: Does this xray have a numo tnumothorax"
  },
  {
    question: "Who gives the longer ted talks on literally anything?",
    answer: "This time its Ella"
  },
  {
    question: "Who is the morning person?",
    answer: "Ella"
  }
] as const;

export default function MeetTheCouplePage() {
  return (
    <SectionShell title="Meet the Couple" subtitle="How our story started and where it is going.">
      <div className="space-y-8 [&_p]:text-justify">
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
            Kelvin is a 5′11″ software wizard who spends his days whispering to semiconductor chips
            and somehow convincing them to behave. A genuinely kind, golden-retriever engineer who
            for reasons unknown to science, enjoys running. For fun. Voluntarily. Repeatedly. He
            doesnt just like running oh no he will absolutely deliver a unsolicited talk on shoes,
            pacing strategy, and the endurance journey of marathons. And before you know it, youve
            been peer-pressured into signing up for one Casually. He also hikes mountains like hes
            training for a side quest.
          </p>
          <p className="text-ink/85">
            Kelvin is the equivalent of the soft, warm yellow glowing lights that makes everything
            look so much more aesthetic and pleasing all while benchmarking efficiency. Cozy vibes.
            Premium ambiance. Hes dangerously witty, fluent in memes, and shares my love for pop
            culture which means our conversations never end and occasionally sound like two two
            teenages discussing their favourite show. He wont let you live down an embarassingy
            moment, Ever. His memory is weaponized. Archived. Backed up in the cloud. Did I
            mention he runs entirely on industrial quantities of coffee. Im convinced if you look
            within his soul, its just loving Jesus and espresso and good vibes inside. - Ellerhea
          </p>
        </article>

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

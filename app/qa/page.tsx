import { SectionShell } from "@/components/SectionShell";

const faqs = [
  {
    question: "When should I RSVP by?",
    answer: "We would appreciate it if you could have it in by the end of march 2026."
  },
  {
    question: "What's the dress code?",
    answer:
      "Buissness Casual or Casual Buisness, whatever works for you, no but seriously this is an indian wedding, lookmaxxing is highly encouraged."
  },
  {
    question: "Am I allowed to bring a plus one?",
    answer: "Sadly, no, unless specifically mentioned on the invitation. Thank you so much for understanding!"
  },
  {
    question: "What time should I arrive to the venue?",
    answer: "4:00pm, 1600 Hours, and if you brown then its 3:30pm, 1530 Hours"
  },
    {
    question: "Will there be dancing?",
    answer:
      "Absolutely. So you better come prepared with those moves, stretch those hamstrings, and be ready to bust it down on the dance floor like you’ve been practicing in the mirror for weeks. No excuses"
  },
  {
    question: "Can I take pictures with my phone?",
    answer:
      "Enjoy the moment during the wedding ceremony while you can go NUTS! with your phone at the reception."
  },
  {
    question: "Will there be options for those with dietary restrictions?",
    answer:
      "There will be a selection of vegetarian and non - vegetarian options. If you have a more specific dietary restriction, do let us know."
  },
  {
    question: "Is the ceremony and reception at the same place?",
    answer: "Yes, both will be at skyline church."
  },
  {
    question: "Are kids welcome?",
    answer:
      "For sure, all the kids are welcomed into the kingdom of GOD. have yourself a family night."
  },
  {
    question: "Is the wedding indoors?",
    answer: "Yes, it's in the middle of may in california, so its goona be a bit warm"
  }
];

export default function QAPage() {
  return (
    <SectionShell title="Q&A" subtitle="Quick answers to common wedding weekend questions.">
      <div className="space-y-4">
        {faqs.map((item) => (
          <article key={item.question} className="rounded-xl border border-[#541a28]/30 bg-white p-4">
            <h2 className="text-lg font-semibold text-[#541a28]">{item.question}</h2>
            <p className="mt-2 text-justify text-sm text-ink/85">{item.answer}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

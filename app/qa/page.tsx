import { SectionShell } from "@/components/SectionShell";

const faqs = [
  {
    question: "When is the RSVP deadline?",
    answer: "We  request you RSVP by April 26th, 2026. You may also reach out to Kelvin, Ella, or any family member to RSVP."
  },
  {
    question: "What time should I arrive to the venue?",
    answer: "The wedding ceremony begins at 4:00 PM followed by the reception at 6:00 PM."
  },
    {
    question: "Can we expect dancing at the reception?",
    answer:
      "Absolutely! So make sure you’ve stretched, bring your best moves, and be prepared to light up the dance floor like you’ve been rehearsing in the mirror. No excuses."
  },
  {
    question: "Will the ceremony and reception take place at the same venue?",
    answer: "Yes, the ceremony will be held inside the church, and the reception will follow in the church courtyard."
  },
  {
    question: "Can I bring my family or significant other?",
    answer:
      "Yes! Your family and/or significant other are invited. Please make sure to specify the head count and food preference in the RSVP by April 1st, 2026."
  },
  {
    question: "Will there be parking at the venue?",
    answer:
      "The church's parking lot can accommodate only about 50 cars, so we encourage guests to carpool. Additional parking spots are available in the surrounding neighborhood if the church lot is full. Please ensure you are not parked in a no-parking area."
  },
  {
    question: "What's the dress code for the wedding ceremony and reception?",
    answer: (
      <>
        You're welcome to dress in formal or dressy casual attire. Since the reception will be outdoors in the
        church courtyard, we recommend bringing a warmer layer in case the evening gets cool.{" "}
        <strong>Optionally, you can match the theme by wearing burgundy/maroon/pink as well.</strong>
      </>
    )
  },
  {
    question: "Will there be alcohol?",
    answer:
      "In keeping with the decorum of the church premises, alcohol will not be served or consumed at the reception."
  },
  {
    question: "Is childcare available?",
    answer:
      "Childcare will not be provided during the wedding, but you are welcome to bring your children and ensure that they are always supervised."
  },
  {
    question: "What type of food will be served during the reception?",
    answer:
      "We will be serving Indian food for the reception with both vegetarian and non-vegetarian options. Please confirm your food preference and head count for each preference in the RSVP by April 26th, 2026, so that we can inform the caterer."
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

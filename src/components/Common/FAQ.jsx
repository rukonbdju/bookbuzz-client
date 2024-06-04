const FAQ = () => {
    const faq = [
        {
            id: 1,
            question: "Are all reviews weighted equally in creating an overall grade?",
            answer: "Yes. All accepted reviews are created equal."
        },
        {
            id: 2,
            question: "I’m a writer/reader/publicist/critic/curious human, how can I get in touch with Book Marks?",
            answer: "We’re always excited to hear your thoughts. Contact us at bookmarks@lithub.com"
        },
        {
            id: 3,
            question: "Do lists and interviews count as reviews?",
            answer: "Lists do, but only if they contain a substantive critique. Interviews do not."
        },
        {
            id: 4,
            question: "re trade reviews included?",
            answer: "es. Trade reviews are included. "
        },
        {
            id: 5,
            question: "Can I see all the books an individual critic has reviewed?",
            answer: "Yes. Just click on a critic’s name and you’ll be taken to their page, allowing you to see every on-site book they have reviewed, and to engage more deeply with their work."
        },
        {
            id: 6,
            question: "Can I see the individual rating for each review?",
            answer: "Yes. Each individual review pull quote on site is accompanied a representative rating."
        },
    ]
    return (
        <section className="p-5 rounded-md bg-slate-50 my-10 shadow-md">
            <h1 className="text-3xl">FAQ</h1>
            <div className="divider"></div>
            <div>
                {faq.map(item => <div key={item.id} className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        {item.question}
                    </div>
                    <div className="collapse-content">
                        <p>{item.answer}</p>
                    </div>
                </div>)}
            </div>

        </section>
    )
}
export default FAQ
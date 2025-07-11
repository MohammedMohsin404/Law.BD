import React from "react";

const blogs = [
  {
    id: 1,
    question: "What is useState and how does it work in React?",
    answer: `
useState is a React Hook that lets you add state to functional components.
It returns a pair: the current state value and a function that lets you update it.

✅ Example:
const [count, setCount] = useState(0);

Every time setCount is called, React re-renders the component with the new value.
    `,
  },
  {
    id: 2,
    question: "What is the purpose of useEffect in React?",
    answer: `
useEffect is a Hook for handling side effects in React such as data fetching, DOM manipulation, or setting subscriptions.

✅ Example:
useEffect(() => {
  fetchData();
}, []);

The empty dependency array means this effect runs once after the component mounts.
    `,
  },
  {
    id: 3,
    question: "What is a custom hook in React and when should you use one?",
    answer: `
A custom hook is a JavaScript function whose name starts with "use" and that can call other hooks.
You use it to extract and reuse logic across multiple components.

✅ Example:
useAuth(), useForm(), useTheme()

Custom hooks help make your code cleaner and easier to maintain.
    `,
  },
  {
    id: 4,
    question: "Difference between controlled and uncontrolled components. Which one is better?",
    answer: `
🔹 Controlled Component: React controls the form input.
<input value={value} onChange={handleChange} />

🔹 Uncontrolled Component: Uses a ref to get input value.
<input ref={inputRef} />

✅ Controlled components are generally preferred because they provide better control and validation.
    `,
  },
  {
    id: 5,
    question: "Tell us something about useFormStatus() in React.",
    answer: `
useFormStatus is a new hook introduced in React 18 for managing the pending state of a form during submission.

✅ It’s useful in frameworks like Next.js with the new App Router.

You can show loaders, disable buttons, or give user feedback while the form is submitting.
    `,
  },
];

const Blogs = () => {
  return (
    <section className="max-w-5xl mx-auto p-8">

        
      <h1 className="text-4xl font-bold text-center text-[#0EA106] mb-12">
        📚 React Insights – Blog Articles
      </h1>
      <div className="space-y-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 shadow-lg rounded-xl border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {blog.question}
            </h2>
            <pre className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {blog.answer}
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

import News from "./News";

export default function Hero() {
  return (
    <div className="mt-14 ">
      <h1 className="text-4xl font-bold ">Rajesh Chaudhary</h1>
      <p className="mt-3 tracking-[1px]">
        Hi! I'm an Full Stack Engineer at BudgetICU (HBS) working on medical AI
        assistant agents.
      </p>

      <p className="mt-6 tracking-[1px]">
        Previously, I was a full-stack engineer at Holy Basil Mediclinic,
        leading development on BudgetICU, a secure hospital management product.
        I have worked on projects like I4invest and Haldiram’s Package Leakage
        Tracker, specializing in React.js, Next.js, and Django Rest Framework.
        My work includes implementing AES and Diffie-Hellman encryption,
        automating WhatsApp messaging, and optimizing deployments to reduce
        costs by 90%. I am passionate about building secure, scalable, and
        impactful applications.
      </p>
      <News />
    </div>
  );
}

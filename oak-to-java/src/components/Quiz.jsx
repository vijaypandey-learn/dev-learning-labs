import { useState } from "react";
import { ChevronRight, Trophy, House } from "lucide-react";
import { questions } from "../data/questions.jsx";

const Quiz = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (idx) => {
    if (idx === questions[currentIdx].a) {
      setScore(score + 1);
    }

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="py-24 bg-slate-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          {!showResults ? (
            <>
              <h3 className="text-2xl font-bold mb-6">
                {questions[currentIdx].q}
              </h3>

              <div className="grid gap-4">
                {questions[currentIdx].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="px-6 py-4 border rounded-xl hover:bg-amber-50 hover:border-amber-500 flex justify-between items-center"
                  >
                    {opt}
                    <ChevronRight />
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <Trophy className="mx-auto text-amber-500 w-16 h-16 mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                You scored {score} / {questions.length}
              </h3>

              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-slate-900 text-white rounded-xl flex items-center gap-2 mx-auto"
              >
                <House /> Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { QUIZ_QUESTIONS, QuizQuestion } from "@/lib/data/quiz";
import { addXP, getPlayerProfile, savePlayerProfile } from "@/lib/xp";
import { site } from "@/lib/site-config";
import { ArrowRight, CheckCircle2, XCircle, Zap, RotateCcw, Share2, Timer, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [xpAwarded, setXpAwarded] = useState(0);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIndex];

  // 20-second timer per question
  useEffect(() => {
    if (quizFinished || isAnswered) return;

    if (timeLeft <= 0) {
      handleOptionClick(-1); // Timeout
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, quizFinished]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(20);
    } else {
      // Quiz finished! Award XP
      const earnedScore = score + (selectedOption === currentQ.correctIndex ? 1 : 0);
      const earnedXp = earnedScore * 10;
      setXpAwarded(earnedXp);

      // Save high score and award XP
      const profile = getPlayerProfile();
      if (earnedScore > profile.quizHighScore) {
        profile.quizHighScore = earnedScore;
        savePlayerProfile(profile);
      }
      addXP(earnedXp, `Founder IQ Quiz (${earnedScore}/10)`);

      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(20);
    setXpAwarded(0);
  };

  return (
    <div className="py-12 lg:py-16 bg-paper min-h-screen corner-wash">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between font-mono text-xs text-ink-muted">
          <Link href="/arena" className="hover:text-ink flex items-center gap-1">
            &larr; Back to The Arena
          </Link>
          <span>FOUNDER IQ &middot; SPRINT 26</span>
        </div>

        {!quizFinished ? (
          /* Active Question Card */
          <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-6 sm:p-8 shadow-lift space-y-6">
            {/* Header with question number and timer */}
            <div className="flex items-center justify-between border-b border-paper-border pb-4">
              <div className="flex items-center gap-2">
                <span className="stamp-tag bg-lime text-ink font-bold">
                  Q{currentIndex + 1} OF {QUIZ_QUESTIONS.length}
                </span>
                <span className="micro-label text-ink-muted text-xs font-mono">
                  [{currentQ.category}]
                </span>
              </div>

              <div
                className={`flex items-center gap-1.5 font-mono text-xs font-bold px-2.5 py-1 rounded-[3px] border ${
                  timeLeft <= 5
                    ? "bg-heat text-white border-heat animate-pulse"
                    : "bg-paper-sunken border-paper-border text-ink"
                }`}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Question Title */}
            <div className="space-y-2">
              <h2 className="font-display font-bold text-xl sm:text-2xl text-ink leading-snug">
                {currentQ.question}
              </h2>
            </div>

            {/* 4 Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = currentQ.correctIndex === idx;

                let optionStyles = "bg-paper-card border-paper-border hover:border-ink/60 text-ink";

                if (isAnswered) {
                  if (isCorrect) {
                    optionStyles = "bg-[#EAFCC0] border-lime text-ink font-semibold";
                  } else if (isSelected && !isCorrect) {
                    optionStyles = "bg-[#FFEAE4] border-heat text-ink";
                  } else {
                    optionStyles = "bg-paper-sunken/50 border-paper-border/50 opacity-60 text-ink-muted";
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-[4px] border text-sm transition-all flex items-start justify-between gap-3 ${optionStyles}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-[2px] bg-paper-sunken border border-paper-border text-ink text-xs font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-status-ok shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-heat shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation and Next Button */}
            {isAnswered && (
              <div className="p-4 bg-paper-sunken border border-paper-border rounded-[4px] space-y-3 animate-in fade-in duration-150">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs uppercase text-ink">
                    TACTICAL DEBRIEF:
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="pt-2 flex justify-end">
                  <Button variant="lime" onClick={handleNext}>
                    <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "Complete Sprint"}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished Screen: Poster Share Card */
          <div className="ticket-perforated bg-paper-card border-2 border-ink rounded-[4px] p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8 text-center max-w-lg mx-auto">
            <div className="space-y-3">
              <span className="stamp-tag bg-lime text-ink">
                SPRINT CERTIFICATE &middot; E-CELL PST
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-ink">
                Founder IQ Result.
              </h2>
              <p className="text-xs font-mono text-ink-muted">
                Season 26 &middot; Polaris School of Technology
              </p>
            </div>

            {/* Huge Ink Score */}
            <div className="p-6 bg-paper-sunken border border-paper-border rounded-[4px] space-y-2">
              <div className="font-display font-extrabold text-6xl sm:text-7xl text-ink">
                {score}/10
              </div>
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                {score >= 8
                  ? "PROVEN OPERATOR SENSE"
                  : score >= 5
                  ? "PROMISING DORM BUILDER"
                  : "SPECTATOR STATUS · HIT THE DOCS"}
              </div>
              <p className="text-xs text-ink-muted font-mono">
                Score: {score * 10}% &middot; High Score Persisted
              </p>
            </div>

            {/* XP Award Banner */}
            <div className="p-3 bg-[#EAFCC0] border border-lime rounded-[4px] flex items-center justify-center gap-2 text-ink font-mono text-xs font-bold">
              <Zap className="w-4 h-4 fill-ink" />
              <span>+{xpAwarded} XP Added to Your Profile Balance</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button variant="lime" href="/arena" className="w-full sm:w-auto">
                <Trophy className="w-4 h-4 mr-2" />
                <span>Return to Arena Board</span>
              </Button>
              <Button
                variant="subtle"
                onClick={handleRestart}
                className="w-full sm:w-auto"
              >
                <RotateCcw className="w-4 h-4 mr-1.5" />
                <span>Try Again</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

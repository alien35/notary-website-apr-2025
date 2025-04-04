"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary purpose of a notary journal?",
    options: [
      "To provide a detailed account of a notary's activities",
      "To serve as a marketing tool for notary services",
      "To offer legal advice to clients",
      "To store personal information securely",
    ],
    correctAnswer: 0,
    explanation:
      "The notary journal's primary purpose is to document a notary's activities, ensuring transparency, accountability, and compliance with state regulations.",
  },
  {
    id: 2,
    question: "Which format of notary journal is accepted in all states?",
    options: [
      "Electronic journal",
      "Paper-bound journal",
      "Both electronic and paper-bound journals",
      "Neither format",
    ],
    correctAnswer: 1,
    explanation:
      "A paper-bound journal is the traditional format and is accepted in all states.",
  },
  {
    id: 3,
    question: "What are the advantages of using an electronic notary journal?",
    options: [
      "It is immune to hacking.",
      "It enhances compliance, reduces mistakes, and streamlines workflows.",
      "It is universally accepted across all states.",
      "It does not require any state-specific safeguards.",
    ],
    correctAnswer: 1,
    explanation:
      "Electronic journals streamline workflows, enhance compliance, and reduce mistakes with state-specific safeguards. However, they may not be accepted in all states.",
  },
  {
    id: 4,
    question: "What should you check to confirm if your state allows electronic notary journals?",
    options: [
      "The state’s tax regulations",
      "Your state’s notary public website or handbook",
      "A national legal handbook",
      "The rules for traditional paper-bound journals",
    ],
    correctAnswer: 1,
    explanation:
      "To confirm if electronic journals are allowed, you should review your state’s notary public website or handbook.",
  },
  {
    id: 5,
    question: "Which detail is NOT required in a notary journal entry?",
    options: [
      "Place of notarization",
      "Fee charged for the service",
      "Signer’s method of identification",
      "Notary’s personal address",
    ],
    correctAnswer: 3,
    explanation:
      "A notary journal does not require the notary’s personal address. It must include details such as the place of notarization, fee charged, and the signer’s method of identification.",
  },
  {
    id: 6,
    question: "If a state allows remote online notarization (RON), what does it often mean?",
    options: [
      "The state allows the use of paper-bound journals only.",
      "The state provides rules for electronic notary journals.",
      "The state prohibits electronic notarizations.",
      "The state requires notarizations to occur in person.",
    ],
    correctAnswer: 1,
    explanation:
      "States that allow remote online notarization (RON) often provide rules for electronic journals to ensure compliance and security.",
  },
  {
    id: 7,
    question: "What type of identification can be used to verify a signer’s identity?",
    options: [
      "A notarized affidavit",
      "A handwritten note",
      "A driver’s license or passport",
      "An electronic receipt",
    ],
    correctAnswer: 2,
    explanation:
      "A signer’s identity is typically verified using official identification, such as a driver’s license or passport.",
  },
]

interface QuizResult extends QuizQuestion {
  isCorrect: boolean
  selectedAnswer: number
}

interface FormData {
  [key: string]: string
}

export default function QuizForm({
  title,
  link,
  nextLink,
}: {
  title: string
  link: string
  nextLink: string
}) {
  const { register, handleSubmit } = useForm<FormData>()
  const [results, setResults] = useState<QuizResult[] | null>(null)
  const [allCorrect, setAllCorrect] = useState(false)

  const onSubmit = (data: FormData) => {
    const formattedResults = quizData.map((q) => {
      const selectedAnswer = parseInt(data[`question-${q.id}`], 10)
      return {
        ...q,
        isCorrect: selectedAnswer === q.correctAnswer,
        selectedAnswer,
      }
    })

    const isAllCorrect = formattedResults.every((q) => q.isCorrect)
    setAllCorrect(isAllCorrect)
    setResults(formattedResults)
  }

  if (!results) {
    // QUIZ FORM
    return (
      <div className="mx-auto w-full max-w-2xl rounded border p-6 shadow">
        <h2 className="mb-2 text-center text-2xl font-bold">{title}</h2>
        <h3 className="mb-4 text-center text-sm">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Rewatch the video
          </a>
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          {quizData.map((q) => (
            <div key={q.id} className="mb-6">
              <p className="mb-2 text-lg font-semibold">{q.question}</p>
              <div className="space-y-2">
                {q.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value={index}
                      {...register(`question-${q.id}`, { required: true })}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 flex justify-center">
            <Button type="submit" variant="default">
              Submit Quiz
            </Button>
          </div>
        </form>
      </div>
    )
  } else {
    // RESULTS
    return (
      <div className="mx-auto w-full max-w-2xl rounded border p-6 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold">Quiz Results</h2>

        {results.map((q, index) => (
          <div key={index} className="mb-4 border-b pb-4 last-of-type:border-none last-of-type:pb-0">
            <p className="mb-1 font-semibold">{q.question}</p>
            <p className="mb-1">
              Your Answer:{" "}
              <span className="font-semibold">{q.options[q.selectedAnswer]}</span>{" "}
              {q.isCorrect ? (
                <CheckCircle className="inline h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="inline h-5 w-5 text-red-600" />
              )}
            </p>
            {!q.isCorrect && (
              <p className="text-sm text-muted-foreground">
                Explanation: {q.explanation}
              </p>
            )}
          </div>
        ))}

        {allCorrect && (
          <div className="mt-6 text-center">
            <p className="mb-2 font-medium">You're ready for the next tutorial!</p>
            <Button asChild variant="default">
              <a href={nextLink} target="_blank" rel="noopener noreferrer">
                Watch Next
              </a>
            </Button>
          </div>
        )}

        <div className="mt-6 flex justify-center">
          <Button
            variant={allCorrect ? "outline" : "default"}
            onClick={() => setResults(null)}
          >
            Retry Quiz
          </Button>
        </div>
      </div>
    )
  }
}

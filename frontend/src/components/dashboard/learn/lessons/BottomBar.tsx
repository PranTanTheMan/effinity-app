import React, { useState } from "react";
import { useLessonContext } from "./LessonContext";
import ExplanationTray from "./ExplanationTray";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

interface BottomBarProps {
  onContinue: () => void;
  handleCheck: (awardXp: () => void) => void;
}

export default function BottomBar({ onContinue, handleCheck }: BottomBarProps) {
  const { bottomBarState, setBottomBarState, explanation } = useLessonContext();
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);
  const [isFinishLoading, setIsFinishLoading] = useState(false);
  const [hasAwardedXP, setHasAwardedXP] = useState(false);

  const supabase = createClient();

  const router = useRouter();

  const handleExplanationToggle = () => {
    setIsExplanationOpen(!isExplanationOpen);
  };

  const handleFinish = async () => {
    setIsFinishLoading(true);
    // Simulate a delay (you can replace this with any necessary cleanup or data submission)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/learn");
  };

  const handleContinue = () => {
    onContinue();
    setBottomBarState("checkDisabled");
  };

  const awardXP = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      console.error("User not found");
      return;
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select()
      .eq("id", user.id)
      .single();
    if (userError) {
      console.error("Error fetching user data:", userError);
      return;
    }
    const xp = userData?.xp || 0;

    if (hasAwardedXP) {
      return;
    }
    const { data, error } = await supabase
      .from("users")
      .update({ xp: xp + 100 })
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error updating user data:", error);
    } else {
      console.log("Awarded 100 XP to user:", data);
    }
    setHasAwardedXP(true);
  };

  const handleTryAgain = () => {
    setBottomBarState("checkDisabled");
  };

  const RenderBottomBar = () => {
    switch (bottomBarState) {
      case "continue":
        return (
          <div className="flex flex-row items-center justify-between border-t border-surface-secondary px-8 py-6">
            <ReportButton answerType="text-secondary" />

            <button
              onClick={handleContinue}
              className="rounded-lg bg-button px-7 py-3 text-surface-primary"
            >
              Continue
            </button>
          </div>
        );
      case "checkDisabled":
        return (
          <div className="flex flex-row items-center justify-between border-t border-surface-secondary px-8 py-6">
            <ReportButton answerType="text-secondary" />

            <button
              disabled
              className="rounded-lg bg-gray-300 px-7 py-3 text-gray-500"
            >
              Check
            </button>
          </div>
        );
      case "checkEnabled":
        return (
          <div className="flex flex-row items-center justify-between border-t border-surface-secondary px-8 py-6">
            <ReportButton answerType="text-secondary" />
            <button
              onClick={() => handleCheck(awardXP)}
              className="rounded-lg bg-button px-7 py-3 text-surface-primary"
            >
              Check
            </button>
          </div>
        );
      case "correctAnswer":
        return (
          <>
            <div className="flex flex-row items-center justify-between border-t border-green-500 bg-green-100 px-8 py-6">
              <ReportButton answerType="green-500" />
              <div className="flex items-center gap-x-2">
                <StartIcon className="size-6" />
                <p className="text-xl font-medium text-green-500">Correct!</p>
                <p className="ml-3 text-xl font-medium text-green-500">
                  +100 XP
                </p>
              </div>
              <div className="flex items-center gap-x-8">
                {!isExplanationOpen && (
                  <button
                    onClick={handleExplanationToggle}
                    className="text-lg font-medium text-green-500"
                  >
                    Explanation
                  </button>
                )}
                <button
                  onClick={handleContinue}
                  className="rounded-lg bg-green-500 px-7 py-3 text-white"
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        );

      case "wrongAnswer":
        return (
          <div className="flex flex-row items-center justify-between border-t border-warning-500 bg-[#FFF0CA] px-8 py-6">
            <ReportButton answerType="warning-500" />
            <div className="flex items-center gap-x-2">
              <AiFillExclamationCircle className="size-6 text-warning-500" />
              <p className="text-xl font-medium text-warning-500">
                Oops, not quite.
              </p>
            </div>
            <div className="flex items-center gap-x-8">
              <button
                onClick={handleTryAgain}
                className="rounded-lg bg-warning-500 px-7 py-3 text-white"
              >
                Try Again
              </button>
            </div>
          </div>
        );
      case "finish":
        return (
          <div className="flex flex-row items-center justify-between border-t border-surface-secondary px-8 py-6">
            <ReportButton answerType="text-secondary" />
            <button
              onClick={handleFinish}
              disabled={isFinishLoading}
              className="flex items-center rounded-lg bg-button px-7 py-3 text-surface-primary"
            >
              {isFinishLoading ? (
                <>
                  <Spinner className="mr-2" />
                  Loading...
                </>
              ) : (
                "Finish"
              )}
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40">
        {RenderBottomBar()}
      </div>
      <ExplanationTray
        isOpen={isExplanationOpen}
        onClose={handleExplanationToggle}
        explanation={explanation}
      />
    </>
  );
}

const ReportButton = ({
  styles,
  answerType,
}: {
  styles?: string;
  answerType: string;
}) => {
  return (
    <>
      <button
        className={`flex items-center gap-x-2 text-${answerType} rounded-lg px-4 py-2 transition duration-200 ease-in-out hover:opacity-55  ${styles}`}
      >
        <FlagIcon />
        <p className={`text-${answerType} text-xl font-medium`}>Report</p>
      </button>
    </>
  );
};

const FlagIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
      />
    </svg>
  );
};

const StartIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M58.6673 32.0007C58.6673 46.7282 46.7282 58.6673 32.0007 58.6673C17.2731 58.6673 5.33398 46.7282 5.33398 32.0007C5.33398 17.2731 17.2731 5.33398 32.0007 5.33398C46.7282 5.33398 58.6673 17.2731 58.6673 32.0007ZM42.7482 23.9198C43.5292 24.7008 43.5292 25.9671 42.7482 26.7482L29.4149 40.0815C28.6338 40.8626 27.3675 40.8626 26.5864 40.0815L21.2531 34.7482C20.4721 33.9672 20.4721 32.7008 21.2531 31.9198C22.0342 31.1387 23.3005 31.1387 24.0815 31.9198L28.0007 35.8389L33.9602 29.8793L39.9198 23.9198C40.7008 23.1387 41.9671 23.1387 42.7482 23.9198Z"
        fill="#47B881"
      />
    </svg>
  );
};

const Spinner = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`h-5 w-5 animate-spin text-white ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

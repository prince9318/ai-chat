import { AlertCircle, RotateCcw } from "lucide-react";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
}) => {
  return (
    <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
      <div className="flex items-start gap-3">
        <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-red-800 text-sm font-medium">Error</p>
          <p className="text-red-700 text-sm mt-1">{message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-3 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors duration-200 flex items-center gap-2 text-sm font-medium"
            >
              <RotateCcw size={14} />
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

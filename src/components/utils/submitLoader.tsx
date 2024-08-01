import LoaderSpinner from "@/components/loaders/LoaderSpinner/loaderSpinner";

interface SubmitLoaderProps {
  isLoading?: boolean;
  text: string;
}

function SubmitLoader({ isLoading, text }: SubmitLoaderProps) {
  return (
    <div className="flex gap-4 align-items">
      {isLoading && (
        <LoaderSpinner className="!w-4 !h-4 !border-2 !border-background" />
      )}
      {text}
    </div>
  );
}

export default SubmitLoader;

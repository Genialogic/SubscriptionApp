import S from "./styles.module.scss";

interface LoaderSpinnerProps {
  className?: string;
}

function LoaderSpinner({ className }: LoaderSpinnerProps) {
  return <div className={`${S.loader} text-primary ${className}`}></div>;
}

export default LoaderSpinner;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  show: boolean;
  onClose: () => void;
}

const Alert = ({ children, show, onClose, color = "danger" }: Props) => {
  if (!show) {
    return null;
  }
  return (
    <div
      className={"alert alert-dismissible fade show alert-" + color}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;

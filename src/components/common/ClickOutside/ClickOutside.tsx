import { ReactNode, useEffect, useRef } from "react";

interface ClickOutsideProps {
  children: ReactNode;
  onHandle: any;
}

const ClickOutside = ({ children, onHandle }: ClickOutsideProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event: Event) => {
      const current = ref?.current;
      if (
        !current ||
        (current as HTMLDivElement).contains((event?.target as Node) || null)
      ) {
        return;
      }

      onHandle();
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [onHandle]);

  return <div ref={ref}>{children}</div>;
};

export default ClickOutside;

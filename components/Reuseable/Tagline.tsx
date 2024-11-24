import Brackets from "../Pricing/Brackets";

const TagLine = ({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      <Brackets position="left" />
      <div className="mx-3 text-n-3">{children}</div>
      <Brackets position="right" />
    </div>
  );
};

export default TagLine;

import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }: { crossesOffset: string }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[0.3125rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[4.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[0.3125rem] border-2 border-white right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;

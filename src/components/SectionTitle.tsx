interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 text-center ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;

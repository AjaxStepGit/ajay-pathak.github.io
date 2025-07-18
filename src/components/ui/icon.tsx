export default function Icon({
  className,
  icon,
}: {
  className?: string;
  icon: any;
}) {
  return (
    <div
      className={`${className} bg-secondary-dark flex items-center justify-center text-white rounded-full`}
    >
      {icon}
    </div>
  );
}

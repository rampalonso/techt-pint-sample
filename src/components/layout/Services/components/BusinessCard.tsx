import clsx from "clsx";

type BusinessCardProps = {
  title: string;
  description: string;
  variant?: "primary" | "accent" | "grayed" | "outline";
};

const BusinessCard = ({
  title,
  description,
  variant = "primary",
}: BusinessCardProps) => {
  const styles = {
    container: {
      base: "p-10 rounded-2xl shadow-md shadow-gray-300/50",
      variants: {
        primary: "bg-primary text-gray-900",
        accent: "bg-gray-900 text-gray-100",
        grayed: "bg-zinc-100 text-gray-900",
        outline: "bg-white text-gray-900",
      },
    },
    icon: {
      base: "block rounded-full h-18 w-18",
      variants: {
        primary: "bg-gray-900",
        accent: "bg-primary",
        grayed: "bg-gray-900",
        outline: "bg-zinc-100",
      },
    },
    title: {
      base: "text-3xl mt-3 font-medium",
      variants: {
        primary: "text-gray-800",
        accent: "text-gray-100",
        grayed: "text-gray-800",
        outline: "text-gray-800",
      },
    },
    desc: {
      base: "block text-md mt-2",
      variants: {
        primary: "text-gray-500",
        accent: "text-gray-300",
        grayed: "text-gray-500",
        outline: "text-gray-500",
      },
    },
  };

  return (
    <div
      className={clsx(
        styles.container.base,
        styles.container.variants[variant]
      )}
    >
      <span
        className={clsx(styles.icon.base, styles.icon.variants[variant])}
      ></span>
      <p className={clsx(styles.title.base, styles.title.variants[variant])}>
        {title}
      </p>
      <span className={clsx(styles.desc.base, styles.desc.variants[variant])}>
        {description}
      </span>
    </div>
  );
};

export default BusinessCard;

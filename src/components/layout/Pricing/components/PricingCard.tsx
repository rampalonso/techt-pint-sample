import clsx from "clsx";
import CheckIcon from "./CheckIcon";

type PricingCardProps = {
  variant?: "primary" | "accent" | "grayed" | "lightGrayed";
  planName: string;
  title: string;
  amount: string;
};

const PricingCard = ({
  planName,
  title,
  amount,
  variant = "primary",
}: PricingCardProps) => {
  const styles = {
    container: {
      base: "p-12 rounded-2xl",
      variants: {
        primary: "bg-primary text-gray-900",
        accent: "bg-gray-900 text-gray-100",
        grayed: "bg-zinc-100 text-gray-900",
        lightGrayed: "bg-zinc-50 text-gray-900",
      },
    },
    projectText: {
      base: "text-2xl text-gray-100 font-medium",
      variants: {
        primary: "text-gray-900",
        accent: "text-gray-100",
        grayed: "text-gray-900",
        lightGrayed: "text-gray-900",
      },
    },
    listItem: {
      base: "text-sm",
      variants: {
        primary: "text-gray-900",
        accent: "text-gray-100",
        grayed: "text-gray-900",
        lightGrayed: "text-gray-400",
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
      <p className="text-3xl font-medium">{planName}</p>
      <p className="text-primary text-5xl font-medium flex items-center mt-4">
        {amount}{" "}
        <span
          className={clsx(
            styles.projectText.base,
            styles.projectText.variants[variant]
          )}
        >
          /Project
        </span>
      </p>
      <p className="text-2xl mt-4">{title}</p>
      <p className="text-sm text-gray-400 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tecllus
        luctus
      </p>
      <ul className="mt-6">
        <li className="flex flex-row gap-2 items-center">
          <CheckIcon />{" "}
          <span
            className={clsx(
              styles.listItem.base,
              styles.listItem.variants[variant]
            )}
          >
            Prolm ut trusplus nec lectur bibendum
          </span>
        </li>
        <li className="flex flex-row gap-2 items-center">
          <CheckIcon />{" "}
          <span
            className={clsx(
              styles.listItem.base,
              styles.listItem.variants[variant]
            )}
          >
            Donec veneasis nunc nod dul
          </span>
        </li>
        <li className="flex flex-row gap-2 items-center">
          <CheckIcon />{" "}
          <span
            className={clsx(
              styles.listItem.base,
              styles.listItem.variants[variant]
            )}
          >
            Viverra risus velit gravida modernus
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PricingCard;

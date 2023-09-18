import { NavIcon } from "./NavIcon";
import {
  FaHouseChimney,
  FaHandHoldingDollar,
  FaMoneyBillTrendUp,
  FaSackDollar,
  FaTable,
  FaFootball,
} from "react-icons/fa6";
export function Nav() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <NavIcon
        icon={<FaHouseChimney size="28" />}
        text="Home"
        destination="/"
      />
      <NavIcon
        icon={<FaTable size="28" />}
        text="Budget"
        destination="/budget"
      />
      <NavIcon
        icon={<FaSackDollar size="28" />}
        text="Income"
        destination="/income"
      />
      <NavIcon
        icon={<FaHandHoldingDollar size="28" />}
        text="Expenses"
        destination="/expenses"
      />
      <NavIcon
        icon={<FaMoneyBillTrendUp size="28" />}
        text="Trends"
        destination="/trends"
      />
      <NavIcon icon={<FaFootball size="28" />} text="NFL" destination="/nfl" />
    </div>
  );
}

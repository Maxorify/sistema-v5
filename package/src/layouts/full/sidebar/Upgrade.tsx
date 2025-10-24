import { Button } from "flowbite-react";
import UpgradePlan from "/src/assets/images/backgrounds/upgrade.png";
import { Link } from "react-router";
const Upgrade = () => {
  return (
    <>
      <div className="px-5 mt-2 relative">
        <div className="bg-lightprimary py-4 px-5 rounded-xl ">
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <h6 className="text-base text-dark">Explora la versión Pro</h6>
              <Button color={"primary"} className="mt-3 rounded-xl" as={Link} to="/upgrade">
                Ver detalles
              </Button>
            </div>
            <img src={UpgradePlan} alt="upgrade" className="absolute h-24 w-24 end-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = ({ dark }) => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Free weights area",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: "$49.99",
      features: [
        "All Basic Membership features",
        "Access to group fitness classes",
        "Sauna and steam room access",
        "Personalized fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: "$79.99",
      features: [
        "All Silver Membership features",
        "Access to indoor pool",
        "Unlimited guest passes",
        "Nutritional counseling sessions",
      ],
    },
    {
      id: 4,
      name: "Platinum Membership",
      price: "$99.99",
      features: [
        "All Gold Membership features",
        "One-on-one personal training sessions",
        "Priority class registration",
        "Towel service",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl text-center mb-4">Best Prices in the Town</h2>
      <div className="grid grid-cols-4 gap-5 px-6">
        {priceOptions.map((option) => (
          <PriceOption
            key={option.id}
            option={option}
            dark={dark}
          ></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

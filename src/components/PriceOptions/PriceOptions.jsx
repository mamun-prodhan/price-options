import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
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
      price: "$49.99/month",
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
      price: "$79.99/month",
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
      price: "$99.99/month",
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
      <h2 className="text-5xl">Best Prices in the Town</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;

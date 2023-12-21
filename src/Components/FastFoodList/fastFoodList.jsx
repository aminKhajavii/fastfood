import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => {
        delay += 0.03;
        return (
          <div key={fastfood.id} className="col-sm-6 col-md-4  mb-grid-gutter">
            <FastFoodItem {...fastfood} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;

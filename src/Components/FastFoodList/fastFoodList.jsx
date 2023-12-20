import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  return (
    <div className="row">
      {fastFoodItems.map((fastfood) => {
        return (
          <div key={fastfood.id} className="col-mt4 col-sm-6 mb-grid-gutter">
            <FastFoodItem {...fastfood} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;

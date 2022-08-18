import LinesEllipsis from "react-lines-ellipsis";

export default function Ingredient(props) {
  return (
    <div className="ingredient-card">
      <div className="ingredient-upper-ribbon"></div>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`}
        alt={props.name}
        className="h-48 px-4"
      />
      <span className="ingredient-text">
        <LinesEllipsis
          text={props.original}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </span>
    </div>
  );
}

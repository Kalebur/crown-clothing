import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component.jsx";

const Directory = ({ categories }) => {
  return (
    <main className="directory-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </main>
  );
};

export default Directory;

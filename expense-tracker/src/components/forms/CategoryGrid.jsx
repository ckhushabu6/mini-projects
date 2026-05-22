import { categories } from '../../data/categories';

import styles from './TransactionForm.module.css';

function CategoryGrid({
  selectedCategory,
  onSelect,
}) {
  return (
    <div className={styles.categoryGrid}>
      {categories.map((category) => {
        const Icon = category.icon;

        const isActive =
          selectedCategory ===
          category.value;

        return (
          <button
            key={category.id}
            type="button"
            onClick={() =>
              onSelect(category.value)
            }
            className={`${styles.categoryCard} ${
              isActive
                ? styles.activeCategory
                : ''
            }`}
          >
            <Icon />

            <span>
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryGrid;
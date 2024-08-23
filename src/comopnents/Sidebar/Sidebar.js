import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar =  ({products , setProducts}) => {
  const [filters, setFilters] = useState({});
  console.log("🚀 ~ filters:", filters);

  useEffect(() => {
    if (Object.keys(filters).length === 0) {
    } else {
   
      let filteredProducts =  products;

      Object.keys(filters).forEach((filterKey) => {
        if (filters[filterKey].length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            filters[filterKey].includes(product.category)
          );
        }
      }, []);

      setProducts(filteredProducts);
      
    }
  }, [filters, setProducts, products]);

  const filterConfig = [
    {
      filterHeading: "CLOTHINGS",
      category: ["men's clothing", "women's clothing", "kid's clothing"],
    },
    {
      filterHeading: "JEWELERYS",
      category: ["Rings", "Bracelets", "Ear rings"],
    },
    {
      filterHeading: "ELECTRONICS",
      category: ["Monitor", "SSD", "laptop bag"],
    },
    {
      filterHeading: "MOBILE",
      category: ["Samsung", "Motorola"],
    },
    {
      filterHeading: "LAPTOPS",
      category: ["Asus", "HP", "Dell", "Alienware", "Lenovo"],
    },
  ];

  const handleCheckboxChange = (heading, value) => {
    setFilters((prevFilters) => {
      const categoryFilters = prevFilters[heading] || [];
      if (categoryFilters.includes(value)) {
 
        return {
          ...prevFilters,
          [heading]: categoryFilters.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevFilters,
          [heading]: [...categoryFilters, value],
        };
      }
    });
  };

  return (
    <div className="filter-section">
      <h3>Filter by:</h3>

      {filterConfig.map((ele, index) => {
        return (
          <div className="filter-category" key={index}>
            <h4>{ele?.filterHeading}</h4>
            {ele?.category.map((category, idx) => {
              return (
                <div key={idx}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      onChange={() =>
                        handleCheckboxChange(ele?.filterHeading, category)
                      }
                      checked={
                        filters[ele?.filterHeading]?.includes(category) || false
                      }
                    />
                    {category}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

import "./FreeProducts.css";
import privacy from "../../assets/images/privacy_policy.png";
import terms from "../../assets/images/terms_conditions.png";
import domain from "../../assets/images/domain_name.png";
import invoice from "../../assets/images/invoice.png";
import ProductCard from "../ProductCard/ProductCard";

const freeProducts = [
  {
    image: privacy,
    title: "Privacy Policy Generator",
    details:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    image: terms,
    title: "Terms & Conditions Generator",
    details:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    image: domain,
    title: "Domain Name Generator",
    details:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },

  {
    image: invoice,
    title: "Invoice Generator",
    details:
      "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

const FreeProducts = () => {
  return (
    <div className="container free_products">
      <h2 className="heading">Try our other free products</h2>

      <div className="products">
        {freeProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            details={product.details}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeProducts;

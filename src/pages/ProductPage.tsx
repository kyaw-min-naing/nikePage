import { useQuery } from "@tanstack/react-query";
import { Card, Typography, Button, Alert, Spin } from "antd";
import { getProducts, Product, ProductsResponse } from "../api/Api";
import { Link } from "react-router-dom";
import "../styles/ProductPage.css";

const { Title, Text } = Typography;

const ProductPage = () => {
  const { data, isLoading, error } = useQuery<ProductsResponse, Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Spin size="large" className="loading-spinner" />;

  if (error)
    return (
      <Alert
        message="Error"
        description="Failed to fetch products"
        type="error"
        showIcon
        className="error-alert"
      />
    );

  return (
    <div className="products-container">
      <Title level={2} className="product-title">
        Avaible Products
      </Title>

      <div className="products-grid">
        {data?.products?.map((product: Product) => (
          <div className="product-card-wrapper" key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.thumbnail}
                  className="product-image"
                />
              }
            >
              <Card.Meta
                title={product.title}
                description={
                  <>
                    <Text className="product-brand">{product.brand}</Text>
                    <div className="product-price-container">
                      <Text strong className="product-price">
                        ${product.price.toFixed(2)}
                      </Text>
                      <Text type="secondary" className="product-discount">
                        ({product.discountPercentage}% off)
                      </Text>
                    </div>
                    <Button
                      type="primary"
                      block
                      className="view-details-btn"
                      onClick={() =>
                        console.log("View details for", product.id)
                      }
                    >
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </>
                }
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

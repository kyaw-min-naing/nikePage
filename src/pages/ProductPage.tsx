import React from "react";
import { List, Card, Spin } from "antd";
import { getProducts, Product } from "../api/Api";
import { useQuery } from "@tanstack/react-query";

const ProductPage: React.FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <Spin size="large" />;
  if (error) return <p>Error loading products.</p>;

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={products}
      renderItem={(product) => (
        <List.Item>
          <Card
            title={product.title}
            cover={
              <img
                alt={product.title}
                src={product.thumbnail}
                className="product-image"
              />
            }
          >
            <p>Price: ${product.price}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ProductPage;

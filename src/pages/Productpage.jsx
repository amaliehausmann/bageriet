import { useState } from "react"
import { ProductMenu } from "../components/ProductMenu/ProductMenu"
import { useGet } from "../hooks/useGet";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const Productpage = () => {

  const [id, setId] = useState(1);

    const { data, error, isLoading } = useGet(
      `https://api.mediehuset.net/bakeonline/categories/${id}`
    );    

    console.log(data);
  
  return (
    <div>
      <ProductMenu setId={setId}/>
      <section>
        {!isLoading && data?.item.products.map((item) => (
            <ProductCard
            key={item.id}
            image={item.image.fullpath}
            comments={item.num_comments}
            title={item.title}
            subtitle={item.teaser}
          />
        ))}
      </section>
    </div>
  )
}
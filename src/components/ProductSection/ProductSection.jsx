import { useGet } from "../../hooks/useGet";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductSection = () => {
  const { data, error, isLoading } = useGet(
    "https://api.mediehuset.net/bakeonline/products"
  );

  //Shuffler produkterne i tilfældig rækkefølge og slicer så der kun er 8 produkter i arrayet
  const randomEightProducts = data?.items
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 8);

  return (
    <section>
      <h1>Nyeste bagværk</h1>
      <p>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
      ¨
      <section>
        {!isLoading &&
          randomEightProducts?.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image.fullpath}
              comments={item.num_comments}
              title={item.title}
              subtitle={item.teaser}
            />
          ))}
      </section>
    </section>
  );
};

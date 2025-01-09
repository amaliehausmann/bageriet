import { useState, useEffect } from "react";
import { useGet } from "../../hooks/useGet";

export const ProductMenu = ({ setId }) => {
  const { data, error, isLoading } = useGet(
    "https://api.mediehuset.net/bakeonline/categories"
  );
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!isLoading && data?.items.length) {
      const firstItemId = data.items[0].id;
      setActiveId(firstItemId);
      setId(firstItemId);
    }
  }, [isLoading, data, setId]);

  const handleClick = (id) => {
    setId(id);
    setActiveId(id);
  };

  return (
    <aside>
      <ul>
        {!isLoading &&
          data?.items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                fontWeight: item.id === activeId ? 900 : "normal",
              }}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </aside>
  );
};

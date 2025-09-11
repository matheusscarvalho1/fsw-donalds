// src/app/page.tsx
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getSlugFromRestaurants } from "@/data/get-rastaurant-by-slug";

export default async function HomePage() {
  const slugsData = await getSlugFromRestaurants();

  const restaurants = slugsData.map(restaurant => ({ slug: restaurant.slug }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <h1 className="text-3xl font-bold text-foreground mb-2 text-center">
        {restaurants.length > 1 ? `Restaurantes cadastrados (${restaurants.length})` : `Restaurante cadastrado (${restaurants.length})`}
      </h1>
      <p className="text-muted-foreground mb-6 text-center">
        Clique em um dos botões para acessar o restaurante
      </p>

      <div className="sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.slug}
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary/50"
          >
            <Link href={`/${restaurant.slug}`}>FSW Donalds</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

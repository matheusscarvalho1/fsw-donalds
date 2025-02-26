import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
    include: {
      menuCategories: {
        include: {
          products: true,
        },
      },
    },
  });

  return restaurant;
};

export const getRestaurantById = async (productId: string) => {
  const restaurant = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  return restaurant;
};

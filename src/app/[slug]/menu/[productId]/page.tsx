
import { notFound } from "next/navigation";

import { getRestaurantById } from "@/data/get-rastaurant-by-slug";

import ProductHeader from "./_components/product-header";
import ProductsDetails from "./_components/products-datails";

interface ProductPageProps{
    params: Promise<{slug: string; productId: string;}>;
}

const ProductPage = async ({params}: ProductPageProps) => {
    const { slug, productId } = await params;
    
    const product = await getRestaurantById(productId);

    if(!product) {
        return notFound();
    }

    if(product.restaurant.slug.toUpperCase() !== slug.toUpperCase()){
        return notFound();
    }
     
    return ( 
    <div className="flex h-full flex-col">
    <ProductHeader product={product} />
    <ProductsDetails product={product} />
    </div>
    );
}
 
export default ProductPage;

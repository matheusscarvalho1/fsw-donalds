
import { notFound } from "next/navigation";

import { getRestaurantById } from "@/data/get-rastaurant-by-slug";

import ProductHeader from "./_components/product-header";

interface ProductPageProps{
    params: Promise<{slug: string; productId: string;}>;
}

const ProductPage = async ({params}: ProductPageProps) => {
    const { slug, productId } = await params;
    
    const product = await getRestaurantById(productId);

    if(!product) {
        return notFound();
    }
    return ( 
    <>
    <ProductHeader product={product} />
    Product Page
    {slug}
    {productId}
    </> 
    );
}
 
export default ProductPage;

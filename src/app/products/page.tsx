import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-red-600">Product Page</h1>
      <Button>Button</Button>
      <Input placeholder="Input" />
    </div>
  );
};

export default ProductPage;

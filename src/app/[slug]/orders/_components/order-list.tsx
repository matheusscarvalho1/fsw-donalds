"use client";

import { consumptionMethod,OrderStatus, Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format.currency";

interface OrderListProps {
  orders: Array<
    Prisma.OrderGetPayload<{
      include: {
        restaurant: {
          select: {
            name: true;
            avatarImageUrl: true;
          };
        };
        orderProducts: {
          include: {
            product: true;
          };
        };
      };
    }>
  >;
}

const getStatusLabel = (status: OrderStatus) => {
  if (status === "FINISHED") return "Finalizado";
  if (status === "IN_PREPARATION") return "Em preparo";
  if (status === "PENDING") return "Pendente";
  if (status === "PAYMENT_CONFIRMED") return "Pagamento confirmado";
  if (status === "PAYMENT_FAILED") return "Pagamento falhou";
  return "";
};

const getConsumptionMethod = (consumption: consumptionMethod) => {
  if (consumption === "TAKEAWAY") return "Para levar";
  if (consumption === "DINE_IN") return "Para comer aqui";
  return "";
};



const OrderList = ({ orders }: OrderListProps) => {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();
  const handleBackClick = () => router.back();
  const handleHomePageClick = () => router.push(`/${slug}`)
  return (
    <div className="space-y-6 p-6">
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="flex items-center gap-3">
        <ScrollTextIcon />
        <h2 className="text-lg font-semibold">Meus Pedidos</h2>
      </div>
      {orders.map((order) => (
        <Card key={order.id}>
          <CardContent className="space-y-4 p-5">
            <div
              className={`w-fit rounded-full px-2 py-1 text-xs font-semibold text-white ${([OrderStatus.IN_PREPARATION, OrderStatus.FINISHED] as OrderStatus[]).includes(order.status) ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"} `}
            >
              {getStatusLabel(order.status)}
            </div>
            <div
              className={`w-fit rounded-full px-2 py-1 text-xs font-semibold text-white ${([consumptionMethod.DINE_IN, consumptionMethod.TAKEAWAY] as consumptionMethod[]).includes(order.consumptionMethod) ? "bg-blue-500 text-white" : ""} `}
            >
              {getConsumptionMethod(order.consumptionMethod)}
            </div>
            <div className="flex items-center gap-2">
              <div className="relative h-5 w-5">
                <Image
                  src={order.restaurant.avatarImageUrl}
                  alt={order.restaurant.name}
                  className="rounded-sm"
                  fill
                />
              </div>
              <p className="text-sm font-semibold">{order.restaurant.name}</p>
            </div>
            <Separator />
            <div className="space-y-2">
              {order.orderProducts.map((orderProduct) => (
                <div key={orderProduct.id} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white">
                    {orderProduct.quantity}
                  </div>
                  <p className="text-sm">{orderProduct.product.name}</p>
                </div>
              ))}
            </div>
            <Separator />
            <p className="text-sm font-medium">{formatCurrency(order.total)}</p>
          </CardContent>
        </Card>
        
        
      ))}
      <Button variant="destructive" className="rounded-full" onClick={handleHomePageClick}>
                    Retornar a página inicial
      </Button>
    </div>
  );
};

export default OrderList;
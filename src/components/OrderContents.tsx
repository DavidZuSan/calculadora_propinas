import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      <div className="space-y-3 mt-10 ">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
          >
            <div>
              <p>{item.name}</p>
              <p className=" text-lg">
                {item.quantity} x {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() =>
                dispatch({ type: "remove-item", payload: { id: item.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

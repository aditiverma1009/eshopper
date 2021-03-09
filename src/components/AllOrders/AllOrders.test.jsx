import { render, waitFor } from "@testing-library/react";
import AllOrders from "./AllOrders.jsx";
import React from "react";
import axiosMock from "axios";

const mockOrders = {
  data: {
    data: [
      {
        items: [
          {
            id: 1,
            name: "apple",
            price: 120,
            count: 1,
            category: "Fruits & Vegatables",
          },
        ],
        id: 1,
        date: 1615122360481,
      },
    ],
  },
};

describe("All Orders", () => {
  test("should get orders", async () => {
    axiosMock.get.mockResolvedValueOnce(mockOrders);
    const { getByText } = render(<AllOrders />);
    const result = await waitFor(() => getByText("Order ID"));
    expect(result).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("/orders");
  });
});

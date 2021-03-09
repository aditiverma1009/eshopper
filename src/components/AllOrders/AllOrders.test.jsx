import { render, waitFor } from "@testing-library/react";
import AllOrders from "./AllOrders.jsx";
import React from "react";
import axios from "axios";

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
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(mockOrders);
    const { getByText, container } = render(<AllOrders />);
    const result = await waitFor(() => getByText("Order ID"));
    expect(result).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/orders");
    expect(container).toMatchSnapshot();
  });

  test("should match snapshot for loading", () => {
    const { container } = render(<AllOrders />);
    expect(container).toMatchSnapshot();
  });
});

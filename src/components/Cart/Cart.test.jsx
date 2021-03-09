import { render, waitFor, fireEvent } from "@testing-library/react";
import Cart from "./Cart.jsx";
import React from "react";
import axiosMock from "axios";

const mockCart = [
  {
    id: 1,
    name: "apple",
    price: 120,
    count: 1,
    category: "Fruits & Vegatables",
    inCartCount: 1,
  },
];

const mockPostData = {
  items: [
    {
      id: 1,
      name: "apple",
      price: 120,
      count: 1,
      category: "Fruits & Vegatables",
    },
  ],
};

const mockResponse = {
  data: {
    items: [
      {
        id: 1,
        name: "apple",
        price: 120,
        count: 1,
        category: "Fruits & Vegatables",
      },
    ],
    id: 5,
    date: 1615275152193,
  },
};

describe("Cart", () => {
  test("should render", async () => {
    axiosMock.post = jest.fn().mockResolvedValueOnce(mockResponse);
    const { getByText, container } = render(<Cart cart={mockCart} />);
    const result = await waitFor(() => getByText("Item"));
    expect(result).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("should post cart on checkout", async () => {
    axiosMock.post.mockResolvedValueOnce(mockResponse);
    const { getByText, container } = render(<Cart cart={mockCart} />);
    const button = getByText("Checkout");
    fireEvent.click(button);
    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    expect(axiosMock.post).toHaveBeenCalledWith("/orders", mockPostData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(container).toMatchSnapshot();
  });
});

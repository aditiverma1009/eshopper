import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";

const mockItems = {
  data: {
    data: [
      {
        id: 1,
        name: "apple",
        price: 120,
        count: 20,
        category: "Fruits & Vegatables",
      },
    ],
  },
};

describe("App component", () => {
  it("renders learn react link", async () => {
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(mockItems);
    const { getByTestId } = render(<App />);
    const element = await waitFor(() => getByTestId("header"));
    expect(element).toBeInTheDocument();
  });
});

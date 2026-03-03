import { renderHook, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { useTableQueryState } from "./useTableQueryState";

describe("useTableQueryState", () => {
  it("updates search query", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MemoryRouter initialEntries={[""]}>{children}</MemoryRouter>
    );

    const { result } = renderHook(() => useTableQueryState({}), { wrapper });

    act(() => {
      result.current.updateSearch("Ammar");
    });

    expect(result.current.searchQuery).toBe("Ammar");
    expect(result.current.page).toBe(1); // page resets on search
  });
});
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from "vitest";
import Card from './Card';

describe('Card', () => {
  it('renders title and contents', () => {
    render(<Card widthClass="" heightClass="" cardTitle="Total Users"><p>42</p></Card>);
    expect(screen.getByText('Total Users')).toBeVisible();
    expect(screen.getByText(42)).toBeVisible();
  });
});
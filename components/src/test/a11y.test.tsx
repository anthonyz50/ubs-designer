import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Alert } from '../components/Alert/Alert';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { Toggle } from '../components/Toggle/Toggle';
import { Table, type TableColumn } from '../components/Table/Table';

// Extend expect with axe matchers
expect.extend(toHaveNoViolations);

describe('Accessibility (axe-core)', () => {
  it('Button has no a11y violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Input with label has no a11y violations', async () => {
    const { container } = render(
      <Input label="Email address" type="email" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Input with error has no a11y violations', async () => {
    const { container } = render(
      <Input label="Email" error="Invalid email" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Alert has no a11y violations', async () => {
    const { container } = render(
      <Alert variant="error" title="Error">
        Something went wrong
      </Alert>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Checkbox has no a11y violations', async () => {
    const { container } = render(
      <Checkbox label="Accept terms" onChange={() => {}} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Toggle has no a11y violations', async () => {
    const { container } = render(
      <Toggle label="Enable notifications" onChange={() => {}} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Table has no a11y violations', async () => {
    const columns: TableColumn<{ name: string; value: number }>[] = [
      { key: 'name', header: 'Name' },
      { key: 'value', header: 'Value' },
    ];
    const data = [
      { name: 'Alpha', value: 1 },
      { name: 'Beta', value: 2 },
    ];
    const { container } = render(<Table columns={columns} data={data} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

import { useEffect, useCallback, useRef } from 'react';
import type { ComponentModel } from '../../types';
import styles from './InlineEditor.module.css';

// ============================================================
// Inline Editor — floating property editor for selected components
// ============================================================

interface InlineEditorProps {
  component: ComponentModel;
  onUpdate: (updatedComponent: ComponentModel) => void;
  onClose: () => void;
  position: { top: number; left: number };
}

// ---- Reusable field components ----

function TextField({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      {multiline ? (
        <textarea
          className={styles.fieldTextarea}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={styles.fieldInput}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <input
        className={styles.fieldNumber}
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <select
        className={styles.fieldSelect}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className={styles.fieldGroup}>
      <div className={styles.toggleRow}>
        <label className={styles.fieldLabel}>{label}</label>
        <div
          className={styles.toggleTrack}
          data-on={value}
          onClick={() => onChange(!value)}
        >
          <div className={styles.toggleThumb} />
        </div>
      </div>
    </div>
  );
}

// ---- Editable list for simple string items ----

function StringListEditor({
  label,
  items,
  onChange,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.listEditor}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.listItem}>
            <input
              className={styles.fieldInput}
              type="text"
              value={item}
              onChange={(e) => {
                const updated = [...items];
                updated[idx] = e.target.value;
                onChange(updated);
              }}
            />
            <button
              className={styles.listItemRemove}
              onClick={() => onChange(items.filter((_, i) => i !== idx))}
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
        <button
          className={styles.addItemBtn}
          onClick={() => onChange([...items, ''])}
        >
          + Add item
        </button>
      </div>
    </div>
  );
}

// ---- Editable list for object items ----

interface ObjectListField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'toggle';
  options?: string[];
}

function ObjectListEditor({
  label,
  items,
  fields,
  onChange,
  defaultItem,
}: {
  label: string;
  items: Record<string, unknown>[];
  fields: ObjectListField[];
  onChange: (items: Record<string, unknown>[]) => void;
  defaultItem: Record<string, unknown>;
}) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={styles.listEditor}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.listItem}>
            <div className={styles.listItemFields}>
              {fields.map((field) => {
                if (field.type === 'select' && field.options) {
                  return (
                    <select
                      key={field.key}
                      className={styles.fieldSelect}
                      value={(item[field.key] as string) ?? ''}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[idx] = { ...item, [field.key]: e.target.value };
                        onChange(updated);
                      }}
                    >
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  );
                }
                if (field.type === 'toggle') {
                  return (
                    <div key={field.key} className={styles.toggleRow}>
                      <span className={styles.fieldLabel}>{field.label}</span>
                      <div
                        className={styles.toggleTrack}
                        data-on={Boolean(item[field.key])}
                        onClick={() => {
                          const updated = [...items];
                          updated[idx] = { ...item, [field.key]: !item[field.key] };
                          onChange(updated);
                        }}
                      >
                        <div className={styles.toggleThumb} />
                      </div>
                    </div>
                  );
                }
                if (field.type === 'textarea') {
                  return (
                    <textarea
                      key={field.key}
                      className={styles.fieldTextarea}
                      placeholder={field.label}
                      value={(item[field.key] as string) ?? ''}
                      onChange={(e) => {
                        const updated = [...items];
                        updated[idx] = { ...item, [field.key]: e.target.value };
                        onChange(updated);
                      }}
                    />
                  );
                }
                return (
                  <input
                    key={field.key}
                    className={styles.fieldInput}
                    type="text"
                    placeholder={field.label}
                    value={(item[field.key] as string) ?? ''}
                    onChange={(e) => {
                      const updated = [...items];
                      updated[idx] = { ...item, [field.key]: e.target.value };
                      onChange(updated);
                    }}
                  />
                );
              })}
            </div>
            <button
              className={styles.listItemRemove}
              onClick={() => onChange(items.filter((_, i) => i !== idx))}
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
        <button
          className={styles.addItemBtn}
          onClick={() => onChange([...items, { ...defaultItem }])}
        >
          + Add item
        </button>
      </div>
    </div>
  );
}

// ---- Table editor (headers + rows grid) ----

function TableEditor({
  headers,
  rows,
  onHeadersChange,
  onRowsChange,
}: {
  headers: string[];
  rows: string[][];
  onHeadersChange: (headers: string[]) => void;
  onRowsChange: (rows: string[][]) => void;
}) {
  return (
    <>
      <StringListEditor label="Headers" items={headers} onChange={onHeadersChange} />
      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel}>Rows</label>
        <div className={styles.listEditor}>
          {rows.map((row, ri) => (
            <div key={ri} className={styles.listItem}>
              <div className={styles.listItemFields}>
                {row.map((cell, ci) => (
                  <input
                    key={ci}
                    className={styles.fieldInput}
                    type="text"
                    placeholder={headers[ci] ?? `Col ${ci + 1}`}
                    value={cell}
                    onChange={(e) => {
                      const updated = rows.map((r) => [...r]);
                      updated[ri][ci] = e.target.value;
                      onRowsChange(updated);
                    }}
                  />
                ))}
              </div>
              <button
                className={styles.listItemRemove}
                onClick={() => onRowsChange(rows.filter((_, i) => i !== ri))}
                aria-label="Remove row"
              >
                ×
              </button>
            </div>
          ))}
          <button
            className={styles.addItemBtn}
            onClick={() =>
              onRowsChange([...rows, Array(Math.max(headers.length, 1)).fill('')])
            }
          >
            + Add row
          </button>
        </div>
      </div>
    </>
  );
}

// ============================================================
// Property editors per component type
// ============================================================

function PropertyFields({
  component,
  onUpdate,
}: {
  component: ComponentModel;
  onUpdate: (c: ComponentModel) => void;
}) {
  const { type, props } = component;

  const updateProp = (key: string, value: unknown) => {
    onUpdate({ ...component, props: { ...props, [key]: value } });
  };

  const updateProps = (patch: Record<string, unknown>) => {
    onUpdate({ ...component, props: { ...props, ...patch } });
  };

  switch (type) {
    case 'heading':
      return (
        <>
          <TextField
            label="Text"
            value={(props.text as string) ?? ''}
            onChange={(v) => updateProp('text', v)}
            multiline
          />
          <SelectField
            label="Level"
            value={String((props.level as number) ?? 2)}
            options={['1', '2', '3', '4', '5', '6']}
            onChange={(v) => updateProp('level', Number(v))}
          />
        </>
      );

    case 'paragraph':
      return (
        <>
          <TextField
            label="Text"
            value={(props.text as string) ?? ''}
            onChange={(v) => updateProp('text', v)}
            multiline
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'body-1'}
            options={['body-1', 'body-2', 'body-3', 'body-4']}
            onChange={(v) => updateProp('variant', v)}
          />
        </>
      );

    case 'button':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'primary'}
            options={['primary', 'secondary', 'outline', 'ghost', 'destructive']}
            onChange={(v) => updateProp('variant', v)}
          />
          <SelectField
            label="Size"
            value={(props.size as string) ?? 'medium'}
            options={['small', 'medium', 'large']}
            onChange={(v) => updateProp('size', v)}
          />
          <ToggleField
            label="Full width"
            value={(props.fullWidth as boolean) ?? false}
            onChange={(v) => updateProp('fullWidth', v)}
          />
          <TextField
            label="Navigate to"
            value={(props.navigateTo as string) ?? ''}
            onChange={(v) => updateProp('navigateTo', v)}
          />
        </>
      );

    case 'card':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Description"
            value={(props.description as string) ?? ''}
            onChange={(v) => updateProp('description', v)}
            multiline
          />
          <SelectField
            label="Card style"
            value={(props.cardVariant as string) ?? 'default'}
            options={['default', 'pastel1', 'pastel2', 'gray']}
            onChange={(v) => updateProp('cardVariant', v)}
          />
          <SelectField
            label="Padding"
            value={(props.padding as string) ?? 'medium'}
            options={['small', 'medium', 'large']}
            onChange={(v) => updateProp('padding', v)}
          />
          <ToggleField
            label="Hoverable"
            value={(props.hoverable as boolean) ?? true}
            onChange={(v) => updateProp('hoverable', v)}
          />
          <TextField
            label="Icon"
            value={(props.icon as string) ?? ''}
            onChange={(v) => updateProp('icon', v)}
          />
        </>
      );

    case 'alert':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Message"
            value={(props.message as string) ?? ''}
            onChange={(v) => updateProp('message', v)}
            multiline
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'info'}
            options={['info', 'success', 'warning', 'error']}
            onChange={(v) => updateProp('variant', v)}
          />
        </>
      );

    case 'badge':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'info'}
            options={['info', 'success', 'warning', 'error']}
            onChange={(v) => updateProp('variant', v)}
          />
        </>
      );

    case 'status-label':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'info'}
            options={[
              'info',
              'success',
              'warning',
              'error',
              'operational',
              'degraded',
              'outage',
            ]}
            onChange={(v) => updateProp('variant', v)}
          />
        </>
      );

    case 'recommendation':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Description"
            value={(props.description as string) ?? ''}
            onChange={(v) => updateProp('description', v)}
            multiline
          />
        </>
      );

    case 'list':
      return (
        <>
          <StringListEditor
            label="Items"
            items={(props.items as string[]) ?? []}
            onChange={(v) => updateProp('items', v)}
          />
          <ToggleField
            label="Ordered"
            value={(props.ordered as boolean) ?? false}
            onChange={(v) => updateProp('ordered', v)}
          />
        </>
      );

    case 'metric-card':
      return (
        <>
          <TextField
            label="Value"
            value={(props.value as string) ?? ''}
            onChange={(v) => updateProp('value', v)}
          />
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
        </>
      );

    case 'stat-group':
      return (
        <ObjectListEditor
          label="Stats"
          items={
            (props.stats as Record<string, unknown>[]) ?? []
          }
          fields={[
            { key: 'label', label: 'Label', type: 'text' },
            { key: 'value', label: 'Value', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'text' },
          ]}
          onChange={(v) => updateProp('stats', v)}
          defaultItem={{ label: '', value: '', subtitle: '' }}
        />
      );

    case 'table':
      return (
        <>
          <TableEditor
            headers={(props.headers as string[]) ?? []}
            rows={(props.rows as string[][]) ?? []}
            onHeadersChange={(v) => updateProp('headers', v)}
            onRowsChange={(v) => updateProp('rows', v)}
          />
          <ToggleField
            label="Striped rows"
            value={(props.striped as boolean) ?? true}
            onChange={(v) => updateProp('striped', v)}
          />
          <ToggleField
            label="Hoverable rows"
            value={(props.hoverable as boolean) ?? true}
            onChange={(v) => updateProp('hoverable', v)}
          />
        </>
      );

    case 'progress-stepper':
      return (
        <>
          <SelectField
            label="Orientation"
            value={(props.orientation as string) ?? 'horizontal'}
            options={['horizontal', 'vertical']}
            onChange={(v) => updateProp('orientation', v)}
          />
          <ObjectListEditor
            label="Steps"
            items={
              (props.steps as Record<string, unknown>[]) ?? []
            }
            fields={[
              { key: 'label', label: 'Label', type: 'text' },
              {
                key: 'status',
                label: 'Status',
                type: 'select',
                options: ['pending', 'active', 'complete'],
              },
            ]}
            onChange={(v) => updateProp('steps', v)}
            defaultItem={{ label: '', status: 'pending' }}
          />
        </>
      );

    case 'section-header':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Action label"
            value={(props.actionLabel as string) ?? ''}
            onChange={(v) => updateProp('actionLabel', v)}
          />
        </>
      );

    case 'key-value':
      return (
        <ObjectListEditor
          label="Items"
          items={
            (props.items as Record<string, unknown>[]) ?? []
          }
          fields={[
            { key: 'label', label: 'Label', type: 'text' },
            { key: 'value', label: 'Value', type: 'text' },
          ]}
          onChange={(v) => updateProp('items', v)}
          defaultItem={{ label: '', value: '' }}
        />
      );

    case 'divider':
      return (
        <SelectField
          label="Orientation"
          value={(props.orientation as string) ?? 'horizontal'}
          options={['horizontal', 'vertical']}
          onChange={(v) => updateProp('orientation', v)}
        />
      );

    case 'action-bar':
      return (
        <ObjectListEditor
          label="Actions"
          items={
            (props.actions as Record<string, unknown>[]) ?? []
          }
          fields={[
            { key: 'label', label: 'Label', type: 'text' },
            {
              key: 'variant',
              label: 'Variant',
              type: 'select',
              options: ['primary', 'secondary', 'ghost'],
            },
            { key: 'navigateTo', label: 'Navigate to', type: 'text' },
          ]}
          onChange={(v) => updateProp('actions', v)}
          defaultItem={{ label: '', variant: 'primary', navigateTo: '' }}
        />
      );

    case 'timeline':
      return (
        <>
          <SelectField
            label="Style"
            value={(props.variant as string) ?? 'timeline'}
            options={['timeline', 'compact']}
            onChange={(v) => updateProp('variant', v)}
          />
          <ObjectListEditor
            label="Items"
            items={
              (props.items as Record<string, unknown>[]) ?? []
            }
            fields={[
              { key: 'date', label: 'Date', type: 'text' },
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'description', label: 'Description', type: 'textarea' },
            ]}
            onChange={(v) => updateProp('items', v)}
            defaultItem={{ date: '', title: '', description: '' }}
          />
        </>
      );

    case 'accordion':
      return (
        <>
          <SelectField
            label="Style"
            value={(props.variant as string) ?? 'default'}
            options={['default', 'bordered']}
            onChange={(v) => updateProp('variant', v)}
          />
          <ObjectListEditor
            label="Items"
            items={
              (props.items as Record<string, unknown>[]) ?? []
            }
            fields={[
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'content', label: 'Content', type: 'textarea' },
            ]}
            onChange={(v) => updateProp('items', v)}
            defaultItem={{ title: '', content: '' }}
          />
        </>
      );

    case 'toggle':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <ToggleField
            label="Checked"
            value={(props.checked as boolean) ?? false}
            onChange={(v) => updateProp('checked', v)}
          />
        </>
      );

    case 'avatar':
      return (
        <>
          <TextField
            label="Initials"
            value={(props.initials as string) ?? ''}
            onChange={(v) => updateProp('initials', v)}
          />
          <SelectField
            label="Size"
            value={(props.size as string) ?? 'md'}
            options={['sm', 'md', 'lg']}
            onChange={(v) => updateProp('size', v)}
          />
        </>
      );

    case 'user-info':
      return (
        <>
          <TextField
            label="Name"
            value={(props.name as string) ?? ''}
            onChange={(v) => updateProp('name', v)}
          />
          <TextField
            label="Role"
            value={(props.role as string) ?? ''}
            onChange={(v) => updateProp('role', v)}
          />
          <TextField
            label="Initials"
            value={(props.initials as string) ?? ''}
            onChange={(v) => updateProp('initials', v)}
          />
        </>
      );

    case 'comment':
      return (
        <>
          <TextField
            label="Author"
            value={(props.author as string) ?? ''}
            onChange={(v) => updateProp('author', v)}
          />
          <TextField
            label="Time"
            value={(props.time as string) ?? ''}
            onChange={(v) => updateProp('time', v)}
          />
          <TextField
            label="Text"
            value={(props.text as string) ?? ''}
            onChange={(v) => updateProp('text', v)}
            multiline
          />
        </>
      );

    case 'activity-item':
      return (
        <>
          <TextField
            label="Description"
            value={(props.description as string) ?? ''}
            onChange={(v) => updateProp('description', v)}
          />
          <TextField
            label="Time"
            value={(props.time as string) ?? ''}
            onChange={(v) => updateProp('time', v)}
          />
          <TextField
            label="Icon"
            value={(props.icon as string) ?? ''}
            onChange={(v) => updateProp('icon', v)}
          />
        </>
      );

    case 'sidebar-nav':
      return (
        <ObjectListEditor
          label="Items"
          items={
            (props.items as Record<string, unknown>[]) ?? []
          }
          fields={[
            { key: 'label', label: 'Label', type: 'text' },
            { key: 'icon', label: 'Icon', type: 'text' },
            { key: 'active', label: 'Active', type: 'toggle' },
          ]}
          onChange={(v) => updateProp('items', v)}
          defaultItem={{ label: '', icon: '', active: false }}
        />
      );

    case 'toolbar':
      return (
        <ObjectListEditor
          label="Actions"
          items={
            (props.actions as Record<string, unknown>[]) ?? []
          }
          fields={[
            { key: 'label', label: 'Label', type: 'text' },
            {
              key: 'variant',
              label: 'Variant',
              type: 'select',
              options: ['primary', 'secondary', 'ghost'],
            },
          ]}
          onChange={(v) => updateProp('actions', v)}
          defaultItem={{ label: '', variant: 'ghost' }}
        />
      );

    case 'breadcrumb':
    case 'breadcrumb-nav':
      return (
        <StringListEditor
          label="Items"
          items={(props.items as string[]) ?? []}
          onChange={(v) => updateProp('items', v)}
        />
      );

    case 'pagination':
      return (
        <>
          <NumberField
            label="Total pages"
            value={(props.totalPages as number) ?? 5}
            onChange={(v) => updateProp('totalPages', v)}
            min={1}
          />
          <NumberField
            label="Current page"
            value={(props.currentPage as number) ?? 1}
            onChange={(v) => updateProp('currentPage', v)}
            min={1}
            max={(props.totalPages as number) ?? 5}
          />
        </>
      );

    case 'header':
      return (
        <>
          <ObjectListEditor
            label="Nav items"
            items={(props.navItems as Record<string, unknown>[]) ?? []}
            fields={[
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'href', label: 'Link', type: 'text' },
              { key: 'active', label: 'Active', type: 'toggle' },
            ]}
            onChange={(v) => updateProp('navItems', v)}
            defaultItem={{ label: '', href: '#', active: false }}
          />
          <ToggleField
            label="Sticky"
            value={(props.sticky as boolean) ?? false}
            onChange={(v) => updateProp('sticky', v)}
          />
        </>
      );

    case 'footer':
      return (
        <>
          <ObjectListEditor
            label="Columns"
            items={(props.columns as Record<string, unknown>[]) ?? []}
            fields={[
              { key: 'title', label: 'Column title', type: 'text' },
            ]}
            onChange={(v) => updateProp('columns', v)}
            defaultItem={{ title: '', links: [] }}
          />
          <TextField
            label="Copyright"
            value={(props.copyright as string) ?? ''}
            onChange={(v) => updateProp('copyright', v)}
          />
          <TextField
            label="Legal text"
            value={(props.legal as string) ?? ''}
            onChange={(v) => updateProp('legal', v)}
            multiline
          />
        </>
      );

    case 'hero':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Subtitle"
            value={(props.subtitle as string) ?? ''}
            onChange={(v) => updateProp('subtitle', v)}
            multiline
          />
          <TextField
            label="Primary CTA"
            value={(props.ctaLabel as string) ?? ''}
            onChange={(v) => updateProp('ctaLabel', v)}
          />
          <TextField
            label="Secondary CTA"
            value={(props.secondaryCtaLabel as string) ?? ''}
            onChange={(v) => updateProp('secondaryCtaLabel', v)}
          />
          <TextField
            label="Illustration URL"
            value={(props.illustration as string) ?? ''}
            onChange={(v) => updateProp('illustration', v)}
          />
        </>
      );

    case 'about-section':
      return (
        <>
          <TextField
            label="Title"
            value={(props.title as string) ?? ''}
            onChange={(v) => updateProp('title', v)}
          />
          <TextField
            label="Description"
            value={(props.description as string) ?? ''}
            onChange={(v) => updateProp('description', v)}
            multiline
          />
          <ObjectListEditor
            label="Content blocks"
            items={(props.blocks as Record<string, unknown>[]) ?? []}
            fields={[
              { key: 'title', label: 'Title', type: 'text' },
              { key: 'description', label: 'Description', type: 'textarea' },
              { key: 'ctaLabel', label: 'CTA label', type: 'text' },
            ]}
            onChange={(v) => updateProp('blocks', v)}
            defaultItem={{ title: '', description: '', ctaLabel: '' }}
          />
        </>
      );

    case 'tabs':
    case 'nav-tabs':
      return (
        <>
          <SelectField
            label="Style"
            value={(props.variant as string) ?? 'underline'}
            options={['underline', 'contained']}
            onChange={(v) => updateProp('variant', v)}
          />
          <ObjectListEditor
            label="Tabs"
            items={(props.tabs as Record<string, unknown>[]) ?? []}
            fields={[
              { key: 'label', label: 'Label', type: 'text' },
              { key: 'active', label: 'Active', type: 'toggle' },
            ]}
            onChange={(v) => updateProp('tabs', v)}
            defaultItem={{ label: '', active: false }}
          />
        </>
      );

    case 'progress':
      return (
        <>
          <NumberField
            label="Value (%)"
            value={(props.value as number) ?? 50}
            onChange={(v) => updateProp('value', v)}
            min={0}
            max={100}
          />
          <SelectField
            label="Style"
            value={(props.variant as string) ?? 'bar'}
            options={['bar', 'circle']}
            onChange={(v) => updateProp('variant', v)}
          />
          <SelectField
            label="Colour"
            value={(props.colour as string) ?? 'red'}
            options={['red', 'green', 'blue', 'gray']}
            onChange={(v) => updateProp('colour', v)}
          />
          <ToggleField
            label="Show label"
            value={(props.showLabel as boolean) ?? true}
            onChange={(v) => updateProp('showLabel', v)}
          />
        </>
      );

    case 'input':
    case 'form-field':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <SelectField
            label="Input type"
            value={(props.inputType as string) ?? 'text'}
            options={['text', 'email', 'password', 'textarea', 'date', 'number', 'tel', 'url']}
            onChange={(v) => updateProp('inputType', v)}
          />
          <TextField
            label="Placeholder"
            value={(props.placeholder as string) ?? ''}
            onChange={(v) => updateProp('placeholder', v)}
          />
          <SelectField
            label="Size"
            value={(props.size as string) ?? 'md'}
            options={['sm', 'md', 'lg']}
            onChange={(v) => updateProp('size', v)}
          />
          <ToggleField
            label="Required"
            value={(props.required as boolean) ?? false}
            onChange={(v) => updateProp('required', v)}
          />
          <TextField
            label="Error message"
            value={(props.error as string) ?? ''}
            onChange={(v) => updateProp('error', v)}
          />
        </>
      );

    case 'chip-group':
      return (
        <>
          <SelectField
            label="Chip style"
            value={(props.chipVariant as string) ?? 'filter'}
            options={['filter', 'choice', 'input']}
            onChange={(v) => updateProp('chipVariant', v)}
          />
          <StringListEditor
            label="Chips"
            items={
              ((props.chips as Array<{ label: string }>) ?? []).map(
                (c) => (typeof c === 'string' ? c : c.label) ?? '',
              )
            }
            onChange={(v) =>
              updateProp(
                'chips',
                v.map((label) => ({ label, removable: true })),
              )
            }
          />
        </>
      );

    case 'tag':
      return (
        <>
          <TextField
            label="Label"
            value={(props.label as string) ?? ''}
            onChange={(v) => updateProp('label', v)}
          />
          <SelectField
            label="Variant"
            value={(props.variant as string) ?? 'default'}
            options={['default', 'red', 'success', 'warning', 'outline']}
            onChange={(v) => updateProp('variant', v)}
          />
          <ToggleField
            label="Removable"
            value={(props.removable as boolean) ?? false}
            onChange={(v) => updateProp('removable', v)}
          />
        </>
      );

    // Fallback: show raw JSON editor
    default: {
      let jsonText: string;
      try {
        jsonText = JSON.stringify(props, null, 2);
      } catch {
        jsonText = '{}';
      }
      return (
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Properties (JSON)</label>
          <textarea
            className={styles.jsonFallback}
            value={jsonText}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value) as Record<string, unknown>;
                updateProps(parsed);
              } catch {
                // Invalid JSON, do not update
              }
            }}
          />
        </div>
      );
    }
  }
}

// ============================================================
// Main InlineEditor component
// ============================================================

export function InlineEditor({
  component,
  onUpdate,
  onClose,
  position,
}: InlineEditorProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  // Close on click outside
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleKeyDown, handleClickOutside]);

  // Clamp position to keep panel within viewport
  const clampedTop = Math.max(8, Math.min(position.top, window.innerHeight - 540));
  const clampedLeft = Math.max(8, Math.min(position.left, window.innerWidth - 380));

  return (
    <div
      ref={panelRef}
      className={styles.panel}
      style={{ top: clampedTop, left: clampedLeft }}
    >
      <div className={styles.header}>
        <span className={styles.typeBadge}>{component.type}</span>
        <span className={styles.componentId}>{component.id}</span>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close editor"
        >
          ×
        </button>
      </div>

      <div className={styles.body}>
        <PropertyFields component={component} onUpdate={onUpdate} />
      </div>

      <div className={styles.footer}>
        <button className="ubs-btn ubs-btn-primary ubs-btn-sm" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

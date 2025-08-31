# Dropdown Component

A fully accessible, customizable dropdown component with keyboard navigation, animations, and flexible positioning.

## Features

- ✅ Click and hover triggers
- ✅ Full keyboard navigation (Arrow keys, Enter, Space, Escape, Home, End)
- ✅ Click outside to close
- ✅ Accessibility compliant (ARIA attributes, roles)
- ✅ Flexible positioning (6 placement options)
- ✅ Smooth animations
- ✅ Disabled state support
- ✅ Icon and shortcut support
- ✅ TypeScript support
- ✅ Theme integration

## Basic Usage

```tsx
import {
  Dropdown,
  DropdownTrigger,
  DropdownItemList,
  DropdownItem,
  DropdownDivider,
} from '@atlast/components';

function MyComponent() {
  return (
    <Dropdown placement="bottomLeft">
      <DropdownTrigger>
        <button>Open Menu</button>
      </DropdownTrigger>
      <DropdownItemList>
        <DropdownItem
          label="Edit"
          shortcut="⌘E"
          onClick={() => console.log('Edit clicked')}
        />
        <DropdownItem
          label="Copy"
          shortcut="⌘C"
          onClick={() => console.log('Copy clicked')}
        />
        <DropdownDivider />
        <DropdownItem
          label="Delete"
          disabled
          onClick={() => console.log('Delete clicked')}
        />
      </DropdownItemList>
    </Dropdown>
  );
}
```

## Advanced Usage

### With Icons

```tsx
<DropdownItem
  label="Settings"
  icon={<SettingsIcon />}
  shortcut="⌘,"
  onClick={() => openSettings()}
/>
```

### Click Trigger

```tsx
<Dropdown trigger="click" placement="topRight">
  {/* ... */}
</Dropdown>
```

### Custom Trigger

```tsx
<DropdownTrigger asChild>
  <CustomButton>Custom Trigger</CustomButton>
</DropdownTrigger>
```

## API Reference

### Dropdown Props

| Prop        | Type                 | Default        | Description                   |
| ----------- | -------------------- | -------------- | ----------------------------- |
| `trigger`   | `'click' \| 'hover'` | `'hover'`      | How the dropdown is triggered |
| `placement` | `Placement`          | `'bottomLeft'` | Where the dropdown appears    |
| `children`  | `React.ReactNode`    | -              | Dropdown content              |

### DropdownItem Props

| Prop       | Type              | Default | Description               |
| ---------- | ----------------- | ------- | ------------------------- |
| `label`    | `string`          | -       | Item text                 |
| `disabled` | `boolean`         | `false` | Whether item is disabled  |
| `icon`     | `React.ReactNode` | -       | Optional icon             |
| `shortcut` | `string`          | -       | Keyboard shortcut display |
| `onClick`  | `() => void`      | -       | Click handler             |

### DropdownTrigger Props

| Prop       | Type              | Default | Description               |
| ---------- | ----------------- | ------- | ------------------------- |
| `asChild`  | `boolean`         | `false` | Render as child component |
| `children` | `React.ReactNode` | -       | Trigger content           |

### Placement Options

- `'bottomLeft'` - Below trigger, left-aligned
- `'bottomRight'` - Below trigger, right-aligned
- `'bottom'` - Below trigger, center-aligned
- `'topLeft'` - Above trigger, left-aligned
- `'topRight'` - Above trigger, right-aligned
- `'top'` - Above trigger, center-aligned

## Keyboard Navigation

- **Enter/Space**: Open dropdown (when closed)
- **Escape**: Close dropdown
- **Arrow Down/Up**: Navigate through items
- **Home**: Focus first item
- **End**: Focus last item
- **Enter**: Select focused item

## Accessibility

The dropdown component is fully accessible and includes:

- Proper ARIA attributes (`aria-haspopup`, `aria-expanded`, `aria-disabled`)
- Semantic roles (`menu`, `menuitem`, `separator`)
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Styling

The component uses CSS modules and CSS custom properties for theming:

```scss
// Available CSS custom properties
--color-surface: Background color --color-border: Border color
  --color-text: Text color --color-text-muted: Muted text color
  --color-primary-50: Hover background --color-primary-100: Focus ring
  --color-primary-600: Hover text;
```

## Testing

The component includes comprehensive tests covering:

- User interactions (click, hover, keyboard)
- Accessibility features
- Keyboard navigation
- Disabled states
- Placement options
- Animation behavior

Run tests with:

```bash
npm run test src/components/Dropdown/Dropdown.test.tsx
```

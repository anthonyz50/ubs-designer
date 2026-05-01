import { default as React } from 'react';

/** Visual variant of the tile. */
export type TileVariant = 'default' | 'selectable' | 'action';
/** Size of the tile. */
export type TileSize = 'small' | 'medium' | 'large';
/**
 * Props for the {@link Tile} component.
 */
export interface TileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onClick'> {
    /** Tile heading. */
    title: string;
    /** Optional description text. */
    description?: string;
    /** Optional icon element. */
    icon?: React.ReactNode;
    /** Optional image URL. */
    image?: string;
    /** Whether the tile is in a selected state (for selectable variant). @default false */
    selected?: boolean;
    /** Click handler. */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /** Visual variant. @default 'default' */
    variant?: TileVariant;
    /** Size variant. @default 'medium' */
    size?: TileSize;
}
/**
 * Interactive tile component for grid-based layouts.
 *
 * Supports keyboard activation (Enter and Space) and proper ARIA attributes
 * for selection state in the selectable variant.
 *
 * @example
 * ```tsx
 * <Tile
 *   title="Transfer"
 *   description="Send money to another account"
 *   icon={<TransferIcon />}
 *   variant="selectable"
 *   selected={isSelected}
 *   onClick={() => toggleSelected()}
 * />
 * ```
 */
declare const Tile: React.ForwardRefExoticComponent<TileProps & React.RefAttributes<HTMLDivElement>>;
export { Tile };
